import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Container, Row, Col } from "react-bootstrap";

import TitleInput from '../../utils/TitleInput';
import { Member } from '../../models/Member';


interface MemberDetailsProps {
  member: Member;
}


const MemberDetailsComponent = ({member}: MemberDetailsProps) => {

  const [currentMember, setMember] = useState<Member>(member); 

  useEffect(() => {
    setMember(member);
}, [member])

  const handleChange = (fieldName: keyof Member) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMember({ ...currentMember, [fieldName]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(currentMember);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container fluid="md">
        <Row>
          <Col>
          <TitleInput title='First Name' >
            <input type='text' value={currentMember.firstName} onChange={handleChange("firstName")} />
          </TitleInput>
          </Col>
          <Col>
          <TitleInput title='Last Name' >
            <input type='text' value={currentMember.lastName} onChange={handleChange("lastName")} />
          </TitleInput>
          </Col>
        </Row>
      </Container>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default MemberDetailsComponent;