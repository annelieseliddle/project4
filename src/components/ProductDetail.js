import React from 'react';
import store from '../store';

class ProductDetail extends React.Component{

    renderProduct(){
        return store.getState().products.filter(p => p.id === Number(this.props.match.params.id)).map(p => {
            return (
                <div key={p.id} className="ui center aligned container">
                    <h1>{p.title}</h1>
                    <h3>{p.description}</h3>
                    <img height={500} src={p.img}/>
                    <h3>${p.price}</h3>
                    <h4>Rating: {p.rating}</h4>
                    <h4>Category: {p.category}</h4>
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderProduct()}</div>
    }
}


export default ProductDetail;