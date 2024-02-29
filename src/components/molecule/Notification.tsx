'use client'
import React from 'react'
import { Badge } from '@nextui-org/react'
import { BadgeInfo } from '../atom/Badge'

interface NotificationProps {
	type?: 'dot' | 'count'
	count?: number
	className?: string
	children: React.ReactNode
}

export const Notification: React.FC<NotificationProps> = ({ type, count, className, children }) => {
	if (!type) return <React.Fragment>{children}</React.Fragment>

	let badgeContent: React.ReactNode = ''
	let isDot = false

	switch (type) {
		case 'dot':
			isDot = true
			break
		case 'count':
			badgeContent = count?.toString() || '0'
			break
		default:
			break
	}

	return (
		<Badge
			color='primary'
			content={count >= 10 ? '+9' : badgeContent}
			isDot={isDot}
			className={className}
			shape='circle'>
			{children}
		</Badge>
	)
}

interface InfoBadgeProps {
	children: React.ReactNode
}

export const InfoBadge: React.FC<InfoBadgeProps> = ({ children }) => {
	return (
		<BadgeInfo
			color='primary'
			className='hidden h-fit rounded-md !bg-accent-600 px-[.500rem] py-[.125rem] !font-regular !text-white-50 xl:flex'>
			{children}
		</BadgeInfo>
	)
}
