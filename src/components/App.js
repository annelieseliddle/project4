import React from 'react'
import api from "../api/api"
import Products from "./Products"
import Route from "./Route"
class App extends React.Component {
    state={
        products: []
    }
    componentDidMount() {
        api.get('/products').then(response => {
            console.log(response);
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Products products={this.state.products}/>
            </div>
        )
    }
}

export default App