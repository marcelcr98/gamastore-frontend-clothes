import React, {useEffect, useState} from 'react';
import axios from 'axios'
    //-------------------------------------------------------

const API=process.env.REACT_APP_API;

    //-------------------------------------------------------
//rsc : para crear componente
const ProductList = () => {

    //constantes

    const [products, setProducts] = useState([])

    const getProducts = async ()=>{
  
      const res= await axios.get(API+'/products')
      console.log(res);
      setProducts(res.data.products)
    }
  
  
    useEffect(()=>{
      getProducts();
    }, [])

    //-------------------------------------------------------

/*para el estilo de la pagina
  el container lo puede tener el app*/
  //product map para leer api
  //cada producto recorre con su id
  //para realizar bien los estilos, es recomendado leer la recomendación

   //vista
    return (
        <div>

            <div className="row">
                    {products.map((product )=> (
                    <div className="col-md-3 mb-4" key={product._id}>
                    <div className="card text-center mx-auto">
                        <img src={product.previewImageURL} alt={product.name} className="card-img-top" style={{ width:"90%", margin:'auto ' }}/>
                        <div className="card-body">
                    <h3 className="h5">{product.name}</h3>
                    <p className="card-text">{product.description}</p>
                    <h5>S/. {product.price}.00</h5>
                    </div>
                    </div>
                    </div>
                    ))}

                </div>
            
        </div>
    );
};

export default ProductList;