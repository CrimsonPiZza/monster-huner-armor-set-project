import httpClient from './httpClient'
const END_POINT_SIGN_UP = "/user/signup"

const signUp = () => httpClient().get(END_POINT_SIGN_UP)

export {
    signUp
}