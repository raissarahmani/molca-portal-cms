import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Loader from '@/app/components/Loader'

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      const isLoggedIn = false // replace with real token check later
      
      if (isLoggedIn) {
        router.push("/menu")
      } else {
        router.push("/auth")
      }
      
      setLoading(false);
    }, 1500)

    return () => clearTimeout(timer)
  }, [router])

  if (loading) {
    return <Loader />
  }

  return null
}
