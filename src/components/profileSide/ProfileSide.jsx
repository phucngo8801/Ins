import React from 'react'
import FollowersCards from '../FollowersCards/FollowersCards'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfilerCard/ProfileCard'
import"./Profileside.css"
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>

        <LogoSearch/>
        <ProfileCard/>
        <FollowersCards/>
    </div>
  )
}

export default ProfileSide