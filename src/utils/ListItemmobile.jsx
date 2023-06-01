import React from 'react'
import { useLocation } from 'react-router';
import {Link}  from 'react-router-dom'

const ListItemMobile= ({link, children}) => {
    
    
    const route = useLocation();
    return (
        <div>
             <p style={{
                    backgroundColor: `${route.pathname === `${link}` ? '#fff' : ''}`,
                    borderRadius: 7,
                    margin:'0 20px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    padding:'10px 10px'
                }}>
                    <Link className='link' to={link}><span style={{ color: `${route.pathname == `${link}` ? '#000' : 'silver'}` }} id='sidebarLink'>{children}</span></Link>
                </p>
        </div>
    )
}

export default ListItemMobile