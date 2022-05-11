import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { Member } from '../../models/Member';
import LableInput from '../../utils/LableInput';
import Avatar from '../Avatar/Avatar';


interface MemberDetailsProps {
  member: Member;
}


const MemberDetailsComponent = ({ member }: MemberDetailsProps) => {

  const [currentMember, setMember] = useState<Member>(member);

  useEffect(() => {
    setMember(member);
  }, [member])

  const handleChange = (fieldName: keyof Member) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMember({ ...currentMember, [fieldName]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(currentMember);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="container">
        <div className="row">
          <div className="col-2">
            <Avatar photoUrl={member.photoUrl} isBig={true} />
          </div>
          <div className="col-10">
            
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <LableInput title='First Name' field={currentMember.firstName} onChangeEvent={handleChange("firstName")} />
                </div>
                <div className="col-4">
                  <LableInput title='Last Name' field={currentMember.lastName} onChangeEvent={handleChange("lastName")} />
                </div>
                <div className="col-4">
                  <LableInput title='Level' field={currentMember.commonLevel} onChangeEvent={handleChange("commonLevel")} />
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <LableInput title='Phone' field={currentMember.phone} onChangeEvent={handleChange("phone")} />
                </div>
                <div className="col-4">
                  <LableInput title='Email' inputType='email' field={currentMember.email} onChangeEvent={handleChange("email")} />
                </div>
                <div className="col-4">
                  <button className='btn btn-primary mb-3' style={{ float: "right" }} type='submit'>Submit</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </form>
  );
};

export default MemberDetailsComponent;
