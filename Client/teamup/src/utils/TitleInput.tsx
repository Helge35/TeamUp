import React from 'react';
import styled from 'styled-components';

interface Props {
    title?: string;
    children?: React.ReactNode;
};

const TitleInput = ({ title, children }: Props) => {
    return (
        <Div>
            <Title>{title}</Title>
            <Input>{children}</Input>
        </Div>

    );
};

const Div = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    
`;

const Title = styled.div`
    margin-top: 6px;
    font-size: 20px;
    color: #1e1f22;
    text-align: left;
    font-weight: 400;
    float :left;
    width:100px;
`;

const Input = styled.div`
    float :left;
    margin-left: 10px;

    input{
        color: black;
        font-size: 20px;
        width: 250px;
        border: 3px 0.5px #aaa7a7;
        background-color: #ebeeee;
    } 
`;

export default TitleInput;

