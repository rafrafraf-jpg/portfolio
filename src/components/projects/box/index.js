import React from 'react'
import missing from '.././images/missing.png'
import './style.css'

export default class Box extends React.Component {
   
    
    constructor(props) {
        super(props)
        this.state = { flipped:'' }

        this.toggleClass = this.toggleClass.bind(this);

    }

    toggleClass() {
        if (this.state.flipped === '') {
            this.setState({flipped:'flipped'})
        }
        else {
            this.setState({flipped:''})
        }
    }

    render() {
        const image = this.props.imageUrl
        const image2 = this.props.imageUrl2
        return (
            <div className={'project-box '} onClick={this.toggleClass}>
                <div className={'card ' + this.state.flipped}>
                    <img className='project-image front' src={image} alt={missing} style={{width: '20%', height: 'auto'}} />
                    <p style={{position: 'absolute', display: 'none', fontFamily: 'helvetica', fontWeight: 'bold', color: '#bbbbbb', left: 10}}>{this.props.head}</p>

                    <div className='back'>
                        <img src={image2} alt={missing} style={{width: 'auto', height: '100%'}} />
                    </div>
                </div>
            </div>
        )
    }
}