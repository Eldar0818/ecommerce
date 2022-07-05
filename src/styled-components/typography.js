import styled from "styled-components";

export const TitleText = styled.h4`
font-size: ${props=> props.size};
  color: ${props=> props.color};
  font-weight: ${props=> props.weight};
  text-align: ${props=> props.textCenter};
`
export const InlineText = styled.span`
font-size: ${props=> props.size};
  color: ${props=> props.color};
  font-weight: ${props=> props.weight};
  text-align: ${props=> props.textCenter};
`
export const ContentText = styled.p`
font-size: ${props=> props.size};
  color: ${props=> props.color};
  font-weight: ${props=> props.weight};
  text-align: ${props=> props.textCenter};
`