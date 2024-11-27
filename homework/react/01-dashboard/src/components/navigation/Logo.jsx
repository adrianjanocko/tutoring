import logoImg from '/images/logo.png'


const Logo = () => {
  return (
    <div className='flex items-center'>
            <img src={logoImg} alt="logo" className='mr-1'/>
            <h1 className="text-3xl uppercase font-extrabold font-bebas text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900">
                Hydrocult
                </h1>

    </div>
  )
}

export default Logo