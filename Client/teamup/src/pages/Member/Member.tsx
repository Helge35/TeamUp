import React from "react";
import {useParams} from 'react-router-dom'


const Member: React.FC = (): JSX.Element => {
    const params = useParams();
    return <>Link ID parameter === "{params.memberId}"</>;
  }

export default Member;