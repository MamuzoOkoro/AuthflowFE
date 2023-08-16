import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const privateRoute:React.FC<PropsWithChildren> = ({children}) => {

    const user = useSelector((state: any) => state.dailystate)

  return (
    <div>
        {
            user ? <div>{children}</div> :
            <NavLink to = "sign-in"/>
        }
    </div>
  )
}

export default privateRoute