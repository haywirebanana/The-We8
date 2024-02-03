'use client'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='footer grid grid-col-2 bg-forest-green text-white flex justify-center content-center h-48 p-2'>
      <div className='flex justify-center gap-4 p-4'>
        <SocialIcon bgColor='white' fgColor='transparent' url='https://instagram.com' />

        <SocialIcon bgColor='white' fgColor='transparent' url='https://linkedin.com' />
      </div>
      <div>
        <h1 className='text-center'>Copyright © CalPal</h1>
      </div>
    </div>
  )
}
export default Footer
