import React, {Component} from "react"
import ReactDom from "react-dom"
import PropTypes from "prop-types"
import axios from "axios"

export class Friends extends Component{
    state = {friends: ["friend1","friend2","friend3"]}
    render(){
        return <div>
            <h3>Friends are</h3>
            <AddFriend addNew={this.handleAddNew}/>
            <ShowList names={this.state.friends}/>
        </div>
    }

    handleAddNew=(friendname)=>{
        console.log("Friend name is ",friendname);
        this.setState({friends:[...this.state.friends,friendname]})
    }
}


class ShowList extends Component{
    render(){
        return <div>
            <ul>
            {this.props.names.map((friend, idx)=>{
               return <li key={idx}>{friend}</li>
            })}
            </ul>
        </div>
    }
}

class AddFriend extends Component{
    state = {newFriend:"guest"}
    render(){
        return <div>
        <input type="text" ref="new" value={this.state.newFriend} onChange={this.handleOnChange}></input>
        <button type="button" onClick={this.handleButtonClick}>Add Friend</button>

        </div>
    }

    handleOnChange = (event)=>{
        console.log("ON CHANGE...")
        this.setState({newFriend:event.target.value})
    }
    handleButtonClick=()=>{
        this.props.addNew(this.state.newFriend);
    }
}

AddFriend.propTypes={
    addNew: PropTypes.func.isRequired
}

// ShowList.propTypes={
//     names: PropTypes.array.isRequired
// }

ShowList.defaultProps = {
    names: []
}

export class ServiceDemo extends Component{
    render(){
        return <div>
            <h3>Rest Api Examples </h3>
        </div>
    }

    componentDidMount(){
        this.loadDataFromFillText()
        this.loadProduct();
    }

    loadProduct(){
        axios.get("http://localhost:3000/wsproducts").then(
            (resp)=>{
                console.log("ShoppingApi Success",resp.data)
            }, (err) =>{
                console.log("Shopping Api error",err)
            }
        )
    }

    loadDataFromFillText(){
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}").then(
            (resp)=>{
                console.log("Success",resp)
                console.log(resp.data)
            },(error) =>{
                console.log("Error Response", error)
            }
        )
    }
}