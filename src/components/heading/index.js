import React from 'react'
import './style.css'
import Line from '.././line'


export default class Heading extends React.Component {
    constructor() {
        super()
        this.state = {
            text: 'Hello World', width: 0, height: 0
        }
        this.myRef = React.createRef();

        this.temp = 'temp'

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
  
    changeText() {
        if (this.state.width > 768) {
            this.setState({
                text: 'Welcome to my portfolio'
            });
        }
        else {
            this.setState({
                text: 'My portfolio'
            });
        }
        
        this.myRef.current.style.width = '750px';

        this.temp = ''
    }

    render() {
        const titleStyle = {
            fontFamily: 'helvetica',
            fontWeight: 'bold',
            letterSpacing: 1,
            color: '#BBBBBB',
            fontSize: 30
        }

        return (
            <div className="heading-class">
                <Line width={100}/>
                <h1 ref={this.myRef} className={'hello ' + this.temp} style={titleStyle} onClick={this.changeText.bind(this)}>{this.state.text}</h1>
                <Line width={100}/>
            </div>
        );
    }
}
