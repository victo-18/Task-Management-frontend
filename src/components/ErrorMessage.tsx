import { ReactNode } from "react"


export const ErrorMessage = ({children}: {children: ReactNode}) => {
  return (
    <p className="py-2 bg-red-100 rounded-sm text-red-600 font-medium text-2xl text-center">{children}</p>
  )
}
