import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Project } from "../../models/Project";

interface MemberProjectsProps {
    projects: Project[];
}

const MemberProjectsComponent = ({ projects }: MemberProjectsProps) => {


    const [projectsArray, setProjectsArray] = useState(projects);
    useEffect(() => {
        setProjectsArray(projects);
    }, [projects])

    const removeProject = (id: number) => {
        let array = [...projectsArray];
        array = array.filter(item => item.id !== id);
        setProjectsArray(array);
    }

    return (
        <div>
            {
                projectsArray.map(p => {
                    return (
                        <ProjectDiv key={p.id} className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{p.name}</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => removeProject(p.id)}></button>
                        </ProjectDiv>
                    )
                })
            }
        </div>
    )
};

export default MemberProjectsComponent;

const ProjectDiv = styled.div`
    max-width: 350px;
    float: left;
    margin-left: 10px;
`