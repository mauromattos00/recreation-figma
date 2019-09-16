import React from "react";

import * as S from "./Layers-styled";

import { ArrowDown } from "./../../elements";

const Layers = () => (
  <S.LayersContainer>
    <S.Header>
      <S.Labels>
        <S.Label>Layers</S.Label>
        <S.Label disabled>Assets</S.Label>
      </S.Labels>

      <S.Page>
        Page 1
        <ArrowDown />
      </S.Page>
    </S.Header>
  </S.LayersContainer>
);

export default Layers;
