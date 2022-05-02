import TextField from '@mui/material/TextField';
import * as React from 'react';


const MemberDetails: React.FC =()=>{
    return(
        <div> <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
      />New Member</div> 
    );
};

export default MemberDetails;