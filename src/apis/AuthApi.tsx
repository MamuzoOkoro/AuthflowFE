import axios from "axios"

const URL = "htttp://localhost:/api/v1"

export const registerApi = async (data: any) => {
    try {
        const config = {
            "content-type": "multipart/formadata"
        }
        return await axios.post(`${URL}/register`,data,config) .then((res: any) => {
           return res.data.data
        })
    } catch (error) {
      console.log("Error",error)  
    }
}
export const SigninApi = async (data: any) => {
    try {
        return await axios.post(`${URL}/sign-in`,data) .then((res: any) => {
           return res.data.data
        })
    } catch (error) {
      console.log("Error",error)  
    }
}
export const getOneApi = async (UserID: any) => {
    try {
        return await axios.post(`${URL}/${UserID}/get-oneuser`,) .then((res: any) => {
           return res.data.data
        })
    } catch (error) {
      console.log("Error",error)  
    }
}