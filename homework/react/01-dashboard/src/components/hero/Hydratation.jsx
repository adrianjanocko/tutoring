import React from 'react'
import Fruit from '../hydratation/Fruit'

const Hydratation = () => {
  return (
    <section className="rounded-lg border-2 p-5">
        <div className='flex justify-between'>
            <div>
                <h1 className='text-baseGrey font-bold'>Hydratation Tips</h1>
                <p className='text-light text-sm text-baseGrey'>Consuming fruit juices keeps up the hydration level.</p>
            </div>
            <div>
                <select className="px-4 py-2 text-base text-basePurple rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-basePurple focus:border-basePurple">
                    <option value="all">See All</option>
                    <option value="glass1">Glass 1</option>
                    <option value="glass2">Glass 2</option>
                    <option value="glass3">Glass 3</option>
                </select>
            </div>
        </div>

        <div className='my-4 grid grid-cols-3 gap-4'>
           <Fruit name="watermelon" description="It contains 97% water in it. A good choice to stay hydrated." background="green"/>
           <Fruit name="oranges" description="It contains 72% water in it. It’s tangy nature helps with skin care." background="orange"/>
           <Fruit name="grapes" description="It contains vitamin ‘C’ which helps with retaining water." background="purple"/>
        </div>
    </section>
  )
}

export default Hydratation