import React from 'react'
import TopBox from './topbox'
import './style.css'

export default class Top extends React.Component {
    render() {
        return (
            <div className='top-area' style={{width: '100%', display: 'flex', margin: 'auto'}}>
                <TopBox width='20%' margin='true' text='ASMOUCHA.CO'/>
                <TopBox width='20%' margin='true' text='HTML ● CSS ● JS ● Python'/>
                <TopBox width='20%' margin='true' text='Web development - Software programming' info='true' />
                <TopBox width='35%' margin='false' text='About me' about="My name is Rafi. I'm a full-stack developer. I began programming 3 years ago exclusively with Python. After two years and a half I felt confident to try learn new programming langauges, I decided to get into web development and since then I have become fluent in HTML, CSS, JS and have started learning the React.JS framework (this is my first React project)."/>
            </div>
        )
    }
}