import React, { useContext } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { UserContext } from '../../../../contexts/UserContext';
import Cropper from './Cropper';

const MyEditor = () => {
  const {profilePic} = useContext(UserContext);

  return (
    <>
    <Cropper/>
    <AvatarEditor
      image={profilePic}
      width={250}
      height={250}
      border={50}
      color={[255, 255, 255, 0.6]} // RGBA
      scale={1.2}
      rotate={0}
    /></>
  )
}

export default MyEditor