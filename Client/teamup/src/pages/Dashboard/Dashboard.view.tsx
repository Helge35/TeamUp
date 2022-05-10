import React from "react";
import "./Dashboard.style.css";

import { Container, Row, Col, Card, Badge } from "react-bootstrap";

import { LevelEnum } from "../../models/LevelEnum";
import { Member } from "../../models/Member";
import { Project } from "../../models/Project";
import { OfficeStatusEnum } from "../../models/OfficeStatusEnum";
import MemberPreviewComponent from "../../components/MemberPreview/MemberPreview.component";


const DashboardView = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const MembersList = [
    {
      id: 1,
      firstName: "Anja",
      lastName: "Hobbs",
      email: "anjahobbs@mail.com",
      officeStatus: OfficeStatusEnum.Ready,
      photoUrl: "/images/1.jpg",
      phone: "054-8989-989",
      startAt: new Date(),
      projects: [],
      commonLevel: LevelEnum.Middle,
      skillLevels: [],
    },
    {
      id: 2,
      firstName: "Ivor",
      lastName: "Whittaker",
      email: "Ivor Whittaker@mail.com",
      officeStatus: OfficeStatusEnum.Ready,
      photoUrl: "images/2.jpg",
      phone: "054-8989-989",
      startAt: new Date(),
      projects:[{ id: 1, name: "Project 1"},{ id: 2, name: "Project 2"},{ id: 3, name: "Project 3"}],
      commonLevel: LevelEnum.Senior,
      skillLevels: [],
    },
    {
      id: 3,
      firstName: "Jarrod",
      lastName: "Gallegos",
      email: "anjahobbs@mail.com",
      officeStatus: OfficeStatusEnum.Sick,
      photoUrl: "/images/3.jpg",
      phone: "054-8989-989",
      startAt: new Date(),
      projects: [],
      commonLevel: LevelEnum.Middle,
      skillLevels: [],
    },
    {
      id: 4,
      firstName: "Marta",
      lastName: "Oneal",
      email: "anjahobbs@mail.com",
      officeStatus: OfficeStatusEnum.Out,
      photoUrl: "/images/4.jpg",
      phone: "054-8989-989",
      startAt: new Date(),
      projects: [],
      commonLevel: LevelEnum.Middle,
      skillLevels: [],
    },
    {
      id: 5,
      firstName: "No",
      lastName: "One",
      email: "anjahobbs@mail.com",
      officeStatus: OfficeStatusEnum.Ready,
      photoUrl: "",
      phone: "054-8989-989",
      startAt: new Date(),
      projects: [],
      commonLevel: LevelEnum.Middle,
      skillLevels: [],
    }
  ].map((mem) => <MemberPreviewComponent key={mem.id} member={mem} />
  );


  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card>
            <ul>
              {MembersList}
            </ul>
          </Card>
        </Col>
        <Col style={{ backgroundColor: 'navajowhite' }}>1 of 1</Col>
      </Row>
    </Container>
  );
};

export default DashboardView;
