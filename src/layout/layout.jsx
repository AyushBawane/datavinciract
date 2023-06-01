import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import { Scrollbars } from 'react-custom-scrollbars';
import SideBarCollapsed from '../components/SideBarCollapsed';
import { useSelector } from 'react-redux';
import SideBarMobile from '../components/sidebarMobile';
import './layout.css'

const Layout = ({ children }) => {

    const [collapse, setCollapse] = useState(false)
    const [width, Setwidth] = useState(0)

    const windowWidthRedux = useSelector((store) => store.WindowWidth.value);

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
        <>
            <div id='layout'>
                <div id='sidebarContainer'>
                    <div id='sidebar'><SideBar /></div>
                    <div id='sidebarCollapsed'><SideBarCollapsed /></div>
                    <div id='sidebarMobile'><SideBarMobile /></div>
                </div>
                <div  id='mainComponent'>
                    <div style={{ maxWidth: '1500px', margin: 'auto' }}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout