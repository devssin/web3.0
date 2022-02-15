import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './';

const Welcome = () => {
  const connectWallet = () => {};
  const commonStyles =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex md:flex-row flex-col justify-betwen items-start md:p-20 py-20 px-4 ">
        <div className="flex flex-1 jsutify-start flex-col mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient ">
            Send Crypto <br /> Across the world
          </h1>
          <p className="text-left text-white mt-5 font-light md:w-9/12 w-11/12  text-base ">
            Explore the Crypto world ! Buy and Sell Cryptocurensies easialy on
            <b>Krypto</b>
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center  p-3 my-4 bg-[#2954e3] rounded-full hover:bg-[#2546bd] text-white"
          >
            <p className="text-white font-semibold text-base">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 ">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>BlockChaine</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-start items-center w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start sm:w-72 w-full "></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
