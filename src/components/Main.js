import React from 'react'
import feedback from '../images/feedback.svg'
import showcase from '../images/showcase.svg'
import ladify from '../images/ladify.svg'

export default function Main() {
    return (
        <div className='second-page'>
            <div className='about'>
                <h2>About</h2>
                <p>Landify is a landing page UI kit for Figma, created to help designers 
                    design the landing page quickly without having to spend much time. 
                    It is crafted with a vision to support any web project and thereby 
                    creating a block system that helps with all the use cases. The kit contains 
                    170+ blocks and 500+ components. It's fully customisable, well-organised layers, text, color and effect styles.</p>
                <div className='links'>   
                    <span><a href='#'>vijayverma.co↗</a></span>
                    <span><a href='#'>contrauikit.com↗</a></span>
                </div>
            </div>
            <div className='feedback'>
                <h2>Share your feedback</h2>
                <p>We hear you. We have a feedback board where we hear your feedback and suggestions 
                    to improve Landify. If you have any suggestions or feedback or ideas to improve 
                    the Landify UI Kit, please do share you thoughts.</p>
                <div className='links'>   
                    <span><a href='#'>Give Feedback↗</a></span>
                    <span><a href='#'>Roadmap↗</a></span>
                    <span><a href='#'>Changelog↗</a></span>
                </div>
                <img className='main-image' src={feedback} />
            </div>
            <div className='showcase'>
                <h2>Community Showcase</h2>
                <p>The Landify community is always building amazing websites. 
                    Discover the sites made using Landify across the web, find inspiration.</p>
                <p>Want to get featured? <span className='links-in-line'><a href='#'>Submit your work↗</a></span></p>
                <img className='main-image' src={showcase} />
            </div>
            <div className='last-page'>
                <div className='last-content'>
                    <div>
                        <h3>Landing page UI kit for Figma</h3>
                        <p><a className='gray' href='#'>www.landify.design</a></p>
                        <p className='gray sign'>© 2021 Landify</p>
                    </div>
                    <img src={ladify} />
                </div>
            </div>
        </div>
    )
}