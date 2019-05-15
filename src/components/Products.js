import React from 'react'
import store from '../store'
import { Link } from 'react-router-dom';

class Products extends React.Component{

    getDetails(product){
        //console.log(product, this.props)
    }
    addToCart(product){
        console.log(product, this.props)
    }

    renderProducts(){
        return store.getState().products.map(product => {
            return (
                <div key={product.id} className="ui card">
                    <div className="content">
                        <div className="header">{product.title}</div>
                    </div>
                    <div className="content">
                        <img height={170} src={product.img}/>
                        <h4 className="ui sub header">{"$"}{product.price}</h4>
                    </div>
                    <div className="extra content">
                        <Link to={`/ProductDetail/${product.id}`}>
                            <div className="ui animated button" tabIndex="0" onClick={() => this.getDetails(product)}>
                                <div className="visible content">View Details</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/Cart/${product.id}`}>
                            <div className="ui animated button" tabIndex="0" onClick={() => this.addToCart(product)}>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="hidden content">Cart</div>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div>{this.renderProducts()}</div>
        )
    }

}

export default Products;