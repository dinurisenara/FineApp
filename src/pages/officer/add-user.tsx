export 
const Adduser = () =>{
    return (
        <div>
           <>
  <h2 className="mainheader_signup">
   ADD USER
  </h2>
  <form>
    <label htmlFor="id_signup">ENTER ID:</label><br />
    <input type="text" id="id_signup" name="id_signup" value="" /><br />
    <label htmlFor="password_signup">PASSWORD:</label><br />
    <input type="text" id="password_signup" name="password_signup" value="" /><br />
    <label htmlFor="confirmpassword_signup">CONFIRM PASSWORD:</label><br />
    <input type="text" id="confirmpassword_signup" name="confirmpassword_signup" value="" /><br />
    <button className="button_signup">ADD USER</button><br />
  </form>
</>

        </div>
    )
}