import api from '../src/config/axiosConfig';

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        // try /login endpoint from userAuth.routes.js if this doesn't work
        const res = await api.post("/login", userCredentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        console.log(err.response.data);
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
}