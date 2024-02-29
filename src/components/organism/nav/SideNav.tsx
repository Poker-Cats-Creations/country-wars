'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Skeleton } from '@nextui-org/react'
import { Button } from '@/components/atom/Button'
import { CountryList } from '@/components/molecule/Lists/CountryList'
import { SkeletonList } from '@/components/molecule/Lists/SkeletonList'
import { SolidCrown } from '@/icons/Icons'

export interface Country {
   flag: string
   name: string
   score: number
   current?: boolean
}

export const SideNav = () => {
   const [countries, setCountries] = useState<Country[]>([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      // Simulate fetching data from a database
      const fetchCountries = new Promise<Country[]>((resolve) => {
         setTimeout(() => {
            resolve([
               { flag: '🇺🇸', name: 'USA', score: 100 },
               { flag: '🇬🇧', name: 'UK', score: 90 },
               { flag: '🇨🇦', name: 'Canada', score: 80, current: true },
               { flag: '🇦🇺', name: 'Australia', score: 70 },
               { flag: '🇮🇳', name: 'India', score: 60 },
               { flag: '🇨🇳', name: 'China', score: 50 },
               { flag: '🇧🇷', name: 'Brazil', score: 40 },
               { flag: '🇿🇦', name: 'South Africa', score: 30 },
               { flag: '🇩🇪', name: 'Germany', score: 20 },
               { flag: '🇫🇷', name: 'France', score: 10 },
            ])
         }, 2000)
      })

      fetchCountries.then((data) => {
         setCountries(data)
         setLoading(false)
      })
   }, [])

   const addPoints = (countryName: string) => {
      setCountries((prevCountries) =>
         prevCountries.map((country) => (country.name === countryName ? { ...country, score: country.score + 10 } : country))
      )
   }

   return (
      <nav
         className={`sticky pb-12 z-10 top-0 ml-5 hidden h-screen max-w-[8rem] flex-1 flex-col items-end justify-between py-[2.5rem] pl-10 pr-8 md:flex lg:ml-0 xl:ml-0 xl:max-w-[17rem] xl:items-start xl:px-0`}>
         <div className='w-full space-y-4'>
            <header className='sticky top-0 z-10 p-4 bg-primary-lighter rounded-xl shadow-md'>
               <h2>🌐 Top 10 Countries</h2>
            </header>

            <motion.ul
               className='w-full relative space-y-2'
               initial='hidden'
               animate='show'>
               {loading ? (
                  <SkeletonList />
               ) : (
                  // <React.Fragment>
                  //    <SolidCrown
                  //       className={`absolute z-10 calc(space-y-4 - top-6) -translate-y-1/2 -left-10 text-color-star`}
                  //       size={24}
                  //    />
                  <CountryList countries={countries} />
                  // </React.Fragment>
               )}
            </motion.ul>
         </div>
         <Button
            className='w-full'
            disabled={loading}
            onClick={() => addPoints('Canada')}>
            smash for points
         </Button>
      </nav>
   )
}
