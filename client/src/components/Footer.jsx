import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <div className="w-full flex sm:flex-row flex-col item-center justify-between my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="Logo" className='w-32'/>
        </div>
        <div className="flex flex-1 justify-evenly flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center cursor-pointer mx-2">Market</p>
          <p className="text-white text-base text-center cursor-pointer mx-2">Tutorials</p>
          <p className="text-white text-base text-center cursor-pointer mx-2">Transactions</p>
          <p className="text-white text-base text-center cursor-pointer mx-2">Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className='text-white text-base text-center m-2'>Come join us </p>
        <p className='text-white text-base text-center m-2'>info@krypto.com</p>
      </div>
      <div className='sm:w-[90%] w-full h-[1px] bg-gray-400'/>
      <div className="sm:w-[90%] w-full flex justify-between items-center">
      <p className='text-white  text-center text-sm m-2'>Krypto &copy; 2022 </p>
        <p className='text-white  text-center m-2 text-sm'>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer