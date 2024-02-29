'use client'
import { motion } from 'framer-motion'
import twemoji from 'twemoji'
import { Country } from '@/components/organism/nav/SideNav'
import { AnimatedNumber } from '@/components/atom/AnimatedNumber'
import { OutlineCrown, SolidCrown, DuotoneCrown } from '@/icons/Icons'

interface CountryItemProps {
   country: Country
   index: number
   isWinning: boolean
}

export const CountryItem: React.FC<CountryItemProps> = ({ country, index, isWinning }) => {
   const item = {
      hidden: { opacity: 0, x: -32 },
      show: { opacity: 1, x: 0, transition: { delay: index * 0.2 } },
   }

   const crownAnimation = {
      hidden: { x: -32, opacity: 0 },
      show: {
         x: 0,
         opacity: 1,
         transition: {
            duration: 0.175,
            delay: 1,
            when: 'beforeChildren',
         },
      },
      exit: { x: -32, opacity: 0 },
   }

   return (
      <motion.li
         layout
         className={`flex relative w-full justify-between bg-primary-lighter ${
            country.current &&
            'before:absolute before:left-0 before:top-1/2 before:rounded-br-lg before:rounded-tr-lg before:-translate-y-1/2 before:h-3/5 before:w-1 before:bg-white-50'
         } p-4 rounded-lg space-x-4 items-center h-12`}
         key={country.name}
         variants={item}
         initial='hidden'
         animate='show'
         exit='hidden'>
         <div className='space-x-2 flex items-center'>
            <span className='text-white-300'>{index + 1}. </span>
            <span dangerouslySetInnerHTML={{ __html: twemoji.parse(country.flag) }} />
            <span>{country.name}</span>
            {isWinning && (
               <motion.div
                  variants={crownAnimation}
                  initial='hidden'
                  className={`absolute -left-12`}
                  animate='show'
                  exit='exit'>
                  <SolidCrown
                     className={`text-color-star`}
                     size={24}
                  />
               </motion.div>
            )}
         </div>
         <AnimatedNumber value={country.score} />
      </motion.li>
   )
}
