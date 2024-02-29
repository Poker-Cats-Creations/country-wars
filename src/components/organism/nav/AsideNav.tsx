'use client'
import { Skeleton } from '@nextui-org/react'

export const AsideNav = () => {
	return (
		<aside className='sticky top-0 hidden h-screen max-w-sm flex-1 flex-col py-[2.5rem] lg:mx-6 lg:flex xl:mx-0'>
			<ul className='h-fit w-full space-y-2 rounded-2xl bg-primary-lighter p-2 pt-4'>
				<h2 className='h3-bold md:h2-bold ml-2 flex w-full justify-between text-left capitalize'>
					Last 5 registered users
					<span className='mx-4 text-white-400'>Total</span>
				</h2>
				{Array.from({ length: 5 }, (_, index) => (
					<li key={index} className='flex w-full min-w-[200px] flex-1 items-center justify-between p-2'>
						<div className='flex space-x-4'>
							<Skeleton className='h-12 w-12 rounded-full !bg-primary-badge' />
							<div className='flex flex-col justify-around'>
								<Skeleton className='h-4 w-[3rem] rounded-full !bg-primary-badge' />
								<Skeleton className='h-4 w-[6rem] rounded-full !bg-primary-badge' />
							</div>
						</div>
						<Skeleton className='h-10 w-[6rem] rounded-lg !bg-primary-badge' />
					</li>
				))}
			</ul>
		</aside>
	)
}
