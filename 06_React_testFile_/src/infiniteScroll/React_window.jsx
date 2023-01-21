import axios from "axios";
import { useQuery } from "react-query";
import { VariableSizeList as List } from "react-window";
import InfiniteData from "./apis";
import styled from "styled-components";

const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const Row = ({ index, style }) => <div style={style}>Rowss {index}</div>;

const Rows = ({ index, style }) => {
  return (
    <div style={style}>
      <h2>thdud</h2>
      <span>thdud</span>
    </div>
  );
};
const getItemSize = (index) => rowHeights[index];

<InfiniteData />;

const Example = () => (
  <List height={300} itemCount={10} itemSize={getItemSize} width={300}>
    {Rows}
  </List>
);

export default Example;
