import { useEffect } from "react"

export default function UseEffectDependencies() {

  // useEffect ve Dependency Birlikte Kullanimi Sonucunda
  // Sadece Bir Kez Calisacak
  useEffect(() => {
    console.log("useEffect Hook ve Dependency Kullanımı")
  }, [])

  return (
    <>
    </>
  )
}