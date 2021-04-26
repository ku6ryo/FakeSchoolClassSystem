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
    try {
      await axios.post("/api/proxy/account.createAccount", {
        type: 0,
        email,
      })
    } catch (e) {
      console.log("error")
    }
  }, [email])

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
