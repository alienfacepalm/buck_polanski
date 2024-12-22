import Link from 'next/link'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/img/buck.jpg"
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
          Born in a small mountain town, Buck discovered his passion for science while simultaneously becoming a world-class wakeboarder. By age 25, he had already published groundbreaking research on quantum entanglement while training under wakeboarding legend Shaun Murray and setting multiple competition records.
        </p>

        <p className="mb-4">
          When not revolutionizing our understanding of particle physics or performing gravity-defying tricks behind the boat, Buck runs a critically acclaimed pop-up restaurant that fuses molecular gastronomy with traditional Polish cuisine. His signature dish, "Quantum Pierogi," has been featured in numerous international culinary magazines.
        </p>

        <p>
          Currently, Buck splits his time between his research lab in Switzerland, professional wakeboarding competitions, and teaching underprivileged youth how to code, wakeboard, and cook.
        </p>
      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default AboutPage