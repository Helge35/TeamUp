import React from "react";
import "./Dashboard.style.css";
import { Grid, Avatar, AvatarGroup } from "@mui/material";
import { Link } from "react-router-dom";
import Popup from "../../utils/Popup";
import MemberDetails from "../../components/MemberDetails/MemberDetails";


const DashboardView = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div>
          
           {/* <Button
              component={Link}
              to="/home"
              variant="contained"
              color="primary"
            >
              Add New Member
            </Button>*/}


          <Popup title="Add New Member">
            <MemberDetails />
          </Popup>
            
         
          <AvatarGroup>
            
              <Avatar className="avatar" component={Link} to="/member/1"  alt="Remy Sharp" src="/static/images/avatar/1.jpg">
                RS
              </Avatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </div>
      </Grid>
      <Grid item xs={4} style={{ backgroundColor: "navajowhite" }}>
        Notifications
      </Grid>
    </Grid>
  );
};

export default DashboardView;