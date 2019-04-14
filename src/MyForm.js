import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem,fetchItems} from './actions';

class MyForm extends React.Component {
    componentWillMount(){
        this.props.fetchItems();
        this.state = {
            userInput: '',
            posts:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.state.userInput = event.target.value;
    }
    handleSubmit(event){
        //const textEntered = this.state.userInput;
        event.preventDefault();
        let n = this.props.items.length;
        console.log("Submitting new item {"+n+", "+this.state.userInput+"}")
        this.props.addItem(n, this.state.userInput);
    }
    
    render(){
        return (
            <div>
                <form>
                    <input type='text' onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit!</button>
                </form>
                <h3>List of Items:</h3>
                <ul>{this.props.items.map( (itm, idx) => {
                    return (
                        <li key={idx}>{itm.id}: {itm.title}</li>
                    )}
                )}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //now we can call props.items
        items: state.itemActionHandler.items
    }
}


const mapDispatchToProps = (dispatch) => {
    //now we can call props.addItem()
    //let actions = bindActionCreators({addItem: addItem, fetchItems: fetchItems});
    return {
        addItem: (id, newItem) => dispatch(addItem(id, newItem)),
        fetchItems: () => fetchItems()
    };
}


//const connect = ReactRedux.connect;
export default connect(mapStateToProps, mapDispatchToProps )(MyForm);


