import React, {Component} from "react"
import ProductList from "./shopping/ProductList";
import CartItems from "./shopping/CartItems";

export default class Home extends Component {
    render() {
        return <div className="row">
            <div className="col-sm-6 table-bordered">
                <ProductList />
            </div>
            <div className="col-sm-6 table-bordered">
                <CartItems />
            </div>
        </div>
    }
}