'use client'
import React from 'react'
import { FunctionComponent } from 'react'
import Twemoji from 'react-twemoji'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/Utils'
import UserBadge from '../atom/Chip'

interface Props {
	displayName: string
	userID: string
	size?: 'xs' | 'sm' | 'lg'
	variant?: 'default' | 'opacity' | 'accent' | 'disabled'
}

const typographyVariants = cva('w-fit overflow-hidden text-ellipsis whitespace-pre font-bold', {
	variants: {
		variant: {
			default: '',
		},
		size: {
			xs: 'text-sm',
			sm: 'text-base',
			default: 'text-xl',
			lg: 'text-xl',
			xl: 'text-xxl',
		},
		link: {
			true: 'cursor-pointer hover:underline',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})

const UserInfo: FunctionComponent<Props> = ({ displayName, userID, size = 'sm', variant = 'default', ...props }) => {
	return (
		<React.Fragment {...props}>
			<Twemoji noWrapper options={{ className: 'emoji' }}>
				<span className={cn(typographyVariants({ size }))}>{displayName ? displayName : 'unknown'}</span>
			</Twemoji>
			<UserBadge userID={userID ? userID : 'unknown'} size={size} variant={variant} />
		</React.Fragment>
	)
}

export default UserInfo
