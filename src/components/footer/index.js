import React from 'react'
import './footer.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.btnTapped = this.btnTapped.bind(this);
    }
    btnTapped() {
        window.location.href = 'https://repl.it/@rafrafraf'
    }
    render() {
        return (
            <div className='footer'>
                <div className='repl'>
                    <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                        <h2 className='footer-title'>repl.it</h2>
                        <p>Check out all my projects on repl.it</p>
                        <button className='repl-button' onClicked={this.btnTapped}>@RAFRAFRAF</button>
                    </div>
                </div>
            </div>
        )
    }
}