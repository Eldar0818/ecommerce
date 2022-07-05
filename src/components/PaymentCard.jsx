import { BoxWrap, Button, Images, TextInput } from "../styled-components/component"
import { Container } from "../styled-components/layout"
import { ContentText, InlineText, TitleText } from "../styled-components/typography"
import { FaTimesCircle } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'
import { useState, useRef } from "react"

const PaymentCard = ({setCheckoutClick}) => {

    const [confirmed, setConfirmed] = useState(false)
    const [errorText, setErrorText] = useState(false)

    let holder = useRef()
    let cardNum = useRef()
    let cvvNum = useRef()
    let cardDate = useRef()

    const handleConfirem = ()=> {
        if(holder.current.value && cardNum.current.value && cvvNum.current.value && cardDate.current.value){
            setConfirmed(true)
            localStorage.clear()
            setTimeout(()=> {
                window.location.reload()
            }, 5000)
        }else{
            setTimeout(()=> {
                setErrorText(false)
            }, 3000)
            setErrorText(true)
        }
    }

  return (
    <Container width="100%" height="100vh"
        style={{ position: "fixed", top:"0", zIndex:"999", background: "#24424470" }}
    >
        <BoxWrap width="100%" height="100%" align="center" justify="center" >
        { confirmed ? (  /* after successful payment */
            <BoxWrap
                width="100%" height="100%" direction="column"
                style={{ maxWidth: "860px", maxHeight: "768px", background: "#fff", padding: "15px", border: "2.5px solid #244244" }}
            >
                    <BoxWrap width="100%" direction="column" align="center">
                        <TitleText size="45px" color="green" textCenter="center"
                            style={{margin: "50px 0"}}
                        >
                            THANKS FOR YOU PURCHASING!
                            <ImCheckmark/>
                        </TitleText>
                        <ContentText
                            size="25px" color="#242424" textCenter="center"
                            style={{letterSpacing: "1.2px", lineHeight: "37px", padding: "25px"}}
                        >
                        Your order has been received by us. When we receive your payment information, we will ship the goods in time and send you a web link to track the goods. please wait patiently.
                        </ContentText>
                    </BoxWrap>

            </BoxWrap>) : (    /* before payment */       
               <BoxWrap width="100%" height="100%" direction="column"
                style={{ maxWidth: "860px", maxHeight: "768px", background: "#fff", padding: "15px", border: "2.5px solid #244244" }}
               >
                    <FaTimesCircle 
                        style={{ alignSelf: "flex-end", cursor: "pointer", fontSize: "30px", marginBottom: "15px" }}
                        onClick={()=> setCheckoutClick(false)}
                    />
                    <TitleText size="35px" weight="600"
                    style={{marginBottom: "20px"}}
                    >
                        CONFIRM YOUR PAYMENT
                    </TitleText>
                    <BoxWrap direction="column"
                        style={{marginBottom: "20px"}}
                    >
                        <InlineText size="17.5px" color="#242424"
                            style={{marginBottom: "10px"}}
                        >
                            Holder Name:
                        </InlineText>
                        <TextInput width="100%" height="45px" size="17.5px"
                            style={{maxWidth: "650px"}}
                            ref={holder}
                        />
                    </BoxWrap>
                    <BoxWrap direction="column"
                        style={{marginBottom: "20px"}}
                    >
                        <InlineText size="17.5px" color="#242424"
                            style={{marginBottom: "10px"}}
                        >
                            Card Number:
                        </InlineText>
                        <TextInput width="100%" height="45px" size="17.5px"
                            style={{maxWidth: "768px"}}
                            type="number"
                            ref={cardNum}
                        />
                    </BoxWrap>
                    <BoxWrap direction="column"
                        style={{marginBottom: "20px"}}
                    >
                        <InlineText size="17.5px" color="#242424"
                            style={{marginBottom: "10px"}}
                        >
                            CVV:
                        </InlineText>
                        <TextInput width="100%" height="45px" size="17.5px"
                            style={{maxWidth: "225px"}}
                            type="number"
                            ref={cvvNum}
                        />
                    </BoxWrap>
                    <BoxWrap direction="column"
                        style={{marginBottom: "20px"}}
                    >
                        <InlineText size="17.5px" color="#242424"
                            style={{marginBottom: "10px"}}
                        >
                            Valid Date:
                        </InlineText>
                        <TextInput width="100%" height="45px" size="17.5px"
                            style={{maxWidth: "225px"}}
                            type="date"
                            ref={cardDate}
                        />
                    </BoxWrap>
                    <BoxWrap width="100%" height="50px" 
                        style={{maxWidth: "768px", marginBottom: "50px"}}
                    >
                        <Images src="/assets/paymentPic.png" />
                    </BoxWrap>
                    <Button btnBg="royalblue" width="100%" height="50px" radius="6px" size="17.5px"
                        style={{maxWidth: "450px", alignSelf: "center"}}
                        onClick={handleConfirem}
                    >
                        Confirm
                    </Button>
                    { errorText && <ContentText color="crimson" size="16.5px" >PLease enter all valid bankcard informations</ContentText> }
               </BoxWrap>
               )}
        </BoxWrap>
    </Container>
  )
}

export default PaymentCard