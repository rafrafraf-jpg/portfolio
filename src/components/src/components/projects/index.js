import React from 'react'
import './style.css'
import Box from './box'

export default class Projects extends React.Component {
    render() {
        return (
            <div className='projects-area'>
                <Box imageUrl={require('./images/cpu.png')} imageUrl2={require('./images/lmc.png')} head='Little Man Computer' />
                <Box imageUrl={require('./images/partychats.png')} imageUrl2={require('./images/pc.png')} head='PartyChats' />
            </div>
        )
    }
}