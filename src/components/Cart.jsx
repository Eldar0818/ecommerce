import { BoxWrap, Button, Images } from "../styled-components/component"
import { CartBox, Container } from "../styled-components/layout"
import { FaTimesCircle } from 'react-icons/fa'
import { ContentText, InlineText, TitleText } from "../styled-components/typography"
import { BsTrashFill } from 'react-icons/bs'
import { useSelector } from "react-redux/es/exports"
import { useDispatch } from 'react-redux'
import { removeCartItem, totalPriceCalculate } from '../Redux/cartRedux'
import { useEffect } from "react"

const Cart = ({ openCart, setOpenCart, setCheckoutClick }) => {

    const cart = useSelector(state=> state.cart)
    console.log(cart);
    let allProducts = cart.cartItems
    console.log(allProducts);

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(totalPriceCalculate())
    }, [cart, dispatch])

    const handleRemove = (item)=> {
        dispatch(removeCartItem(item))
    }

  return (
    <CartBox  
        style={openCart ? { width: "100%", opacity: "1"} : {width: "0", opacity: "0"}}
    >
        <Container width="100%" height="100%">
            <BoxWrap style={{padding: "25px"}} >
                <FaTimesCircle
                    style={{fontSize: "25px", cursor: "pointer"}}
                    onClick={()=> setOpenCart(false)}
                />
            </BoxWrap>
            {/* cart items */}
            <BoxWrap direction="column" width="100%">
                {
                    allProducts.map(item=> {
                        return <BoxWrap align="center" 
                                style={{ padding: "10px 0", marginBottom: "10px", borderBottom: "1px solid #ddd" }}
                                key={item.id}
                            >

                           <BoxWrap justify="center"
                            style={{ flex: "1"}}
                           >
                                <BoxWrap width="65px" height="65px" >
                                    <Images src={item.product.poster} />
                                </BoxWrap>
                           </BoxWrap>

                            <BoxWrap direction="column"  align="center"
                                style={{ flex: "1"}}
                            >
                                <ContentText style={{ marginBottom: "5px" }}>{item.product.title}</ContentText>
                                <ContentText style={{ marginBottom: "5px" }}>{item.product.price * item.amount} kr</ContentText>
                                <InlineText 
                                    style={{ padding: "2.5px", border: "1px solid #7c7c7c" }}
                                >
                                    {item.amount}
                                </InlineText>
                            </BoxWrap>

                            <BoxWrap
                                justify="center"
                                style={{ flex: "1"}}
                            >
                                <BsTrashFill
                                    style={{ fontSize: "25px", cursor: "pointer", color: "crimson" }}
                                    onClick={()=> handleRemove(item.product, item.amount)}
                                />
                            </BoxWrap>

                        </BoxWrap>
                    })
                }
            </BoxWrap>

            <BoxWrap direction="column" width="100%" align="flex-end"
                style={{ padding: "20px" }}
            >
                <TitleText
                    size="20px"
                    style={{ marginBottom: "10px" }}
                >
                    Total Prcie: <InlineText color="royalblue" >{cart.total}</InlineText> SEK
                </TitleText>
                <Button 
                    btnBg="#242424" width="165px" height="40px" radius="6px" size="16.5px"
                    onClick={()=> allProducts.length > 0 ? setCheckoutClick(true) : alert("Cart is empty")}
                >
                    CHECKOUT
                </Button>
            </BoxWrap>
        </Container>
    </CartBox>
  )
}

export default Cart