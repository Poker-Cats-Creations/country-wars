'use client'
import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

type Props = {
	active?: boolean
	link?: string
	children: ReactNode
	onClick?: () => void
	isDisabled?: boolean
	badge?: {
		active: boolean
		content: React.ReactNode
	}
}

import React from 'react'
import { InfoBadge } from './Notification'
import Link from 'next/link'

const NavItem = ({ active = false, link, children, onClick, badge }: Props) => {
	const LinksStyle = cva(
		`
		flex
		flex-col
		gap-1
		transition
		items-center
		text-white
		disabled:opacity-50
		disabled:cursor-not-allowed
		lg:flex-row
		lg:gap-4
	`,
		{
			variants: {
				width: {
					full: 'w-full justify-start',
					inline: 'max-w-fit justify-center',
				},
				size: {
					default: `space-y-1 md:space-y-0 rounded-[.875rem] md:p-[1rem] xl:pr-6`, //md:p-[.906rem]
				},
				active: {
					true: 'md:text-white-50 md:group-hover:bg-white/[.06]',
					false: 'md:group-hover:bg-white/[.06] group-hover:text-white-50 text-white-500',
				},
			},
			defaultVariants: {
				width: 'inline',
				size: 'default',
			},
		}
	)

	return (
		<Link
			onClick={onClick}
			className={
				'group flex w-1/5 flex-1 cursor-pointer items-center justify-center md:w-auto md:justify-center lg:w-full xl:justify-between'
			}
			href={link || ''}>
			<li
				className={LinksStyle({
					active,
				})}>
				{children}
			</li>

			{badge && badge.active && <InfoBadge>{badge.content}</InfoBadge>}
		</Link>
	)
}

export default NavItem
