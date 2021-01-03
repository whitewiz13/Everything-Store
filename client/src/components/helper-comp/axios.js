import axios from "axios";

const instance = axios.create({
    xsrfCookieName : 'csrftoken',
    xsrfHeaderName : 'X-CSRFToken'
});

/*export const config = {
    headers: {'HTTP_X_CSRFTOKEN': Cookies.get('csrftoken')},
}*/

export default instance;