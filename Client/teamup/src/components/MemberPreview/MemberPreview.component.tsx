import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Member } from "../../models/Member";

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

                {member.photoUrl ? <img className="alvatrImg" src={member.photoUrl} /> : <img className="alvatrImg" src='/images/anonimus.jpg' />}
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

    .alvatrImg {
        border-radius: 50%;
        height: 100px;
        width: 80px;
        float: left;
    }
    
    .memberContainer {
        height: 100px;
    }
    
    
    .badge{
        color: white;
        margin-right: 8px;;
    }
`