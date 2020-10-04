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
                <TopBox width='35%' margin='false' text='About me' about="I am a web developer from Israel, currently living in London. I enjoy building everything from small business sites to interactive web apps. I'm also a gym rat and watch geek."/>
            </div>
        )
    }
}