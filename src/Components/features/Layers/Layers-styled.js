import styled from "styled-components";

const LayersContainer = styled.div`
  width: 240px;
  height: 100%;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const Labels = styled.div`
`;

const Label = styled.span`
  padding: 0 8px;
  color: ${(props) => (props.disabled ? "#ccc" : "#333333")};
`;

const Page = styled.span`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export {
  LayersContainer,
  Header,
  Labels,
  Label,
  Page,
};
