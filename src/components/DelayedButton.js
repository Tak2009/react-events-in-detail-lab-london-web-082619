// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleClick =(event) => {
        event.persist()
        console.log(event)
        setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
        
        
    }

    render () {
        return  (
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}

export default DelayedButton