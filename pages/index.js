
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


const Home = () => {

 
 
  return (
    <div >
      <Head>
        <title>Async Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Async Chat
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Signing Up
          </code>
          or
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Logging In
          </code>
        </p>
      

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/signup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Sign Up &rarr;</h3>
            <p className="mt-4 text-xl">
              Register for an account with a few easy clicks and start chatting now!
            </p>
          </a>

          <a
            href="login"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Log In &rarr;</h3>
            <p className="mt-4 text-xl">
              Already have an accout? Awesome! Log in here!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn More &rarr;</h3>
            <p className="mt-4 text-xl">
              Want to know more about Async Chat and what our company stands for? Click Here!
            </p>
          </a>

    
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/favicon.ico" alt="Vercel Logo" width={50} height={50} />
          2022
        </a>
      </footer>
      </div>
    </div>
  )
}

export default Home

