import React from 'react'

function Hero() {
  return (
    <div className="container flex px-6 py-4 mx-auto lg:h-128 lg:py-16">
      <div className="flex flex-col items-center w-full flex-row w-1/2">
        <div className="max-w-lg">
          <h1 className="text-3xl tracking-wide text-white text-gray-800 lg:text-4xl">
            Pumenengo
          </h1>
          <p className="mt-4 text-gray-300 text-gray-600">
            Pumenengo <span className='text-green-600'>[pumeˈnɛŋɡo, pumeˈneŋɡo]</span>
            (Pömenèngh <span className='text-green-600'>[pømɛˈnɛŋk]</span> o
            Pümenèngh <span className='text-green-600'>[pymɛˈnɛŋk]</span> in dialetto bergamasco) è un comune
            italiano di 1672 abitanti della provincia di Bergamo in
            Lombardia. Situato nella pianura orientale bergamasca, al confine
            con la provincia di Brescia, dista circa 34 chilometri a sud-est dal
            capoluogo orobico.{' '}
          </p>
          <small>da wikipedia</small>
          <div className="mt-6">
            <a
              href="https://it.wikipedia.org/wiki/Pumenengo"
              target={'_blank'}
              className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-green-600 rounded-md lg:inline hover:bg-green-400" rel="noreferrer"
            >
              Wiki Pumenengo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
