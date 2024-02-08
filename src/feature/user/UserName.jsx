import React from 'react'
import {useSelector} from "react-redux"
export default function UserName() {
  const username = useSelector( store => store.user.username)

  if(!username) return null;  

  return <p className="text-sm font-semibold hidden sm:block">{username}</p>
}
