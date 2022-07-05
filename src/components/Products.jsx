import { useState } from "react"
import { BoxWrap, FilterInput, Images, OptionInput } from "../styled-components/component"
import { Container, GridBox } from "../styled-components/layout"
import { ContentText, InlineText, TitleText } from "../styled-components/typography"
import Product from "./Product"

const Products = ({ allProducts }) => {

    const [itemClick, setItemClick] = useState(false)
    const [targetItem, setTargerItem] = useState({})
    const [filterOptions, setFilterOptions] = useState("")

    const openDesc = (id)=> {
        setItemClick(true)
        let getItem = allProducts.find(item=> item._id === id)
        setTargerItem(getItem)
    }


  return (
    <Container>
        <BoxWrap style={{padding: "25px 0", margin: "0 auto"}} width="85%" align="center" >
            <InlineText size="20px" style={{paddingRight: "10px"}} >Choose Gender:</InlineText>
            <FilterInput onChange={e=> setFilterOptions(e.target.value)}>
                <OptionInput value="all">All</OptionInput>
                <OptionInput value="male">Male</OptionInput>
                <OptionInput value="female">Female</OptionInput>
            </FilterInput>
        </BoxWrap>

        <GridBox width="85%" padding="15px">
            {
                allProducts.filter(product=> {

                    if(filterOptions === "male"){
                        return product.for === "male"
                    }else if(filterOptions === "female"){
                        return product.for === "female"
                    }

                    return product
                }).map(product=> (
                    <Product 
                        key={product._id} 
                        product={product} 
                        openDesc={openDesc}
                    />
                ))
            }
        </GridBox>
        { itemClick && (<BoxWrap width="100%" height="100vh" justify="center" align="center"
            style={{ position: "fixed", top: "0", background: "#24424470" }}
            onClick={()=> setItemClick(false)}
        >
            {
                <BoxWrap direction="row"
                    width="100%"
                    style={{ padding: "10px", background: "#f0f0f0", maxWidth: "735px" }}
                >
                    <BoxWrap 
                        style={{flex: "1"}}
                    >
                        <BoxWrap width="100%" height="435px"
                            >
                            <Images src={targetItem && targetItem.poster} />
                        </BoxWrap>
                    </BoxWrap>
                    <BoxWrap direction="column" justify="center"
                        style={{flex: "1", padding: "10px"}}
                    >
                        <TitleText
                            size="25px" color="#244244"
                            style={{ marginBottom: "20px", textTransform: "capitalize" }}
                        >
                            {targetItem && targetItem.title}
                        </TitleText>
                        <ContentText
                            size="18.5px" color="#7c7c7c"
                            style={{ textTransform: "capitalize" }}
                        >
                            {targetItem && targetItem.desc}
                        </ContentText>
                    </BoxWrap>
                </BoxWrap>
            }
        </BoxWrap>) }
        
    </Container>
  )
}

export default Products