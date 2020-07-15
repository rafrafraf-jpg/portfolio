import React from 'react'

export default class Line extends React.Component {
    render() {
        const lineStyle = {
            width: this.props.width,
            height: 1,
            borderTop: '1px solid #cccccc'
        }
        
        return <div className='line' style={lineStyle} />
    }
}

