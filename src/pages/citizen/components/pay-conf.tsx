import { useNavigate } from "react-router-dom"
export 
const PaymentConf = () =>{
  const navigate = useNavigate();
  const backhome = () =>{
    navigate("/citizen-main")
  }
    return(
        <div>
            <div className="container0">
  
            <form>
    <p className="confirmation-text_payment">Payment successful</p>
    <span className="confirmation-icon_payment">&#10003;</span>
    <p className="download-receipt-text_payment">Download receipt</p>
    <button className="button_payment" onClick={backhome}>OK</button>
  </form>
</div>

        </div>
        )
}