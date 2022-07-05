import { BoxWrap, Button, Images } from "../styled-components/component"
import { InlineText, TitleText } from "../styled-components/typography"
import { BsCart3 } from 'react-icons/bs'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addCartItems } from '../Redux/cartRedux'

const Product = ({ product, openDesc }) => {

    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()

    const handleAmount = (keyword)=> {
        if(keyword === "increase"){
            setAmount(amount + 1)
        }
        if(keyword === "decrease"){
            setAmount(amount > 1? amount - 1 : 1)
        }
    }

    const handleAddCart = ()=> {
        dispatch(addCartItems({product, amount}))
        alert("Produc has been added to the cart.")
    }

  return (
   <BoxWrap direction="column"
    style={{padding: "10px", border: "1px solid #7c7c7c", borderRadius: "6px"}}
    >
        <TitleText size="20px" style={{marginBottom: "10px", textTransform: "capitalize"}} >{product.title}</TitleText>

        <BoxWrap width="100%" height="250px" justify="center"
         style={{marginBottom: "10px", cursor: "pointer"}}
         onClick={()=> openDesc(product._id)}
        >
            <Images src={product.poster} />
        </BoxWrap>

        <BoxWrap  width="100%" justify="space-between" align="center"
            style={{padding: "10px 0"}}
        >

            <InlineText size="15px">{product.price} kr/-</InlineText>

            <BoxWrap align="center">
                <Button 
                    btnBg="teal" width="25px" height="25px" radius="50%" size="14px"
                    onClick={()=> handleAmount("decrease")}         
                 >
                    -
                </Button>
                <InlineText size="15px" style={{margin: "0 10px"}} >{amount}</InlineText>
                <Button
                    btnBg="teal" width="25px" height="25px" radius="50%" size="14px"
                    onClick={()=> handleAmount("increase")} 
                >
                    +
                </Button>
            </BoxWrap>

            <BoxWrap>
                <BsCart3 
                    style={{cursor: "pointer", fontSize: "25px"}}
                    onClick={handleAddCart}
                />
            </BoxWrap>

        </BoxWrap>
   </BoxWrap>
  )
}

export default Product