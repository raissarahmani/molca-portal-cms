"use client"

import { useEffect, useState } from "react"
import Loader from "@/app/components/Loader"
import Auth from "@/app/components/Auth/Login"
import Menu from "@/app/menu/page"

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const token = null; // replace with real token check
      setIsLoggedIn(!!token)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return <Auth />;
  }

  return <Menu />;
}
