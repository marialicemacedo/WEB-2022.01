import React, { Component } from "react";

export class World extends Component{
    render(){
        const {children} = this.props
        return (
            <div style={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {children}
            </div>
        )
    }
}