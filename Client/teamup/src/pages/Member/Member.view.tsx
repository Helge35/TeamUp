import { log } from "console";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import MemberDetails from "../../components/MemberDetails/MemberDetails.component";
import MemberProjects from "../../components/MemberProjects/MemberProjects.compomemt";
import { LevelEnum } from "../../models/LevelEnum";
import { Member } from "../../models/Member";
import { OfficeStatusEnum } from "../../models/OfficeStatusEnum";



export const MemberView = () => {
  const params = useParams();
  const [member, setMember] = useState(new Member());

  useEffect(() => {
    setMember({
      id: 1,
      firstName: "Anja",
      lastName: "Hobbs",
      email: "anjahobbs@mail.com",
      officeStatus: OfficeStatusEnum.Ready,
      photoUrl: "/images/1.jpg",
      phone: "054-8989-989",
      startAt: new Date(),
      projects: [{ id: 1, name: "Project 1" }, { id: 2, name: "Project 2" }, { id: 3, name: "Project 3" }],
      commonLevel: LevelEnum.Middle,
      skillLevels: []
    })
  }, []);

  {/*return <>Link ID parameter === "{params?.memberId}"</>*/ };

  return (
    <div>
      <div>{params?.memberId}</div>


      <div className="grid">
        <div className="row">
          <div className="col-6">
            <MemberDetails member={member} />
            <MemberProjects projects={member.projects} />
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>
    </div>
  );
};

