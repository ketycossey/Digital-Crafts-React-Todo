import React, {Component} from 'react';

class List extends Component{

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <ul>{this.props.items}</ul>
            </div>
        )
    }

}

export default List;