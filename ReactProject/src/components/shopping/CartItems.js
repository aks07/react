import React, {Component} from "react"
import {connect} from "react-redux"

class CartItems extends Component {

    render() {
        console.log("Current Cart Props = ", this.props, " Cart List = ", this.props.cartitems.length);

        let output = null;
        if (this.props.cartitems.length > 0) {
            output = this.props.cartitems.map((item) => {
                return <tr key={item.id}>
                            <td><button className="btn btn-danger btn-xs" onClick={() => this.props.removeFromCart(item)}>X</button> {item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty}</td>
                        </tr>
            });
        } else {
            output = <tr><td colSpan="4">No Cart Items added!!!</td></tr>
        }

        return <div>
            <h3>Cart Items are <span className="label label-primary">{this.props.cartitems.length}</span></h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                    <tr>
                        <td colSpan="3">Total Amount</td>
                        <td>{this.totalAmount()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }

    totalAmount = () => {
        let total = 0;
        this.props.cartitems.forEach(item => {
            total += (item.price * item.qty);
        });
        return total;
    };
}

function mapStateToProps(state) {
    return { cartitems: state.cartReducer };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (cartItem) => {
            dispatch({type:"REMOVE", payload:cartItem});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);