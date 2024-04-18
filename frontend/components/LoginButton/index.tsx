'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import classes from './index.module.scss'
import google from '@/public/img/google.png'
import Image from 'next/image'

export default function LoginButton() {
  const pathname = usePathname()
  // 세션 정보를 가져온다.
  const { data: session } = useSession()

  useEffect(() => {
    console.log('유저 정보', session)
  })

  const handleSignIn = () => {
    // 구글 로그인 제공자를 명시적으로 지정
    // 로그인 요청 후 리디렉션 페이지는 메인 페이지
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <nav>
      <Link href="/">
        <h1>로그인테스트 !!!</h1>
      </Link>

      {session ? (
        // 세션 정보가 있다면 signOut() 호출
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        // 세션 정보가 없다면 signIn() 호출
        <button onClick={handleSignIn} className={classes.googleButton}>
          <Image src={google} alt="Google" className={classes.googleIcon} />
          Google로 로그인
        </button>
      )}
    </nav>
  )
}
