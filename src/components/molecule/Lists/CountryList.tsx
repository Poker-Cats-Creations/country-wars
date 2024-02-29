'use client'
import { AnimatePresence } from 'framer-motion'
import { Country } from '@/components/organism/nav/SideNav'
import { CountryItem } from './CountryItem'

interface CountryListProps {
   countries: Country[]
}

export const CountryList: React.FC<CountryListProps> = ({ countries }) => (
   <AnimatePresence>
      {countries
         .sort((a, b) => b.score - a.score)
         .map((country, index) => (
            <CountryItem
               country={country}
               index={index}
               key={country.name}
               isWinning={index === 0}
            />
         ))}
   </AnimatePresence>
)
