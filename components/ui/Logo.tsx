import Image from 'next/image'
import React from 'react'

export const Logo = () => {
    return (
        <div className='flex justify-content mt-10'>
            <Image src='/logo.svg' width={100} height={100} alt='logo' />
        </div>
    )
}
