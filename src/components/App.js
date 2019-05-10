import React from 'react';
import api from '../api/api';
import { BrowserRouter, Route } from "react-router-dom";
import Products from './Products';
import Cart from './Cart';
import Header from "./Header";
import store from '../store';
import ProductDetail from './ProductDetail';

class App extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        api.get('/products').then(response => {
            //console.log(response);
            store.dispatch({
                type: 'SET_PRODUCTS',
                products: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Products}/>
                        <Route path="/ProductDetail/:id" component={ProductDetail}/>
                        <Route path="/Cart" component={Cart}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App