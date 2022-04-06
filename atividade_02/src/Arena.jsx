import React, { Children, Component } from "react";

export class Arena extends Component{
    render(){
        const {arena, children} = this.props
        return (
            <div style={{display:"flex"}}>
                {
                    React.Children.map(
                        children, 
                        (child)=>{
                            return React.cloneElement(
                                <div> 
                                    {child}
                                    {arena}
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}