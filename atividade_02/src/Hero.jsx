import React, { Component } from "react";
 

export class Hero extends Component {
    render(){
        const {nome, img} = this.props
        return (
            <div>
            <h3>Hero</h3>
            <h1>Nome: {nome} </h1>
             <img src={img} alt="jogadora" style={{
                     width:"300px",
                     heigth: "300px"
                 }}/>
            </div>
        )
    }
}

