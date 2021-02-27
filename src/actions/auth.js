
import authService from '../services/authService';
import Swal from 'sweetalert2';
import { types } from '../types/types';

export const startLogin = (email, password) => {
    return async( dispatch ) => {

        try{
            const res =  await authService.login({email, password})
            const body = res.data;
            console.log(res)
            if(body.ok) {

                localStorage.setItem('token', body.token)
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }))
            } 

        }
        catch(e){
            console.log(e.response)

            const message = e.response.data.message;

            dispatch({
                type: types.errorMessage,
                payload: message
            })
        }
    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})