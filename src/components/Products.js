import React from 'react'
import "./Products.css"

class Products extends React.Component{

    renderProducts(){
        return this.props.products.map(product => {
            return (
                <div className="ui card">
                    <div className="content">
                        <div className="header">{product.title}</div>
                    </div>
                    <div className="content">
                        <img src={product.img}/>
                        <h4 className="ui sub header">{"$"}{product.price}</h4>
                    </div>
                    <div className="extra content">
                        <div className="ui animated button" tabIndex="0">
                            <div className="visible content">View Details</div>
                            <div className="hidden content">
                                <i className="right arrow icon"></i>
                            </div>
                        </div>
                        <div className="ui animated button" tabIndex="0">
                            <div className="visible content">
                                <i className="shop icon"></i>
                            </div>
                            <div className="hidden content">Cart</div>
                        </div>
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

export default Products