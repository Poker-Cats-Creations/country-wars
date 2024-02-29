'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/Utils'
import { buttonVariants } from '@/components/atom/Button'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/molecule/Select'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
   return (
      <DayPicker
         showOutsideDays={showOutsideDays}
         className={cn('p-0 ', className)}
         classNames={{
            months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
            month: 'space-y-4 p-2 rounded-xl bg-primary-lighter',
            caption: 'flex justify-between relative items-center',
            dropdown_year: '',
            dropdown_month: '',
            vhidden: 'hidden',
            dropdown_icon: '',
            caption_dropdowns: 'flex gap-2',
            dropdown: 'rounded-lg text-white-50 bg-transparent border-transparent transition-all hover:bg-white-50/[.06]',
            caption_label: 'text-sm flex-1 ml-4 hidden',
            nav: 'space-x-3 flex items-center',
            nav_button: cn(buttonVariants({ variant: 'outline', size: 'sm-icon' }), 'rounded-lg'),
            nav_button_previous: '',
            nav_button_next: '',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex',
            head_cell: 'w-full text-muted-foreground rounded-md mb-2 font-normal text-[0.8rem]',
            row: 'flex w-full mt-1 gap-1',
            cell: ' w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
            day: cn(buttonVariants({ variant: 'ghost', size: 'counter' }), 'h-12 w-12 rounded-lg'),
            day_range_end: 'day-range-end',
            day_selected: 'bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50 focus:bg-accent-600 focus:text-accent-50',
            day_today: 'bg-accent text-accent-50',
            day_outside:
               'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
            day_disabled: 'text-muted-foreground opacity-50',
            day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
            day_hidden: 'invisible',
            ...classNames,
         }}
         components={{
            // Dropdown: ({ name, children, value, caption, ...props }) => (
            //    <Select>
            //       <SelectTrigger>
            //          <SelectValue placeholder={name} />
            //       </SelectTrigger>
            //       <SelectContent>
            //          {React.Children.map(
            //             children,
            //             (child, index) => React.isValidElement(child) && <SelectItem value={index.toString()}>{child}</SelectItem>
            //          )}
            //       </SelectContent>
            //    </Select>
            // ),
            IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4' />,
            IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />,
         }}
         {...props}
      />
   )
}
Calendar.displayName = 'Calendar'

export { Calendar }
