import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProduct(response.data.products);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [])

    return (
        <>
            <div className="container  text-center ">
                <div className="row">

                    {Product.map(product => (
                        <div className="col-md-3 col-6 mb-4" key={product.id}>
                            <div className="card shadow-sm border-1">
                                <img
                                    src={product.thumbnail}
                                    alt="Box 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </div>
                        </div>

                    ))
                    }
                </div>
            </div>

        </>



    )

}
export default Product;
