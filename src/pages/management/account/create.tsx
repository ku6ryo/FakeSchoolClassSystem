
import { useSession, } from "next-auth/client"
import React, { useCallback, useEffect, useState } from "react"

export default function Component () {
  const [ session, loading ] = useSession()
  const [ email, setEmail ] = useState("")

  useEffect(() => {

  }, [session, loading])

  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const onCreateClick = useCallback(async () => {
    const res = await fetch("/api/course/create")
    const json = await res.json()
    console.log(json)
  }, [])

  if (loading) {
    return "loading"
  }
  if (session) {
    return (
      <div>
        <div>
          <div>email</div>
          <div>
            <input value={email} onChange={onEmailChange}/>
          </div>
        </div>
        <div>
          <button onClick={onCreateClick}>Create</button>
        </div>
      </div>
    )
  } else {
    return "not logged in"
  }
}
