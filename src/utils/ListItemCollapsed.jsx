import React from 'react'
import { useLocation } from 'react-router';
import {Link}  from 'react-router-dom'

const ListItemCollapsed = ({link, children}) => {
    
    
    const route = useLocation();
    return (
        <div>
             <p style={{
                    backgroundColor: `${route.pathname === `${link}` ? '#fff' : ''}`,
                    borderRadius: 7,
                    margin:'5px 0',
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

export default ListItemCollapsed