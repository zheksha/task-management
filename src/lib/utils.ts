import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

globalThis.UlanUtils = {
  myCustomLog: (message: unknown, options: LogOptions = {}) => {
    const {
      color = 'red',
      fontSize = '16px',
      fontStyle = 'bold',
      backgroundColor = 'yellow',
    } = options
    const style = `color: ${color}; font-size: ${fontSize}; font-style: ${fontStyle}; background-color: ${backgroundColor}; padding: 2px 4px; border-radius: 4px;`

    // Handle different types of input
    if (Array.isArray(message)) {
      // Use console.table for arrays
      console.table(message)
    } else if (typeof message === 'object' && message !== null) {
      // Use console.dir for objects
      console.dir(message, { colors: true, depth: null })
    } else if (typeof message === 'string') {
      // Styled console log for strings with background color
      console.log(`%c${message}`, style)
    } else if (typeof message === 'number' || typeof message === 'boolean') {
      // Log numbers or booleans with style
      console.log(`%c${message}`, style)
    } else {
      // Fallback for other types (e.g., null, undefined, function)
      console.log(`%cUnsupported type: ${typeof message}`, style)
      console.log(message)
    }
  },
}
