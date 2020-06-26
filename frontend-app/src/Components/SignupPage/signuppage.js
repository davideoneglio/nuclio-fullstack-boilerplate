import React, {useState} from 'react';
import './signuppage.css';

export const Signup = props => {

    const initialState = {
        email: "",
        name: "",
        password: ""
    };

    const initialErrorState = {
        email: false,
        name: false,
        password: false
    }

    const [ data, setData ] = useState(initialState);
    const [ formError, setFormError ] = useState(initialErrorState);

    const handleChange = (key, newValue) => {
        setData({
            ...data,
            [key]: newValue,
        });
    };

    const sendData = () => {
            fetch("http://localhost/api/users", {
                "method": "POST",
                "mode": "cors",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(data),
            }).then(response => response.json()
            ).then(response => {
                return response
            }).catch(function(error) {
                console.log('Hubo un problema con la petición Fetch:' + error);
            })
    }

    return(
        <div className="root">
            <header>
                a
            </header>
            <div className="image-container">
                <img alt="Trello" className="trello-main-logo"
                     src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
                    <section className="inner-section">
                        <div className="section-wrapper">
                            <div id="signup-form"
                                 className="layout-account-form">

                                <div id="signup-password"
                                     className="quick-switch">

                                    <h1>Crea tu cuenta</h1>

                                        <input type="email"
                                               onChange={event => handleChange("email", event.target.value)}
                                               value={data.email}
                                               required
                                               name="email"
                                               id="email"
                                               typeof="email"
                                               className="form-field"
                                               tabIndex="0"
                                               autoCorrect="off"
                                               spellCheck="false"
                                               autoCapitalize="off"
                                               placeholder="Introduzca el correo electrónico"
                                               autoComplete="username email"
                                               autoFocus={true}/>

                                        <input type="text"
                                               value={data.name}
                                               onChange={event => handleChange("name", event.target.value)}
                                               required
                                               name="name"
                                               id="name"
                                               className="form-field"
                                               tabIndex="0"
                                               autoCorrect="off"
                                               spellCheck="false"
                                               autoCapitalize="off"
                                               placeholder="Introduzca el nombre completo"
                                               autoComplete="name" />

                                        <input type="password"
                                               value={data.password}
                                               onChange={event => handleChange("password", event.target.value)}
                                               required
                                               name="password"
                                               id="password"
                                               className="form-field"
                                               tabIndex="0"
                                               placeholder="Crear contraseña"
                                               autoComplete="new-password" />

                                        <p className="quiet-tos">
                                            Al registrarse, confirma que ha leído y aceptado nuestras
                                            <a href="#" target="_blank"> Condiciones del Servicio </a>
                                             y nuestra
                                            <a href="#" target="_blank"> Política de Privacidad.</a>
                                        </p>

                                        <input id="signup-submit"
                                               tabIndex="0"
                                               type="submit"
                                               className="submit-button"
                                               value="Registrarse"
                                               onClick={sendData} />
                                    <hr />
                                    <span className="bottom-form-link">
                                        <a href="#">¿Ya tiene una cuenta? Inicie sesión</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
            <footer className="global-footer">
                <form id="language-picker-container">
                    <label htmlFor="language-picker"/>
                    <select id="language-picker" name="language-picker">
                        <option value="Čeština">Čeština</option>
                    </select>
                </form>
                <div>
                    <hr/>
                    <img className="atlassian-logo-small"
                         src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
                         width="150"  alt="atlassian-logo"/>
                </div>
                <ul className="global-footer-list">
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Plantillas</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Precios</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Aplicaciones</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Trabajos</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Blog</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Desarrolladores</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Acerca de </a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Ayuda</a>
                    </li>
                    <li className="global-footer-list-item">
                        <a className="global-footer-list-item-link" href="#">Configuración de las cookies</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};


