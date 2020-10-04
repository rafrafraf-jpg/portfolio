import React from 'react'
import './style.css'
import Description from './description'

export default class ProjectsText extends React.Component {
    state = {
        lmc: false,
        pc: false,
        email: false,
        duplkit: false
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

                    {/* repl.email button and description */}
                    <button className={this.state.email ? 'project-button project-button-open' : 'project-button'} onClick={() => {
                        this.state.email ? this.setState( {email: false} ) : this.setState( {email: true} )}
                        }>
                        repl.email
                    </button>

                    {this.state.email ? <Description text={<div>Repl.email is an exclusive, but fully functional email service.
                    <br /><br />
                    Users login with their repl.it account via repl auth.
                    <br /><br />
                    I made this project with Marcus Weinberger. He made the server and was tasked with the backend of the project while I worked on the front end styling and overall design of the site.
                    <br /><br /></div>} url='https://repl.email' /> : null}

                    {/* dupl.kit button and description */}
                    <button className={this.state.duplkit ? 'project-button project-button-open' : 'project-button'} onClick={() => {
                        this.state.duplkit ? this.setState( {duplkit: false} ) : this.setState( {duplkit: true} )}
                        }>
                        dupl.kit
                    </button>

                    {this.state.duplkit ? <Description text={<div>Dupl.kit is a clone of repl.it that i challenged myself in making within 7 days.
                    <br /><br />
                    The site has a live chat and allows multiple users to edit text files at the same time. As well as this, the site also shows the cursors and names of other users connected.
                    <br /><br />
                    In order to make this site I had to learn how operational transformations work so that i could make my own algorithm that accepts text document edits from multiple users concurrently while keeping all clients documents synchronised.
                    <br /><br /></div>} url='https://duplkit.rafrafraf.repl.co/' /> : null}
                </div>
            </div>
        )
    }
}