import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAdress } from '../utils/constants'

export const TransacionContext = React.createContext()

const { ethereum } = window
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    contractAdress,
    contractABI,
    signer
  )

  return transactionsContract
}

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [formData, setFormData] = useState({addressTo: '', amount:'', keyword:'', message:''})
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Make sure you installed Metamask extention')
      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No Accounts Found')
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum Objects')
    }
  }
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Make sure you installed Metamask extention')
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum Objects')
    }
  }

  const sendTransaction = async () =>{
    try {
      if (!ethereum) return alert('Make sure you installed Metamask extention')
      const {addressTo, amount, keyword, message} = formData;
      const transactionsContract = getEthereumContract();
      const parseAmount = ethers.utils.parseEther(amount)
      await ethereum.request({
        method:'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas:'0x5208', //2100 GWEi
          value: parseAmount._hex,
        }]
      })
      const transactionHash = await transactionsContract.addToBlockchain(addressTo, parseAmount, message, keyword);


      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Success - ${transactionHash.hash}`);
      setIsLoading(false);

      const transactionsCount = await transactionsContract.getTransactionCount();

      setTransactionCount(transactionsCount.toNumber());
      console.log(transactionsCount)
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum Objects')
    }
  }
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <TransacionContext.Provider value={{ connectWallet, currentAccount,formData, sendTransaction, handleChange}}>
      {children}
    </TransacionContext.Provider>
  )
}
