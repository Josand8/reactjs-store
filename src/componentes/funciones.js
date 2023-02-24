import axios from 'axios'

const productos = async (state) => {
    const peticion = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
    state(peticion.data)
}

const precio = async (state) => {
    const peticion = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
    state(peticion.data.price)
}

const imagenes = async (state) => {
    const peticion = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
    state(peticion.data.images)
}

const valores = async (state) => {
    const peticion = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
    state(peticion.data.options[1].values)
}

const colores = async (state) => {
    const peticion = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
    state(peticion.data.options[0].values)
}


export {
    productos, imagenes, valores, colores, precio
}