import styled from "styled-components";

const IconContainer = styled.div`
  background: ${(props) => (props.blue ? "#18a0fb" : "none")};
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
 
  &:hover {
    background: ${(props) => (props.blue ? "#18a0fb" : "#000")};
  }
`;

const arrowDownIconContainer = styled.span`
  margin-left: 5px;
  font-size: 0.8rem;
`;

const headerContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  background: #2c2c2c;
`;

const MenuOptions = styled.div`
  display: flex;
`;

const FileOptions = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const FileLabel = styled.span`
  color: #a8a8a8;
  font-size: 0.9rem;
`;

const FileName = styled.span`
  margin-left: 6px;
  font-size: 0.9rem;
`;

const UserOptions = styled.div`
  display: flex;
  align-items: center;
`;

const BtnShare = styled.button`
  background: #18a0fb;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  margin-left: 25px;
`;

const BtnRunContainer = styled.div`
  font-size: 0.8rem;
  padding: 0 25px;
  color: #fff;
`;

const ScreenScaleContainer = styled.span`
  font-size: 0.8rem;
  color: #fff;
  padding-right: 25px;
`;

const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export {
  IconContainer,
  MenuOptions,
  FileOptions,
  FileName,
  UserOptions,
  FileLabel,
  arrowDownIconContainer,
  headerContainer,
  UserAvatar,
  BtnShare,
  BtnRunContainer,
  ScreenScaleContainer
};
