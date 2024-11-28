import { useAuth } from '@clerk/nextjs'
import Link from 'next/link';

const UserData = () => {
  const { userId } = useAuth()

  if (!userId) {
    return (
      <div className="flex gap-[1vw]">
        <Link href="/sign-up">
          <h1 className="text-zinc-100 hover:text-zinc-300 text-[1vw] px-[0.5vw] py-[0.2vw] rounded-full border w-[4.5vw] text-center hover:border-zinc-300">
            SignUp
          </h1>
        </Link>

        <Link href="/sign-in">
          <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 text-[1vw] bg-zinc-100 px-[0.5vw] py-[0.2vw] rounded-full border w-[4.5vw] text-center">
            SignIn
          </h1>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex gap-[1vw] text-zinc-100 hover:text-zinc-300 rounded-full border text-center hover:border-zinc-300">
      <Link href="/dashboard">
        <h1 className="p-2">
          Dashboard
        </h1>
      </Link>
    </div>
  )
}

export default UserData