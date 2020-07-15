import React from 'react'
import './description.css'

export default class Description extends React.Component {
    constructor(props) {
        super(props);

        this.btnTapped = this.btnTapped.bind(this);
    }
    btnTapped() {
        window.location.href = this.props.url
    }
    render() {
        return (
            <div className='description-container'>
                <div className='description-box' style={{display: 'flex'}}>
                    <div style={{height: 'inherit', width: 1, borderLeft: 'solid 1px #cccccc'}}></div>
                    <div className='description-text'>
                        {this.props.text}
                        <button className='description-button' onClick={this.btnTapped}>Try it out</button>
                    </div>
                </div>
            </div>
        )
    }
}