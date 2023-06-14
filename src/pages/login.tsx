import { useState } from "react";

export const Login = () => {
    
        const [userType, setUserType] = useState('citizen');
      
        const handleUserTypeChange = (e:any ) => {
          setUserType(e.target.value);
        };
      
        return (
          <form className="form-container">
            <label htmlFor="username">{userType === 'officer' ? 'Officer ID:' : 'NIC:'}</label>
            <br />
            <input type="text" id="username" name="username" />
            <label htmlFor="password">PASSWORD:</label>
            <br />
            <input type="password" id="password" name="password" />
      
            <div className="radio-group">
              <input
                type="radio"
                id="citizen"
                name="userType"
                value="citizen"
                checked={userType === 'citizen'}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="citizen">Citizen</label>
      
              <input
                type="radio"
                id="officer"
                name="userType"
                value="officer"
                checked={userType === 'officer'}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="officer">Officer</label>
            </div>
      
            <input type="submit" className="button" value="Log-In" />
          </form>
        );
      }
    