import React from 'react'
import './style.css'
import Box from './box'

export default class Projects extends React.Component {
    render() {
        return (
            <div className='projects-area'>
                <Box imageUrl={require('./images/cpu.png')} imageUrl2={require('./images/lmc.gif')} head='Little Man Computer' />
                <Box imageUrl={require('./images/partychats.png')} imageUrl2={require('./images/partychats.gif')} head='PartyChats' />
                <Box imageUrl={require('./images/email.png')} imageUrl2={require('./images/email.gif')} head='repl.email' />
                <Box imageUrl={require('./images/repl.png')} imageUrl2={require('./images/duplkit.gif')} head='dupl.kit' />
            </div>
        )
    }
}