import './LoginPage.css'
function LoginPage(){

    return(
        <div className="loginContainer">
            <section className="loginsec">
                <div  className = "login_text">
                    <h1 className="facebookText">Facebook</h1>
                    <h3 className="title">Facebook helps you connect and 
                    <br></br> share with the people in your life.
                    </h3>
                </div>
                <div className="formContainer">
                    <form>
                        <input placeHolder="Email address or phone number" type="email"></input>
                        <input placeHolder="Password" type="password"></input>
                        <input type="submit" value="Log in"></input>
                        <a className="forget" href="#">Forgotten password?</a>
                        <hr></hr>
                        <button className="newAccBtn">Create new accout</button>
                    </form>
                    <div className="brandOrBussinAccou">
                        <a href="#">Create a page </a>
                        for a celebrity, brand or business.

                    </div>
                </div>

            </section>

        </div>
    );
}


export default LoginPage ;