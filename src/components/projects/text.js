import React from 'react'
import './style.css'
import Description from './description'

export default class ProjectsText extends React.Component {
    state = {
        lmc: false,
        pc: false
    }

    render() {
        return (
            <div className='projects-text-area'>
                <h3 style={{
                    fontFamily: 'helvetica',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color: '#BBBBBB'}}>PROJECTS</h3>

                <div style={{display: 'flex', flexDirection: 'column', float: 'left'}}>
                {/* little man computer button and description */}
                    <button className={this.state.lmc ? 'project-button project-button-open' : 'project-button'} onClick={() => {
                        this.state.lmc ? this.setState( {lmc: false} ) : this.setState( {lmc: true} )}
                        }>
                        Little Man Computer
                    </button>

                    {this.state.lmc ? 
                    <Description text={<div>The LMC is an instructional model of a computer. It models the architecture of a simple computer and has all the basic features.
                    <br /><br />
                    The site acts a basic assembly code interpreter and uses moving blobs to illustrate the computer operations.
                    <br /><br /></div>} url='https://littlemancomputer.co.uk' /> : null}


                {/* partychats button and description */}
                    <button className={this.state.pc ? 'project-button project-button-open' : 'project-button'} onClick={() => {
                        this.state.pc ? this.setState( {pc: false} ) : this.setState( {pc: true} )}
                        }>
                        PartyChats
                    </button>

                    {this.state.pc ? <Description text={<div>PartyChats is a web chatroom site that allows you to create rooms, name them, add a password and submit a background image.
                    <br /><br />
                    Users can join any room that they have the password to or that has no password. Within the rooms you can send text messages, emojis and images.
                    <br /><br />
                    Inside the rooms, the names of everyone online and offline are shown. There are also basic commands such as coloring text.
                    <br /><br />
                    The server is written in python using the Sanic library.
                    <br /><br /></div>} url='https://partychats.rafrafraf.repl.co' /> : null}
                </div>
            </div>
        )
    }
}