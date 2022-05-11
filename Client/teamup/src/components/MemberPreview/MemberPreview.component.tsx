import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Member } from "../../models/Member";
import Avatar from "../Avatar/Avatar";

interface MemberPreviewProps {
    member: Member;
}


const MemberPreviewComponent = ({ member }: MemberPreviewProps) => {

    const navigate = useNavigate();

    const OpenMemberDetails = () => {
        navigate("/member/" + member.id);
    };

    return (
        <MemberPreviewItem key={member.id}>
            <div className="memberContainer" onClick={OpenMemberDetails}>

                <Avatar  photoUrl={member.photoUrl} /> 
                <div>
                    <h3>{member.firstName} {member.lastName}     <small>({member.officeStatus})</small></h3>
                    <Badge className="badge" pill bg="info">{member.commonLevel}</Badge>
                </div>
                <div>
                    Projects: {member.projects.map(p => (<Badge key={p.id} bg="secondary">{p.name}</Badge>))}
                </div>
            </div>
        </MemberPreviewItem>
    )
};

export default MemberPreviewComponent;

const MemberPreviewItem = styled.li`

    list-style-type: none;
    margin-top: 5px;

    :hover {
        background-color: lightgray;
        cursor: pointer
    }
    
    .memberContainer {
        height: 100px;
    }
    
    
    .badge{
        color: white;
        margin-right: 8px;;
    }
`