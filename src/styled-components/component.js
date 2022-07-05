import styled from "styled-components";

export const Navigation = styled.nav`
position: sticky;
 top: 0;
 z-index: 999;
width: 100%;
height: 100%;
background-color: #fff;
box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.25);
padding: 10px 25px;
display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BoxWrap = styled.div`
width: ${props=> props.width};
height: ${props=> props.height};
display: flex;
  flex-direction: ${props=> props.direction};
  align-items: ${props=> props.align};
  justify-content: ${props=> props.justify};
`

export const Images = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
`

export const FilterInput = styled.select`
width: 150px;
height: 40px;
font-size: 16.5px;
border: 1px solid #7c7c7c;
`

export const OptionInput = styled.option``

export const Button = styled.button`
width: ${props=> props.width};
height: ${props=> props.height};
background-color: ${props=> props.btnBg};
color: #fff;
cursor: pointer;
border-radius: ${props=> props.radius};
font-size: ${props=> props.size};
`

export const TextInput = styled.input`
width: ${props=> props.width};
height: ${props=> props.height};
font-size: ${props=> props.size};
padding-left: 10px;
border: 1px solid #7c7c7c;
 border-radius: 6px;
`