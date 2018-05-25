import React, {Component} from "react"
import {connect} from "react-redux"

class ProductList extends Component {

    render() {
        console.log("Current Product Props = ", this.props, " Products List = ", this.props.products.length);

        let output = null;
        if (this.props.products.length > 0) {
            output = this.props.products.map((prod) => {
                return <tr key={prod.id}>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td><button className="btn btn-primary" onClick={() => this.props.addToCart(prod)}>Add To Cart</button></td>
                        </tr>
            });
        } else {
            output = <tr><td colSpan="3">No Products are available!!!</td></tr>
        }

        return <div>
            <h3>List of products</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
        </div>
    }
}

function mapStateToProps(state) {
    return { products: state.productReducer };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => {
            let orderedItem = {id:product.id, name:product.name, price:product.price, qty:1};
            dispatch({type:"ADD", payload:orderedItem});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);