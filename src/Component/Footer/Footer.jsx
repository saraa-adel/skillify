import React from 'react'
import facebook from '../../Assets/images/5282541_fb_social media_facebook_facebook logo_social network_icon 1.png'
import twitter from '../../Assets/images/5282551_tweet_twitter_twitter logo_icon.png'
import linkedin from '../../Assets/images/5282542_linkedin_network_social network_linkedin logo_icon.png'
import instagram from '../../Assets/images/5282544_camera_instagram_social media_social network_instagram logo_icon.png'
import youtube from '../../Assets/images/5282548_play_player_video_youtube_youtuble logo_icon.png'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  <footer className={`${style.Fstyle} px-3`}>
    <div className='d-flex align-items-center justify-content-between h-100'>
      <div>
        <p className='text-white'>© 2023 Skillify Inc. All rights reserved.</p>
      </div>
      <div className='w-25'>
        <ul className='d-flex align-items-center justify-content-between mb-0'>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={linkedin} alt="linkedin" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
  </>
}
