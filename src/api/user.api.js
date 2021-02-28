import httpClient from './httpClient'
const END_POINT_SIGN_UP = "/user/signup"
const END_POINT_GET_ALL_ARMOR = "/user/getAllArmor"

const signUp = () => httpClient.get(END_POINT_SIGN_UP)

const getAllArmor = (page, limit) => httpClient.get(END_POINT_GET_ALL_ARMOR,{params:{page, limit}})

export {
    signUp,
    getAllArmor
}