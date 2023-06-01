import React, { useEffect, useState } from 'react'
import '../index.css'

const TopCard = () => {


    const [width, Setwidth] = useState(0)


    window.addEventListener('resize', () => {
        let windowInnerWidth = window.innerWidth;
        Setwidth(window.innerWidth)
        // if (windowInnerWidth > 900) {
        //     setCollapse(false)
        // } else {
        //     setCollapse(true)
        // }
    })

    useEffect(() => {
        Setwidth(window.innerWidth)
        let windowInnerWidth = window.innerWidth;
        // if (windowInnerWidth > 900) {
        //     setCollapse(false)
        // } else {
        //     setCollapse(true)
        // }
    }, [])

    return (
        <div style={{
            padding: '10px 20px',
            borderRadius: 10,
            border: '1px solid #ccc',
            // boxShadow:'0 3px 15px rgba(0,0,0,0.1)',
            // background:'#f0f0f0'
            // background: 'linear-gradient(to right, #fccccc, #db6e6e)',
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden'
        }}>
            <div>
                <h2 style={{ marginBottom: 5 }}>Hello, Ayush Bawane</h2>
                <p style={{ fontSize: '1em' }}>Welcome back to <span className='datavinci'>DataVinci </span>dashboard !</p>
            </div>
            <img id='bannerImg' src="logo.png" alt="" />
        </div>
    )
}

export default TopCard