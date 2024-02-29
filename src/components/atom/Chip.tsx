'use client'
import { cn } from '@/lib/Utils'
import { cva } from 'class-variance-authority'
import { FunctionComponent } from 'react'

interface Props {
	userID?: string
	size?: 'xs' | 'sm' | 'lg'
	variant?: 'default' | 'opacity' | 'accent' | 'disabled'
	link?: boolean
}

const badgeBaseVariants = cva('transition-colors', {
	variants: {
		variant: {
			default: 'text-white-400 hover:text-white-50 bg-white/[.06] hover:bg-white/[.12]',
			disabled: 'text-white-400 bg-white/[.06]',
			opacity: 'bg-black/20 backdrop-blur-md',
			accent: 'text-accent-300 hover:text-accent-50 bg-accent-950 hover:bg-accent-600',
		},
		size: {
			xs: 'text-xs rounded-[.313rem] py-[.156rem] px-[.312rem]',
			sm: 'text-sm rounded-[.375rem] px-[.368rem] py-[.094rem]',
			default: 'text-base rounded-[0.875rem] px-[2rem] py-[1rem]',
			lg: 'text-xs py-[.375rem] px-[.750rem] rounded-[.375rem] md:text-lg md:rounded-lg md:py-[.437rem] md:px-[.874rem]',
			xl: 'text-xl rounded-[1.125rem] px-[3rem] py-[1.5rem]',
		},
		link: {
			true: 'cursor-pointer',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})

const UserBadge: FunctionComponent<Props> = ({ userID, size = 'sm', variant = 'default', link = false }) => {
	return <span className={cn(badgeBaseVariants({ size, link, variant }), 'w-fit')}>{userID}</span>
}

export default UserBadge
