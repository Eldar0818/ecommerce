import { Container } from "../styled-components/layout"
import Banner from "./Banner"
import Navbar from "./Navbar"
import axios from "axios"
import { useState, useEffect } from "react"
import Products from "./Products"
import Cart from "./Cart"
import { ContentText, TitleText } from "../styled-components/typography"
import PaymentCard from "./PaymentCard"

const Main = () => {

  const [products, setProducts] = useState([])
  useEffect(()=> {
    const fetchProducts = async()=> {
      try {
        const response = await axios.get('https://edr-ecommerce-api.herokuapp.com/api/products')
        setProducts(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts()

  }, [])

  const [openCart, setOpenCart] = useState(false)
  const [checkoutClick, setCheckoutClick] = useState(false)

  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 4500)
  }, [])

  return (
    <Container width="100%" >
      <Navbar setOpenCart={setOpenCart} />
      <Banner/>
      {loading ? <Container width="100%" height="50vh"
          style={{display: "flex", alignItems:"center", justifyContent: "center"}}
      >
        <TitleText color="teal" size="45px" textCenter="center" >Loading Products...</TitleText> 
      </Container> :
       <Products allProducts={products} /> }
      <Cart 
        openCart={openCart}
        setOpenCart={setOpenCart}
        allProducts={products}
        setCheckoutClick={setCheckoutClick}
       />
       { checkoutClick && <PaymentCard 
        setCheckoutClick={setCheckoutClick}
       /> }
       <Container width="100%" 
        style={{ background: "#242424", padding: "10px" }}
       >
          <TitleText color="#f0f0f0" size="25px" textCenter="center" >EDR-SHOP.</TitleText>
          <ContentText color="#f0f0f0" size="16.5px" textCenter="center" >Web dev Eldar created 2022 &copy;</ContentText>
       </Container>
    </Container>
  )
}

export default Main