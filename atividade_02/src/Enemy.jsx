import { Component } from "react"

export class Enemy extends Component{
    render(){
        const {name,img} = this.props
        return (
                <div>
                <h3>Enemy</h3>
                <h1>Nome: {name} </h1>
                 <img src={img} alt="jogadora" style={{
                     width:"300px",
                     heigth: "300px"
                 }} />
                </div>
            
        )
    }
}