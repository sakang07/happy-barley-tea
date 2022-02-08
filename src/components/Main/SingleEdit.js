import React from "react";
import styled from "styled-components";
import {
  CardCaption,
  CardImage,
  CardLi,
  CardList,
  CardWrapper,
  HeadTitle,
  SectionWrapper,
  ViewContent,
  ViewImage,
  ViewWrapper,
  WrapperDiv,
} from "../UI/Common";

const SingleEditDiv = styled.section`
  width: 100%;
  background-color: #ffffff;
`;

const SingleEdit = () => {
  return (
    <SingleEditDiv>
      <SectionWrapper width={"1280px"}>
        <HeadTitle color="#111">single edit</HeadTitle>
        <ViewWrapper columns={"2fr 1fr"}>
          <ViewImage>image</ViewImage>
          <ViewContent>title</ViewContent>
        </ViewWrapper>
        <CardWrapper>
          <CardList
            style={{
              display: "grid",
              gridAutoFlow: "column",
              justifyContent: "space-between",
            }}
          >
            <CardLi>
              <WrapperDiv>
                <CardImage width={"400px"} height={"400px"}>
                  img
                </CardImage>
                <CardCaption>
                  <dt>your edit</dt>
                  <dd>텃새 딱새</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi>
              <WrapperDiv>
                <CardImage width={"400px"} height={"400px"}>
                  img
                </CardImage>
                <CardCaption>
                  <dt>your edit</dt>
                  <dd>텃새 딱새</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi>
              <WrapperDiv>
                <CardImage width={"400px"} height={"400px"}>
                  img
                </CardImage>
                <CardCaption>
                  <dt>your edit</dt>
                  <dd>텃새 딱새</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
          </CardList>
        </CardWrapper>
      </SectionWrapper>
    </SingleEditDiv>
  );
};

export default SingleEdit;
