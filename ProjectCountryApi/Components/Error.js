import React from 'react'
import { useRouteError } from 'react-router-dom'
import "../sass/main.css"

export default function Error() {
    const error = useRouteError();
    // console.log(error)
  return (
    <>
    <h4 >Something went wrong {error.status}</h4>
    </>
  )
}
