import React from 'react'
import './style.css'
import Button from '.././button'

export default class ProjectsText extends React.Component {
    render() {
        return (
            <div className='projects-text-area'>
                <h3 style={{
                    fontFamily: 'helvetica',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color: '#BBBBBB'}}>PROJECTS</h3>

                <div style={{display: 'flex', flexDirection: 'column', float: 'left'}}>
                    <Button text='Little Man Computer' url='https://littlemancomputer.co.uk' align='left'/>
                    <Button text='PartyChats' url='https://partychats.rafrafraf.repl.co' align='left'/>
                </div>
            </div>
        )
    }
}