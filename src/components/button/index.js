import React from 'react'
import './style.css'

export default class Button extends React.Component {
    routeChange = () => {
        window.location = this.props.url
    }

    render() {
        const text = this.props.text

        return (
            <button className='button' onClick={this.routeChange} style={{textAlign: this.props.align}}>{text}</button>
        )
    }
}