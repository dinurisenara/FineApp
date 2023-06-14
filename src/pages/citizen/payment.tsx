import { useNavigate } from "react-router-dom"
export 
const Payment = () =>{
    const navigate = useNavigate();
    const makepay = () =>{
        // have to add the form validation and call the payment gate way 
        // if the payment api returns a success should renser the payment success 
        // for now navigating to the conf page 
        navigate('/paymentconf')
    }
    return(
        <div>
            <button onClick={makepay}>Make Payment</button>
        </div>
        )
}