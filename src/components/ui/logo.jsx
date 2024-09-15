import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className='w-auto h-auto'>
            <Link href={"/"} className='relative'>
                <Image src={"/images/logo/DL LOGO.png"} width={150} height={200} alt='logo-white' className={`dark:block hidden`} />
                <Image src={"/images/logo-next.png"} width={500} height={200} unoptimized="true" alt='logo-original' className='w-full h-full block dark:hidden' />
            </Link>
        </div>
    )
}

export default Logo