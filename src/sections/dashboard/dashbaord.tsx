import React from 'react'
import Layout from '../../layout/layout'
import { Grid } from '@mui/material'
import TopCard from '../../components/TopCard'
import ScoreCard from '../../components/scoreCards'
import { AiOutlineHeart } from 'react-icons/ai';
import { MdTaskAlt, MdWorkspacesFilled } from 'react-icons/md';
import MyCharts from '../../components/Chart'
import MyBarChart from '../../components/BarChart'

const Dashbaord = () => {
  return (
    <div>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ color: '#171717', fontWeight: 500 }}>Dashboard</h2>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TopCard />
          </Grid>
          <Grid item xs={12} sm={12} lg={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <ScoreCard coloricon='red' subtitle='78%' increase='5%' icon={<AiOutlineHeart />} title='Ecosystem Health' />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ScoreCard coloricon='green' subtitle='8234' increase='20%' icon={<MdWorkspacesFilled />} title='Project Count' />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <ScoreCard coloricon='#025ca6' subtitle='90%' increase='12%' icon={<MdTaskAlt />} title='Task Completion' />
              </Grid>
              <Grid item xs={12}>
                <MyCharts />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MyBarChart />
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}

export default Dashbaord