import httpClient from './httpClient'
const END_POINT_SIGN_UP = "/user/signup"
const END_POINT_GET_ALL_ARMOR = "/user/getAllArmor"

const signUp = () => httpClient.get(END_POINT_SIGN_UP)

const getAllArmors = (page, limit) => httpClient.get(END_POINT_GET_ALL_ARMOR,{page, limit})

export {
    signUp,
    getAllArmors
}