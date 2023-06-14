import { useNavigate } from "react-router-dom";
export const OfficerMain = () => {
  const navigate = useNavigate();
  const addfine = () =>{
    navigate('/issue-ticket')
  }
  const signup = () =>{
      navigate('/add-user')
  }
  return (
    <div>
      <div className="container">
      <div className="button-container">
        <button className="button"onClick={addfine}>ADD FINE</button>
        <button className="button"onClick={signup}>ADD CITIZEN</button>
      </div>
    </div>
    </div>
  );
};
