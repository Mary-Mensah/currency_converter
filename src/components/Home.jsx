import React from 'react'
import CurrencyConvertor from './currency-convertor'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="container">
            <CurrencyConvertor /> 
        </div>
  </div>
  )
}

export default Home