import React from 'react'
import { Chip } from '@mui/material'
import { AiOutlineRise } from 'react-icons/ai';

const ScoreCard = ({ coloricon, icon, title, increase, subtitle}: any) => {
    return (
        <div style={{
            padding: '10px 10px',
            borderRadius: 10,
            border: '1px solid #ccc',
            // boxShadow:'0 3px 15px rgba(0,0,0,0.1)',
            // background:'#f0f0f0'
            // background: `linear-gradient(to right, ${colorinit},${colorend})`,
            // height: 100,
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 10, fontSize: '1.2em', lineHeight: 0.7, color:coloricon }} id='icon'>{icon}</span>
                <p style={{ fontWeight: 600,fontSize:'.9em'}}>{title}</p>
            </div>
            <div style={{display:'flex',alignItems:'flex-end', justifyContent:'space-between'}}>
                <h1 style={{marginLeft:5,paddingTop:10, fontSize:'2em', lineHeight:1 }}>{subtitle}</h1>
                {/* <h2 style={{marginLeft:5,paddingTop:10  }}>78%</h2> */}
                <Chip size='small' variant='outlined' label={increase} color={'success'} style={{borderRadius:6, padding:'0 5px', fontWeight:500, fontSize:'.8em', backgroundColor:'rgba(55, 158, 72,0.15)',}} icon={<AiOutlineRise/>} />
            </div>
        </div>
    )
}

export default ScoreCard