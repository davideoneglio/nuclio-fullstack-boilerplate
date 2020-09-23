let API_HOST = 'http://localhost'; //localhost sin nada más hace referencia al puerto 80, que me sirve para atacar al backend

if ( window.location.hostname !== "localhost" ) {
    API_HOST = `https://${window.location.hostname}`
}

const fetchResource = (resourceName, userOptions = {}, id, params = {}) => { //el resource name es lo que va despues de la / tras localhost. Las options son las opciones del fetch (mode, headers...).

    const token = localStorage.getItem('token');

    const defaultOptions = {
        mode: 'cors',
    };
    const defaultHeaders = {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${token}`,

    };
    const options = {
        ...defaultOptions,
        ...userOptions,
        headers: {
            ...defaultHeaders,
            ...userOptions.headers,
        }
    };
    let url = `${API_HOST}/api/${resourceName}`;


    if(id) {
        url = `${url}/${id}`;
    }


    if(params) {
        url = `${url}?`
        Object.keys(params).forEach((key, index ) => {
            if(index > 0) {
                url = `&${key}=${params[key]}`;
            }else {
                url = `${key}=${params[key]}`;
            }

        })
    }


    if(options.body && typeof options.body == 'object'){
        options.body = JSON.stringify(options.body);
    }
    return fetch(url, options).then(responseObject => responseObject.json());
}

export default { fetchResource };