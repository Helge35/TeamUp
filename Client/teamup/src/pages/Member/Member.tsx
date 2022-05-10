import React from "react";
import { useParams } from 'react-router-dom'
import { Grid, Paper, makeStyles   } from "@mui/material";


const Member = () => {
  const params = useParams();
  {/*return <>Link ID parameter === "{params?.memberId}"</>*/ };


  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper >item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper >item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper >item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Member;