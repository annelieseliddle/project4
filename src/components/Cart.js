import React from 'react';
import store from '../store';

class Cart extends React.Component{

        renderProduct(){
                return store.getState().products.map(p => {
                        return (
                            <div key={p.id}>
                                    <div>{p.title}</div>
                                    <button>Delete</button>
                            </div>
                        )
                })
        }

        render() {
                return <div>{this.renderProduct()}</div>
        }
}

export default Cart;