import { useState } from "react"
import { BoxWrap, Images } from "../styled-components/component"
import { Container } from "../styled-components/layout"
import { TitleText } from "../styled-components/typography"

const Banner = () => {

    const [bannerShrink, setBannerShrink] = useState(false)
    window.addEventListener('resize', ()=> {
        if(window.innerWidth > 698){
            setBannerShrink(false)
        }else{
            setBannerShrink(true)
        }
    })

  return (
    <Container 
        height="70vh" 
        style={{position: "relative", background: "#242424"}}
     >
        <Images src="./assets/banner.jpg" style={{opacity: "0.35", objectPosition: "center bottom"}} />
        <BoxWrap width="100%" height="100%"
            align="center"
            style={{ position: "absolute", top: "0" }}
        >
            <BoxWrap direction="column" width="100%"
                style={{paddingLeft: `${bannerShrink ? "10px" : "100px"}`}}
            >
                <TitleText color="#fff" size="50px" weight="600" >NEW SEASON ARRIVALS</TitleText>
                <TitleText color="#f0f0f0" size="35px" weight="400" >Check Out All The Trends</TitleText>
            </BoxWrap>
        </BoxWrap>
    </Container>
  )
}

export default Banner