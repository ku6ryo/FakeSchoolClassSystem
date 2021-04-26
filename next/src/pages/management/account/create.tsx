import { useSession, } from "next-auth/client"
import React, { useCallback, useEffect, useState } from "react"
import axios from "axios"

export default function Component () {
  const [ session, loading ] = useSession()
  const [ email, setEmail ] = useState("")

  useEffect(() => {

  }, [session, loading])

  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const onCreateClick = useCallback(async () => {
    const res = await axios.post("/api/backend/account/create", {
      type: 0,
      email,
    })
    console.log(res.data)
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
