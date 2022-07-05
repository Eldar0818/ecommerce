import styled from "styled-components";
import { bigScreen, midBigScreen, midScreen, smallScreen } from "./responsiveStyled";

export const Container = styled.section`
width: ${props=> props.width};
height: ${props=> props.height};;
`

export const GridBox = styled.section`
width: ${props=> props.width};
padding: ${props=> props.padding};
margin: 0 auto;
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  ${bigScreen({ width: "99%" })}
  ${midBigScreen({ gridTemplateColumns: "repeat(3, 1fr)" })}
  ${midScreen({ gridTemplateColumns: "repeat(2, 1fr)" })}
  ${smallScreen({ gridTemplateColumns: "repeat(1, 1fr)" })}
`
export const CartBox = styled.div`
max-width: 798px;
 width: 100%;
 min-height: 100vh;
 height: 100%;
 background-color: #fff;
 position: fixed;
 top: 0;
 z-index: 999;
 box-shadow: 0px 0px 7.5px 5px rgba(0, 0, 0, 0.25);
 right: 0;
 transition: all 0.5s ease;
`