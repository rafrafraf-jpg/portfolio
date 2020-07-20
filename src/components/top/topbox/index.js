import React from 'react'
import Line from '../.././line'

export default class TopBox extends React.Component {
    render() {

        var style = {
            width: this.props.width,
            height: 200,
            borderTop: '1px solid #cccccc',
            padding: '0 0'
        }
        if (this.props.margin === 'true') {
            style = {
                width: this.props.width,
                height: 100,
                borderTop: '1px solid #cccccc',
                padding: '0 0',
                marginRight: 20
            }
        }
        
        // url and languages section
        var jsx = (
            <div style={style}>
                <p style={{
                    fontFamily: 'helvetica',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color: '#BBBBBB'}}>{this.props.text}
                </p>
            </div>
        )

        // about
        if (this.props.about) {
            jsx = (
                <div style={style}>
                <p style={{
                    fontFamily: 'helvetica',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color: '#BBBBBB',
                    marginBottom: 0}}>{this.props.text}
                </p>
                <p style={{
                    fontFamily: 'helvetica',
                    color: '#CCCCCC',
                    fontSize: 14,
                    marginTop: 4}}>{this.props.about}</p>

            </div>
            )
        }

        // info
        if (this.props.info) {
            jsx = (
                <div style={style}>
                <p style={{
                    fontFamily: 'helvetica',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color: '#BBBBBB',
                    marginBottom: 0,
                    textAlign: 'center'}}>Rafi Asmoucha
                </p>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Line width={40} />
                    	<p style={{color: '#bbbbbb', margin: '0 0'}}>*</p>
                    <Line width={40} />
                </div>
                <p style={{
                    fontFamily: 'helvetica',
                    color: '#CCCCCC',
                    fontSize: 14,
                    marginTop: 4,
                    textAlign: 'center'}}>{this.props.text}</p>

            </div>
            )
        }

        return jsx

    }
}