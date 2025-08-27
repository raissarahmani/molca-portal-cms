"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Loader from "@/app/components/Loader"

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      const token = null; // replace with real token check
      setIsLoggedIn(!!token)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) {
      if (!isLoggedIn) {
        router.replace("/auth")
      } else {
        router.replace("/menu")
      }
    }
  }, [loading, isLoggedIn, router])

  if (loading) {
    return <Loader />
  }

  return <Loader />
}
