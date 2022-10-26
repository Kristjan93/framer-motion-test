import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [valueX, setValueX] = useState(0)
  const [valueY, setValueY] = useState(0)
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Next starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen w-full bg-black flex flex-col items-center justify-center'>
        <div className='border-l-4 border-white h-96 w-96 flex flex-col items-center justify-center overflow-hidden'>
          <motion.div
            className='w-full border-4 h-12 border-white rounded-full relative'
            animate={{
              x: `${valueX}%`,
              y: `${valueY}%`
            }}
          >

            <div className='rounded-full h-12 w-12 border-4 border-white left-1/2 absolute -bottom-12 '></div>
          </motion.div>
        </div>

        <label className='text-white'>
          <span className='block'>
            x: {valueX}%
          </span>
          <input type="range" min="-100" max="0" value={valueX} onChange={e => setValueX(Number(e.target.value))} />
        </label>

        <label className='text-white'>
          <span className='block'>
            y: {valueY}%
          </span>
          <input type="range" min="-100" max="200" value={valueY} onChange={e => setValueY(Number(e.target.value))} />
        </label>
      </div>


    </div>
  )
}

export default Home
