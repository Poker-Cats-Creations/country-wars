'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from '../atom/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AnimatedTabs() {
   let tabs = [
      { id: 'home', label: 'Home', url: '/' },
      { id: 'tos', label: 'Terms of Service', url: '/tos' },
      { id: 'login', label: 'Login', url: '/login' },
      //session && { id: 'admin', label: 'Admin', url: '/admin' },
      // { id: 'contact', label: 'Contact', url: '/contact' },
   ]

   let pathname = usePathname()
   let [activeTab, setActiveTab] = useState(tabs[0].id)

   useEffect(() => {
      const currentTab = tabs.find((tab) => tab.url === pathname)
      if (currentTab) {
         setActiveTab(currentTab.id)
      }
   }, [pathname])

   return (
      <div className='flex space-x-1'>
         {tabs.map((tab) => (
            <Link
               key={tab.id}
               href={tab.url}>
               <Button
                  variant='empty'
                  size='xs'
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                  ${
                     activeTab === tab.id ? 'text-white-50' : 'text-white hover:text-white/60'
                  } relative rounded-full text-sm transition focus-visible:outline-2`}
                  style={{
                     WebkitTapHighlightColor: 'transparent',
                  }}>
                  {activeTab === tab.id && (
                     <motion.span
                        layoutId='bubble'
                        className='absolute inset-0 -z-10 bg-gradient-to-r from-[#e15459] to-[#f47750] rounded-full' //mix-blend-difference
                        //style={{ borderRadius: 9999 }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                  )}
                  {tab.label}
               </Button>
            </Link>
         ))}
         {/* {session && <Link href={'/admin'}>Admin</Link>} */}
      </div>
   )
}
