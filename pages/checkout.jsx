import React,{useEffect,useState} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import {useCartContext} from '../contexts/CartContextProvider'
import client from '../lib/commerce'
import useStyles from '../styles/checkout'
import {useRouter} from 'next/router'

import PaymentForm from '../components/PaymentForm'
import AddressForm from '../components/AddressForm'

const steps = ['Shipping address', 'Payment details'];

function checkout() {
    const [activeStep,setActiveStep] = useState(0)
    const {cart,handleCaptureCheckout,errorMessage,order} = useCartContext()
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false)
    const classes = useStyles()

    const router = useRouter()


    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await client.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
            } catch {
              if (activeStep !== steps.length) router.push('/');
            }
          };
    
          generateToken();
        }
      }, [cart]);

    


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep +1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep -1)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const timeout = ()=>{
        setTimeout(() => {
            setIsFinished(true)
        }, 3000);
    }

    let Confirmation=()=> order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname}{order.customer.lastname}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant="subtitle2">order ref:{order.customer_reference}</Typography>
            </div>
            <br />
            <Button onClick={()=>router.push('/')} variant="outlined" type="button">Back to Home</Button>
        </>
    ): isFinished ? (
        <>
        <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
            <Divider className={classes.divider}/>
        </div>
        <br />
        <Button onClick={()=>router.push('/')} variant="outlined" type="button">Back to Home</Button>
    </>
    ):(
        <div className={classes.spinner}>
            <CircularProgress /> 
        </div>
    )

    if(errorMessage){
        Confirmation = () =>(
        <>
        <Typography variant="h5">Error:{errorMessage}</Typography>
        <br />
        <Button onClick={()=>router.push('/')} variant="outlined" type="button">Back to Home</Button>
        </>
        )
    }

    const Form =()=> activeStep ===0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={handleCaptureCheckout} timeout={timeout}/>

    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step)=>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                 {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
            </Paper>

        </main>

        </>
    )
}

export default checkout
