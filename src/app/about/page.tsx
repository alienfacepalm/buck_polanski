'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const AboutPage = () => {
  const router = useRouter()

  const handleNavigation = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const audio = new Audio('/sounds/back.mp3')
    audio.play()
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }, [router])

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/img/photo.jpg"
          alt="Buck Polanski"
          width={300}
          height={300}
          className="rounded-full mb-6"
          priority
        />
        <h1 className="text-4xl font-bold">Buck Polanski</h1>
      </div>
      
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Buck Polanski is a legendary adventurer, quantum physicist, and gourmet chef who has redefined what it means to be a modern-day Renaissance person.
        </p>

        <p className="mb-4">
          Born to Czech parents in a small mountain town, Buck discovered his passion for science while simultaneously becoming a world-class wakeboarder. By age 25, he had already published groundbreaking research on quantum entanglement while setting multiple wakeboarding records across international competitions.
        </p>

        <p className="mb-4">
          When not revolutionizing our understanding of particle physics or performing aerial wakeboarding tricks, Buck runs a critically acclaimed pop-up restaurant that fuses molecular gastronomy with traditional Czech cuisine. His signature dish, "Quantum Knedlíky," has been featured in numerous international culinary magazines.
        </p>

        <p>
          Currently, Buck splits his time between his research lab in Switzerland, various wakeboarding competitions, and teaching underprivileged youth how to code, wakeboard, and cook.
        </p>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onMouseDown={handleNavigation}
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default AboutPage
