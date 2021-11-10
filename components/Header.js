import React from 'react'
import SocialIcon from './SocialIcon';
import { Instagram, Facebook, Pinterest, Twitter, Email,Home} from '@material-ui/icons';
import {useRouter} from 'next/router'




function Header() {
    const router = useRouter()
    return (
        <header>
            {/* top navbar */}
            <div className='bg-red-200 p-2 sm:p-0'>
                <div className='flex items-center max-w-6xl mx-auto '>
                
                {/* social icons logo left */}
                <div className='flex items-center flex-grow space-x-2'>
                    <SocialIcon Icon={Instagram} title='instagram'/>
                    <SocialIcon Icon={Facebook}/>
                    <SocialIcon Icon={Pinterest}/>
                    <SocialIcon Icon={Twitter}/>
                    <SocialIcon Icon={Email}/>
                </div>
                {/*  home right */}
                <div className='flex items-center space-x-2 '>
                    <Home onClick={()=>router.push('/')} fontSize='large' className='icon'/>
                </div>
                </div>

            </div>
            
        </header>
    )
}

export default Header
