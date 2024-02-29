import { DuotoneLock, DuotoneLockOpen, DuotoneLockUnlocked } from '../../icons/Icons'

export const getPasswordStrengthIcon = (password) => {
   if (password.length > 8) {
      return <DuotoneLock size={24} />
   } else if (password.length > 4) {
      return <DuotoneLockOpen size={24} />
   } else {
      return <DuotoneLockUnlocked size={24} />
   }
}
