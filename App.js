import React from 'react'
import Heading from './components/heading'

import './app.css'

import Projects from './components/projects'
import ProjectsText from './components/projects/text.js'

import Top from './components/top'

import Footer from './components/footer'

export default function App() {
    const appStyle = {
        padding: '0% 2.5%',
        display: 'block',
    }

    return (
        <div style={{position: 'relative', height: 'fit-content'}}>
        <div className="App" style={appStyle}>
            <Heading />

            <Top />
            
            <div class='projects-cont' style={{width: '100%', display: 'flex', margin: 'auto'}}>
                <ProjectsText />
                <Projects />
            </div>
        </div>
        <Footer />
        </div>
    )
}
