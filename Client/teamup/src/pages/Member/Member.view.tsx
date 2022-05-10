import { log } from "console";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import MemberDetails from "../../components/MemberDetails/MemberDetails.component";
import { LevelEnum } from "../../models/LevelEnum";
import { Member } from "../../models/Member";
import { OfficeStatusEnum } from "../../models/OfficeStatusEnum";



export const MemberView = () => {
  const params = useParams();
  const [member, setMember] = useState(new Member());

  useEffect(() => { 
      setMember(   { id: 1,
        firstName: "Anja",
        lastName: "Hobbs",
        email: "anjahobbs@mail.com",
        officeStatus: OfficeStatusEnum.Ready,
        photoUrl: "/images/1.jpg",
        phone: "054-8989-989",
        startAt: new Date(),
        projects: [],
        commonLevel: LevelEnum.Middle,
        skillLevels: []})
  }, []);

  {/*return <>Link ID parameter === "{params?.memberId}"</>*/ };

  return (
    <div>
      <div>{params?.memberId}</div>

      <MemberDetails member={member} />
    </div>

  );
};

