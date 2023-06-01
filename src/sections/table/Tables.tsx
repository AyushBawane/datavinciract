import React from 'react'
import Layout from '../../layout/layout'
import { Grid } from '@mui/material'
import TableComponent from '../../components/TableComponent'

const Tables = () => {
  return (
    <div>
        <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{marginBottom:20,display:'flex', alignItems:'center'}}>
              <h2 style={{color:'#171717', fontWeight:500}}>Tables</h2>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{border:'0px solid red'}}><TableComponent/></div>
          </Grid>
        </Grid>
        </Layout>
    </div>
  )
}

export default Tables