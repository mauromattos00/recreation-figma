import React from "react";
import faker from "faker";

import {
  FaBars,
  FaMousePointer,
  FaAngleDown,
  FaExpand,
  FaPenNib,
  FaFont,
  FaRegComment,
  FaPlay,
} from "react-icons/fa";


import * as S from "./Header-styled";


const Header = () => (
  <S.headerContainer>

    {/* Menu */}
    <S.MenuOptions>
      <S.IconContainer>
        <FaBars />
      </S.IconContainer>

      {/* Cursor */}
      <S.IconContainer blue>
        <FaMousePointer />
        <S.arrowDownIconContainer>
          <FaAngleDown />
        </S.arrowDownIconContainer>
      </S.IconContainer>

      {/* Layout */}
      <S.IconContainer>
        <FaExpand />
        <S.arrowDownIconContainer>
          <FaAngleDown />
        </S.arrowDownIconContainer>
      </S.IconContainer>

      {/* Caneta */}
      <S.IconContainer>
        <FaPenNib />
        <S.arrowDownIconContainer>
          <FaAngleDown />
        </S.arrowDownIconContainer>
      </S.IconContainer>

      {/* Escrita */}
      <S.IconContainer>
        <FaFont />
      </S.IconContainer>

      {/* Comentário */}
      <S.IconContainer>
        <FaRegComment />
      </S.IconContainer>
    </S.MenuOptions>

    {/*  Opções do Arquivo */}
    <S.FileOptions>
      <S.FileLabel>Drafts /</S.FileLabel>
      <S.FileName>{faker.system.fileName()}</S.FileName>
      <S.arrowDownIconContainer>
        <FaAngleDown />
      </S.arrowDownIconContainer>
    </S.FileOptions>

    {/* Toolbar */}
    <S.UserOptions>
      <S.UserAvatar src={faker.image.avatar()} alt="User Avatar" />
      <S.BtnShare>Share</S.BtnShare>
      <S.BtnRunContainer>
        <FaPlay />
      </S.BtnRunContainer>
      <S.ScreenScaleContainer>
        {faker.random.number()}%
        <S.arrowDownIconContainer>
          <FaAngleDown />
        </S.arrowDownIconContainer>
      </S.ScreenScaleContainer>
    </S.UserOptions>
  </S.headerContainer>
);

export default Header;
