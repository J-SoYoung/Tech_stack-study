import axios from "axios";
import { useQuery } from "react-query";
import { VariableSizeList as List } from "react-window";
import styled from "styled-components";

const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));
const getItemSize = (index) => rowHeights[index];
const Row = ({ index, style }) => <div style={style}>Rowss {index}</div>;

const Example = () => (
  <List height={150} itemCount={10} itemSize={getItemSize} width={300}>
    {Row}
  </List>
);

export default Example;
