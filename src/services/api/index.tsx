import axios from "axios"
import md5 from "md5"

const publicKey = '61356e78b8ce1037e2acf521205aa013'
const privateKey = '04eebbc1094eac67831b65a7536632f75139abb1'

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

export const ts = '?ts=' + time + '&apikey=' + publicKey + '&hash=' + hash

export const API = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public'
})
