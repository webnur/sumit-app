import styled from "styled-components";
import Title from "../Title";

export const StyledTitle = styled(Title)`
  display: inline-block;
  color: #fff;
  background: ${(props) => props.color};
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
`;