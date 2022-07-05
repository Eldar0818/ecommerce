import { BoxWrap, Navigation } from "../styled-components/component"
import { InlineText, TitleText } from "../styled-components/typography"
import { BsCart3 } from 'react-icons/bs'
import { useState } from "react"
import { useSelector } from 'react-redux'

const Navbar = ({ setOpenCart }) => {

    const cartQuantity = useSelector(state=> state.cart.amount)

    const [navShrink, setNavShrink] = useState(false)

    window.addEventListener('resize', ()=> {
        if(window.innerWidth > 628){
            setNavShrink(false)
        }else{
            setNavShrink(true)
        }
    })

  return (
   <Navigation>
    <BoxWrap width="50%"  justify={navShrink ? "flex-start": "center"} >

        <TitleText
            size={navShrink ? "27.5px" : "35px"} color="royalblue"
            style={{cursor: 'pointer'}}
            >
            EDR-SHOP.
        </TitleText>
    </BoxWrap>
    <BoxWrap width="50%" justify={navShrink ? "flex-end": "center"} >
        <BoxWrap align="center"
            onClick={()=> setOpenCart(true)}
            style={{padding: "10px 25px", borderRadius: "6px", border: "1px solid #7c7c7c", cursor: "pointer"}}
        >
            <BsCart3 style={{fontSize: "25px", marginRight: "5px"}} />
            <InlineText size="16.5px" color="crimson" >{cartQuantity}</InlineText>
        </BoxWrap>
    </BoxWrap>
   </Navigation>
  )
}

export default Navbar