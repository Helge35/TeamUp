import React from "react";
import styled from "styled-components";

interface Props {
    photoUrl: any;
    isBig?: boolean;
}

const Avatar = ({ photoUrl, isBig= false }: Props) => {

    if (!photoUrl) {
        photoUrl = '/images/anonimus.jpg';
    }

    return (
        <div>
          {isBig ? <BigImg src={photoUrl}/> : <SmallImg src={photoUrl}/>}  
        </div>
    )
};

export default Avatar;

const BigImg =  styled.img`
    height: 140px;
    width: 120px;
    border-radius: 50%;
    float: left;
`

const SmallImg =  styled.img`
    height: 80;
    width: 60px;
    border-radius: 50%;
    float: left;
`
