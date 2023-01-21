import { useState, useEffect } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
// 반응형을 위해 자동으로 width나 height을 알고 싶을때 사용
import AutoSizer from 'react-virtualized-auto-sizer';
// 무한스크롤할때 사용
import InfiniteLoader from 'react-window-infinite-loader';
import styled from 'styled-components';
import ProductCard from 'components/ProductCard';

const GUTTER_SIZE = 10;

const ProductMain = ({ list, params }) => {
	const Cell = ({ columnIndex, rowIndex, data }) => (
		<>
			{data[rowIndex * 2 + columnIndex] && (
				<div>
					<ProductCard type="main" data={data[rowIndex * 2 + columnIndex]} />
				</div>
			)}
		</>
	);

	const loadMore = () => {
		const { page, totalElement, limit } = params.pageData;
		if (totalElement < limit * (page - 1)) {
			return;
		}
		params.getProductList({ page: page + 1 });
	};
  

	return (
		<>
      <ProductMainBlock>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader isItemLoaded={index => index < list.length} itemCount={list.length + 1} loadMoreItems={loadMore}>
              {({ onItemsRendered, ref }) => {
                // onItemsRendered는 Grid가 아닌 List를 사용하면 
                // <List onItemsRendered={onItemsRendered} />이렇게 넘겨주면 됩니다.
                // Grid를 사용하면 리스트의 바닥에 스크롤이 도달해도 자동으로 onItemsRendered가 실행 되지 않습니다. 
                // 그래서 아래처럼 임의 함수를 만들어서 <Grid onItemsRendered={newItemsRendered} /> 형태로 넘깁니다.

                const newItemsRendered = gridData => {
                  const { visibleRowStopIndex, overscanRowStartIndex, overscanRowStopIndex, overscanColumnStopIndex } = gridData;

                  const visibleStartIndex = overscanRowStartIndex * overscanColumnStopIndex;
                  const visibleStopIndex = overscanRowStopIndex * overscanColumnStopIndex;

                  // 현재 브라우저에 보여지는 list가 맨 바닥이면 onItemsRendered를 실행한다.
                  if (visibleRowStopIndex >= list.length / 2 - 1) {
                    onItemsRendered({ visibleStartIndex, visibleStopIndex });
                  }
                };

                return (
                  <Grid
                    style={{ paddingBottom: '100px' }}
                    itemCount={list.length + 1}
                    itemData={list}
                    columnCount={2}
                    columnWidth={(width - GUTTER_SIZE) / 2}
                    height={height}
                    rowCount={Math.ceil(list.length / 2)}
                    rowHeight={width / 2 + 160}
                    onItemsRendered={newItemsRendered}
                    width={width}
                    ref={ref}>
                    {Cell}
                  </Grid>
                );
              }}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </ProductMainBlock>
		</>
	);
};

const ProductMainBlock = styled.div`
	height: 100vh;
	width: 100%;
`;

export default ProductMain;
