'use client'
import React from 'react'
import { Skeleton } from '@nextui-org/react'

export const SkeletonList: React.FC = () => (
   <React.Fragment>
      {Array(10)
         .fill(0)
         .map((_, i) => (
            <div
               className='space-y-6'
               key={i}>
               <Skeleton className='w-full h-12 rounded-lg !bg-primary-lighter' />
            </div>
         ))}
   </React.Fragment>
)
