import { Grid } from '@material-ui/core'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12} md={6}>Item 1</Grid>
          <Grid item xs={12} md={3}> Item2</Grid>
          <Grid item xs={12} md={3}> Item 3</Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
