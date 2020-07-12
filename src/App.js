import React from 'react'
import Heading from './components/heading'

import './app.css'

import Projects from './components/projects'
import ProjectsText from './components/projects/text.js'

import Top from './components/top'

export default function App() {
    const appStyle = {
        padding: '0% 7.5%',
        display: 'block',
    }

    return (
        <div className="App" style={appStyle}>
            <Heading />

            <Top />
            
            <div style={{width: '100%', display: 'flex', margin: 'auto'}}>
                <ProjectsText />
                <Projects />
            </div>
        </div>
    )
}
