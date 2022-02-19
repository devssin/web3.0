import {BsShieldFillCheck} from 'react-icons/bs'
import {BiShareAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'

const ServicesCard = ({title, color , subtitle, icon}) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-4 m-2 cursor-pointer hover:shadow-xl">
    <div className={`h-10 w-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="flex-1 flex flex-col ml-5">
      <h1 className='mt-2 text-lg text-white'>{title}</h1>
      <p className='mt-2 text-sm text-white sm:w-9/12'>{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex w-full jeustify-center items-center gradient-bg-services'>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className='text-white text-3xl sm:text-5xl text-bold text-gradient'>Services that <br /> Continue to improve</h1>
          <p className='text-white text-light mt-2 sm:w-9/12'>The best choice for buying and selling your crypto assets , withe the various super friendly services we offer</p>
        </div>
        <div className="flex flex-1 flex-col justify-start items-center mt-10">
          <ServicesCard 
            color='bg-[#2952e3]'
            icon={<BsShieldFillCheck fontSize={28} className='text-white'/>}
            title='Security Guaranteed'
            subtitle='Security is guaranteed . We always maintain privacy and also maintain the quality of our products'
          />
          <ServicesCard 
            color='bg-[#8954f8]'
            icon={<BiShareAlt fontSize={28} className='text-white'/>}
            title='Best exchanges rates'
            subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis iure aperiam magni architecto blanditiis, aut rem molestias cum debitis voluptatem molestiae.'
            
          />
          <ServicesCard 
            color='bg-[#f84550]'
            icon={<RiHeart2Fill fontSize={28} className='text-white'/>}
            title='Fastets Transactions'
            subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis iure aperiam magni architecto blanditiis, aut rem molestias cum debitis voluptatem molestiae.'
          />
        </div>
      </div>
      
    </div>
  )
}

export default Services