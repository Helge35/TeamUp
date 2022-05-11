import React from 'react';

interface Props {
    title?: string;
    field?: any;
    inputType?: string;
    onChangeEvent?: (e: any) => void;
};

const LableInput = ({ title, field,inputType, onChangeEvent }: Props) => {
    if(!inputType){
        inputType = 'text';
    }

    return (
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">{title}</span>
            <input type={inputType} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
            value={field} onChange={onChangeEvent} />
        </div>
    );
};

export default LableInput;

