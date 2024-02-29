'use client'

import { OutlineClose } from '@/icons/Icons'
import * as RadixToast from '@radix-ui/react-toast'
import { AnimatePresence, motion } from 'framer-motion'
import { ElementRef, ReactNode, createContext, forwardRef, useContext, useState } from 'react'
import { Button } from './Button'

const ToastContext = createContext<{
   showToast: (options: { title?: string; body: string }) => void
}>({
   showToast: () => {
      throw new Error("You can't call showToast() outside of a <ToastProvider> – add it to your tree.")
   },
})
export function useToast() {
   return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: ReactNode }) {
   const [messages, setMessages] = useState<{ id: string; title?: string; body: string }[]>([])

   function showToast({ title, body }: { title?: string; body: string }) {
      setMessages((toasts) => [...toasts, { id: window.crypto.randomUUID(), title, body }])
   }

   return (
      <RadixToast.Provider>
         <ToastContext.Provider value={{ showToast }}>{children}</ToastContext.Provider>

         <AnimatePresence mode={'popLayout'}>
            {messages.map((toast) => (
               <Toast
                  key={toast.id}
                  title={toast.title}
                  description={toast.body}
                  onClose={() => setMessages((toasts) => toasts.filter((t) => t.id !== toast.id))}
               />
            ))}
         </AnimatePresence>

         <RadixToast.Viewport className={`max-sm:px-4 w-full fixed z-10 md:right-4 bottom-4 flex md:w-80 flex-col gap-3`} />
      </RadixToast.Provider>
   )
}

const Toast = forwardRef<
   ElementRef<typeof RadixToast.Root>,
   {
      onClose: () => void
      title?: string
      description: string
   }
>(function Toast({ onClose, title, description }, forwardedRef) {
   return (
      <RadixToast.Root
         ref={forwardedRef}
         asChild
         forceMount
         onOpenChange={onClose}
         duration={2500}>
         <motion.li
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
               x: '100%',
               opacity: 0,
               zIndex: -1,
               transition: {
                  opacity: {
                     duration: 0.2,
                  },
               },
            }}
            transition={{
               type: 'spring',
               mass: 1,
               damping: 30,
               stiffness: 200,
            }}
            style={{ WebkitTapHighlightColor: 'transparent' }}
            className={`w-full`}>
            <div className='flex flex-1 flex-col gap-2 p-2 justify-between overflow-hidden whitespace-nowrap rounded-2xl bg-primary-lighter text-sm text-white-50 shadow-sm backdrop-blur;'>
               {title && (
                  <header className='flex justify-between w-full items-center;'>
                     <RadixToast.Title className='text-white text-lg font-semibold pl-2'>{title}</RadixToast.Title>
                     <RadixToast.Close asChild>
                        <Button
                           variant={'ghost'}
                           className='!rounded-lg'
                           size={'sm-icon'}>
                           <OutlineClose className='h-6 w-6' />
                        </Button>
                     </RadixToast.Close>
                  </header>
               )}
               <main className='flex flex-between items-center;'>
                  <RadixToast.Description className={`truncate pl-2 ${title && 'mb-2'} flex-1`}>{description}</RadixToast.Description>
                  {!title && (
                     <RadixToast.Close asChild>
                        <Button
                           variant={'ghost'}
                           className='!rounded-lg'
                           size={'sm-icon'}>
                           <OutlineClose className='h-6 w-6' />
                        </Button>
                     </RadixToast.Close>
                  )}
               </main>
            </div>
         </motion.li>
      </RadixToast.Root>
   )
})
