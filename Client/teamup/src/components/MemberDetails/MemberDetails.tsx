import React, { useState } from 'react';
import { Grid, Avatar } from "@mui/material";
import TitleInput from '../../utils/TitleInput';
import { Member } from '../../models/Member';


const MemberDetails: React.FC = () => {

  const [member, setMember] = useState<Member>(new Member());

  const handleChange = (fieldName: keyof Member) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMember({ ...member, [fieldName]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Avatar sx={{ width: 90, height: 90 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs={4}>
            <TitleInput title='First Name'>
              <input type="text" name='firstname' placeholder='First Name' value={member.firstName} onChange={handleChange('firstName')} />
            </TitleInput>
          </Grid>
          <Grid item xs={4}>
            <TitleInput title='Last Name'>
              <input type="text" name='lastname' placeholder='Last Name' value={member.lastName} onChange={handleChange("lastName")} />
            </TitleInput>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <TitleInput title='Email'>
              <input type="text" />
            </TitleInput>
          </Grid>
          <Grid item xs={4}>
            <TitleInput title='Phone'>
              <input type="text" />
            </TitleInput>
          </Grid>
          <Grid item xs={4}>
            <TitleInput title='Start At'>
              <input type="text" />
            </TitleInput>
          </Grid>
        </Grid>

      </Grid>
    </form>
  );
};

export default MemberDetails;