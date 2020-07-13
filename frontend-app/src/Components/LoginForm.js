import React, {useState} from "react";
import './LoginForm.css';
import { useHistory } from "react-router-dom";

const LoginForm = props => {
    const [data, setData] = useState({email: "", password: ""});
    const [formError, setFormError] = useState({email: false, password: false});
    const [error, setError] =useState(false)

    const handleInputChange = (key, newValue) => {
        setData({...data, [key]:newValue});
    };

    const validateUser = (email) => {
        const pattern = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
        const regex = RegExp(pattern);
        return regex.test(email);
    };

    /*const validatePass = (password) => {
        const pattern = /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/;
        const regex = RegExp(pattern);
        return regex.test(password);
    };*/


    const handleInputOnblur = (key, newValue) => {
        let isValid = true;
        if (key === "email") {
            isValid = validateUser(newValue)
        } /*if (key === "password") {
            isValid = validatePass(newValue)
        }*/
        setFormError({...formError, [key]: !isValid});
    };


    const formHasErrors = (errors) => {
        let errorForm = false;
        Object.values(errors).forEach(value => {
            if(value) {
                errorForm = true;
            }
        });
        return errorForm;
    }

    const history = useHistory();

    const sendData = () => {
        const errors = {};
        Object.keys(data).forEach(key => {
            errors[key] = data[key] === "";
        });
        if (!formHasErrors(errors)) {
            fetch("http://localhost/api/login", {
                method: "post",
                mode: "cors",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => {
                    if(res > 400) {
                        setError(res.error);
                    }
                    return res.json();
                }).catch((error) => {
                    debugger;
                console.log(error);
            })
                .then((resJson) => {
                    console.log(resJson);
                    localStorage.setItem('token', resJson.access_token);
                    history.push('/home')//guardar este resJson en mi local storage y después hacer un redirect a la home page
                })
        } else{
            setFormError(errors);
        }
    };
    return (
        <div className="container-login">
            <div>
                <img alt="Trello" className="trello-main-logo-login"
                     src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"/>
                <section className="inner-section-login ">
                    <div className="formBox">
                        <div><h1 className="headForm"> Iniciar sesión en Trello</h1></div>
                        <div>
                            <div>
                                <input
                                    onChange={event => handleInputChange('email', event.target.value)}
                                    onBlur={event => handleInputOnblur('email', event.target.value)}
                                    value={data.email}
                                    type="text"
                                    name="user"
                                    id="user"
                                    className={!formError.email ? "userFormField" : "error-login"}
                                    placeholder="Introduzca el correo electrónico"
                                    autoComplete="username email"
                                    inputMode="email"
                                    pattern="[a-z]{1,15}"
                                    title="Username should only contain lowercase letters. e.g. john"
                                    required/>
                                    {formError.email && <legend className="errorMessage" >Hay un error en el username</legend>}
                            </div>
                            <div>
                                <input
                                    value={data.password}
                                    onChange={event => handleInputChange('password', event.target.value)}
                                    onBlur={event => handleInputOnblur('password', event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={!formError.password ? "userFormField" : "error-login"}
                                    placeholder="Introduzca la contraseña"
                                    autoComplete="current-password"
                                    required/>
                                    {formError.password && <legend className="errorMessage" >Hay un error en el password</legend>}
                            </div>

                            <div>
                                <button disabled={!formHasErrors} className="loginButton" onClick={sendData}>
                                    Iniciar sesión
                                </button>
                            </div>
                            <div>
                                <h1 className="oSeparator">
                                    O
                                </h1>
                                    <div>
                                        <button className="ExternalLoginButton">
                                        <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"
                                             alt="x" className="googleIcon"/>
                                        Accede con Google
                                    </button>

                                    </div>
                                    <div>
                                        <button className="ExternalLoginButton">
                                            <img src="http://www.pngplay.com/wp-content/uploads/1/Microsoft-Logo-Transparent-Background.png"
                                                alt="x" className="googleIcon"/>
                                                Accede con Microsoft
                                        </button>
                                    </div>
                                <div className="line"></div>
                                <div>
                                    <ul className="bottomFromLink">
                                        <li className="bottomFromLinkText">¿No puede inicar sesión?</li>
                                        <li className="bottomFromLinkText">Registrese para crear una cuenta</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer-login">
                <div className="FooterLine"></div>
                <div>
                    <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
                         alt="x" className="AtlassianLogo"/>
                </div>
            </footer>
        </div>
    );
};

export default LoginForm