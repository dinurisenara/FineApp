import { useNavigate } from "react-router-dom"
export 
const FineissuedConf = () =>{
  const navigate = useNavigate();
  const backhome = ()=>{
    navigate('/officer-main')
  }
return (
  
    <div>
       <div className="container0">
  
  <form>
    <p className="confirmation-text">Ticket Issued</p>
    <span className="confirmation-icon">&#10003;</span>
    
    <button className="button" onClick={backhome}>Return to Home</button>
  </form>
</div>
 
    </div>
)
}