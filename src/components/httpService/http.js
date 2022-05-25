import { toast } from "react-toastify";
import Auth from "../auth/Auth";

function getToken() {
    const token = Auth?.token() || '';
    if (token) {
        return {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Auth.token()}`
        }
    } else {
        return {
            Accept: "application/json",
            'Content-Type': 'application/json',
        }
    }
}
async function get(api) {
    return fetch(`${process.env.REACT_APP_BASE_URL}${api}`, {
        headers: getToken(),
        method: "GET",
    });
}
async function post(api, data, header) {
    return fetch(`${process.env.REACT_APP_BASE_URL}${api}`, {
        headers: header || getToken(),
        method: "POST",
        body: JSON.stringify(data),
    });
}

async function handleError(data) {
    const response = await data.json();
    let status = data.status;
    if (data.status === 401) {
        Auth.logout();
    }
    if (data.status === 422) {
        // for (const [key] of Object.entries(response.errors)) {
        //     toast.error(response.errors[key][0], {
        //         autoClose: 5000,
        //     })
        // }
    }
    if (data.status > 400 && data.status <= 500) {
        toast.error(response.message, {
            autoClose: 5000,
        })
        return
    } else {
        response.status = status;
        return response;
    }

}

export { get, post, handleError, getToken }
