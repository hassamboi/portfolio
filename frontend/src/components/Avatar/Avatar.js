import React from 'react'

const Avatar = ({ image, width, height }) => {
  const avatarStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '50%',
    overflow: 'hidden',
    objectFit: 'cover',
  }

  return (
    <div style={avatarStyle}>
      <img src={image} alt="avatar" style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Avatar
