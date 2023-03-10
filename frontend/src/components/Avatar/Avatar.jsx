import React from 'react'

const Avatar = ({ src, width, height, handleClick }) => {
  const avatarStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: handleClick ? 'pointer' : 'default', // set cursor to pointer if handleClick is passed
  }

  const handleAvatarClick = () => {
    if (handleClick) {
      handleClick()
    }
  }

  return <img src={src} style={avatarStyle} alt="Avatar" onClick={handleAvatarClick} />
}

export default Avatar
