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
    font-size: 14px;
    color: #1e1f22;
    text-align: left;
    float :left;
`;

const Input = styled.div`
    float :left;
    margin-left: 5px;

    input{
        color: black;
        font-size: 16px;
        width: 180px;
        border: 3px 0.5px #aaa7a7;
        background-color: #ebeeee;
    } 
`;

export default TitleInput;

