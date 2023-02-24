import React, { useState, useEffect } from 'react';
import './pagina.css';
import Modal from './modal';
import { productos, imagenes, valores, colores, precio } from './funciones';


function Pagina() {

    const [producto, setProducto] = useState('')
    const [price, setPrice] = useState(null)
    const [imagen, setImagen] = useState(null)
    const [talla, setTalla] = useState(null)
    const [color, setColor] = useState(null)
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(0)
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [colorModal, setColorModal] = useState(null)
    const [sizeModal, setSizeModal] = useState(null)
    const [quantyModal, setQuantityModal] = useState(null)

    useEffect(() => {
        productos(setProducto)
        imagenes(setImagen)
        valores(setTalla)
        colores(setColor)
        precio(setPrice)
    }, [])

    const increment = (event) => {
        event.preventDefault();
        if (count >= 10) {
            count = 10
        }
        setCount(count + 1);
        setTotal(producto.price * (count + 1))
    };

    const decrease = (event) => {
        event.preventDefault();
        if (count <= 1) {
            count = 1
        }
        setCount(count - 1);
        setTotal(producto.price * (count - 1))
    };


    return (

        <section className='product'>
            <div className='product-img'>
                <img src={producto != null ? (imagen) : ('No hay producto')} alt='imagen'></img>
                <div className='product-img-container'>
                    <img src={imagen != null ? (imagen[1]) : ('No hay producto')} alt='imagen1'></img>
                    <img src={imagen != null ? (imagen[2]) : ('No hay producto')} alt='imagen2'></img>
                    <img src={imagen != null ? (imagen[3]) : ('No hay producto')} alt='imagen3'></img>
                </div>
            </div>
            <div className='product-description'>

                <form onSubmit={ev => {
                    ev.preventDefault();

                    var eventColor = ev.target.color.value
                    var eventSize = ev.target.talla.value;
                    var eventQuanty = ev.target.cantidad.value;
                    
                    setColorModal(eventColor)
                    setSizeModal(eventSize)
                    setQuantityModal(eventQuanty)

                }}>
                    <div className='product-title'>
                        <h1 className='title'>{producto != null ? (producto.title) : ('No hay producto')}</h1>
                        <p className='price'>$ {producto != null ? (producto.price) : ('No hay producto')}</p>
                    </div>
                    <div className='product-specs'>
                        <div className='product-color'>
                            <p className='color'>Color:</p>
                            <div className='color-button-container'>
                                {color !== null ? color.map((col) => {
                                    return (<div key={col}>
                                        {col === "Red" ? <input className='input-color hiddens' value={col} type="radio" name="color" id={col} defaultChecked /> :
                                            <input className='input-color hiddens' value={col} type="radio" name="color" id={col} />}
                                        <label className='color-button' htmlFor={col} style={{ background: col }}></label>
                                    </div>)
                                }) : "No hay colores"}
                            </div>
                        </div>
                        <div className='product-size'>
                            <p className='size'>Size:</p>
                            <div className='button-container'>
                                {talla !== null ? talla.map((num) => {
                                    return (<div key={num}>
                                        {num === "7" ? <input className='input-size hiddens' value={num} type="radio" name='talla' id={num} defaultChecked /> :
                                            <input className='input-size hiddens' value={num} type="radio" name='talla' id={num} />}
                                        <label className='size-button' htmlFor={num} >{num}</label>
                                    </div>
                                    )
                                }) : "No hay tallas"}
                            </div>
                        </div>
                    </div>
                    <div className='count-total-price'>
                        <div className='count-buttons'>
                            <button onClick={decrease}>-</button>
                            <input value={count} name="cantidad" id='cantidad' type="number"></input>
                            <label htmlFor="cantidad"></label>
                            <button onClick={increment}>+</button>
                        </div>
                        <div>
                            <input value={total} className='total-price hiddens' type="number" name='total' id='total' />
                            <label className='price-total' htmlFor="total">Total price: {count !== 1 ? (total) : (price)}</label>
                        </div>
                    </div>
                    <div className='add-buttons'>
                        <input className='add-favorite' name='addfavorite' value="Add to favorite" type="submit" />
                        <button onClick={() => cambiarEstadoModal1(!estadoModal1)} type='submit' className='add-cart' id='addcart'>Add to cart</button>
                    </div>
                    <div className='description'>
                        {producto != null ? (producto.description) : ('No hay descripcion')}
                    </div>
                    <Modal
                        estado={estadoModal1}
                        cambiarEstado={cambiarEstadoModal1}
                        titulo={producto.title}
                    >
                        <div>
                            <h3>Color: {colorModal}</h3>
                            <h3>Cantidad: {quantyModal}</h3>
                            <h3>Talla: {sizeModal}</h3>
                            <h3>Valor a pagar: {count !== 1 ? (total) : (price)}</h3>
                        </div>
                        <div className='continue'>
                            <button className='continue-button' onClick={() => cambiarEstadoModal1(false)}>Continuar</button>
                        </div>
                    </Modal>
                </form>
            </div>
        </section>
    );
}


export default Pagina;