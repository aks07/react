import React, {Component} from "react"
import {connect} from "react-redux"
import axios from 'axios'

class ManageProducts extends Component {

    render() {
        let output = null;
        if (this.props.mgProducts.length > 0) {
            output = this.props.mgProducts.map((prod) => {
                return <tr key={prod._id}>
                            <td>{prod._id}</td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => this.props.removeProduct(prod._id)}>Delete</button> &nbsp;
                                <button className="btn btn-primary" onClick={() => this.handleEdit(prod)}>Edit</button>
                            </td>
                        </tr>
            });
        } else {
            output = <tr><td colSpan="3">No Products are available!!!</td></tr>
        }

        return <div>
            <h3>Manage Products</h3>
            <form className="well">
                <input type="number" placeholder="Enter Product Id" ref="pid" readOnly /> &nbsp;
                <input type="text" placeholder="Enter Product Name" ref="pName" /> &nbsp;
                <input type="number" placeholder="Enter Product Price" ref="pPrice"  /> &nbsp;
                <button type="button" className="btn btn-primary" ref="pAdd" onClick={this.handleAdd}>Add</button>
                <button type="button" className="hide" ref="pUpdate" onClick={this.handleUpdate}>Update</button>
            </form>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
        </div>;
    }

    constructor(){
        super()
        this.apiUrl = "http://localhost:3000/wsproducts"
    }

    componentDidMount(){
        axios.get(this.apiUrl).then((resp) =>{
            this.props.getProducts(resp.data), (err)=> {console.log("GET ERROR")}
        })
    }

    handleAdd = () => {
        let newproduct = {
            _id: this.refs.pid.value, 
            name: this.refs.pName.value, 
            price: this.refs.pPrice.value
        };
        axios.post(this.apiUrl, newproduct).then(
            (resp)=>{
                this.props.addProduct(resp.data)
            }, (err)=>{
                console.log("ADD PRODUCT ERROR",err)
            }
        )
        this.props.addProduct(newproduct);
        this.clearFields();
        console.log("Added the product", newproduct);
    }

    handleEdit = (product) => {
        this.refs.p_id.value = product._id;
        this.refs.pName.value = product.name;
        this.refs.pPrice.value = product.price;

        this.refs.pAdd.className = "hide";
        this.refs.pUpdate.className = "btn btn-info visible-lg-inline";
    }

    handleUpdate = () => {
        let updateProduct = {
            _id: this.refs.pid.value, 
            name: this.refs.pName.value, 
            price: this.refs.pPrice.value
        };
        console.log("update the product", updateProduct);
        this.props.updateProduct(updateProduct);
        this.clearFields();
    }

    handleDelete = (id)=>{
        axios.delete(this.apiUrl+"/"+id).then(
            (resp)=>{
                this.props.addProduct(resp.data)
            }, (err)=>{
                console.log("ADD PRODUCT ERRO",err)
            }
        )
    }

    clearFields = () => {
        this.refs.pid.value = "";
        this.refs.pName.value = "";
        this.refs.pPrice.value = "";
        
        this.refs.pAdd.className = "btn btn-primary";
        this.refs.pUpdate.className = "hide";
    }
}

function mapStateToProps(state) {
    return {
        mgProducts: state.productReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: (newProduct) => {
            dispatch({type:"ADD_PRODUCT", payload: newProduct})
        },
        removeProduct: (_id) => {
            dispatch({type:"DELETE_PRODUCT", payload: _id})
        },
        updateProduct: (product) => {
            dispatch({type:"UPDATE_PRODUCT", payload: product})
        },
        getProducts :(product) =>{
            dispatch({type:"GET_PRODUCT", payload: product})
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);