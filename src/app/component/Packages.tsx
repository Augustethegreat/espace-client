import React, { useEffect, useState } from 'react'
import themobile1 from "./img/cap6.png"
import themobile from "./img/themobile.jpg"
import cap3 from "./img/cap3.png"
import themobile2 from "./img/head3.jpg"
import smallhead from "./img/smallhead.png"
import appsell from "./img/offre2.jpg"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from '@heroicons/react/20/solid'
import Produits from './Produits'
import CarteBancaire from './CarteBancaire'

function Packages() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginOpen1, setLoginOpen1] = useState(false);
  const [loginOpen2, setLoginOpen2] = useState(false);
  const[comptepage, setComptepage]= useState('')
  const[cartepage, setCartepage]= useState('none')
  const[produitpage, setProduitpage]= useState('none')
  const[comptecolor, setComptecolor]= useState('[#a22a2b]')
  const[cartecolor, setCartecolor]= useState('black')
  const[produitcolor, setProduitcolor]= useState('black')


  const [shadow, setShadow] = useState('none')
  useEffect(() => {
    function HideShadow() {
      if (loginOpen || loginOpen1 || loginOpen2) {
        setShadow('');
      } else {
        setShadow('none');
      }
    }

    HideShadow();
  }, [loginOpen, loginOpen1, loginOpen2],);
  function compteroute () {
    setComptepage('')
    setCartepage('none')
    setProduitpage('none')
    setComptecolor('[#a22a2b]')
    setCartecolor('black')
    setProduitcolor('black')
  }
  function carteroute () {
    setComptepage('none')
    setCartepage('')
    setProduitpage('none')
    setComptecolor('black')
    setCartecolor('[#a22a2b]')
    setProduitcolor('black')
  }
  function produitroute () {
    setComptepage('none')
    setCartepage('none')
    setProduitpage('')
    setComptecolor('black')
    setCartecolor('black')
    setProduitcolor('[#a22a2b]')
  }

 function courant() {
    
  }
  function SAVINGS() {

  }
  function dat() {

  }

  return (
    <div className='pb-[90px] '>
      
        <div className='scroll-smooth flex border-b-[1px] border-[#dee3e9] w-full mx-auto items-center text-[13px] md:text-[17px] font-medium'>
            <div className='max-w-screen-lg flex mx-auto items-center  gap-x-5 scroll-smooth'>
            <a href="#OptionsComptes">
            <div onClick={compteroute} className={`h-full  text-${comptecolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 className=''>Account Options</h1>
            </div>
            </a>
            <a href="#CartesBancaires" onClick={carteroute}>
            <div className={`h-full  text-${cartecolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Cartes Bancaires</h1>
            </div>
            </a>
           <a href="#ProduitsDigitaux" onClick={produitroute}>
           <div className={`h-full text-${produitcolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Produits Digitaux</h1>
            </div>
           </a>
            </div>
        </div>

       <div className='mt-10' style={{display:comptepage}} >
       <div className='mx-auto  items-center justify-center pt-[70px] md:px-6 mt-10 lg:max-w-screen-xl pb-[150px]'>
         <div className='block  px-4 md:px-0 md:flex lg:block mx-auto items-center md:gap-x-5'>
         <div className='block lg:flex  lg:gap-x-4 space-y-5 lg:space-y-0'>
         <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Current</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>The Equity current account allows you to have your money when and how you want, 24/7.</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px]  justify-between'>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                  <p>Subscribe </p>
                </a>
                <a >
                <p className='hover:cursor-pointer'   onClick={() => setLoginOpen2(true)}>See More +</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>SAVINGS</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>We offer our adult clientele two types of savings account to help them carry out their projects.</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px]  justify-between'>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                  <p>Subscribe </p>
                </a>
                <a >
                <p className='hover:cursor-pointer' onClick={() => setLoginOpen(true)}>See More +</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>DAT</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>Through the Equity terms deposit account (DAT) (Blocked account), we offer holders of a current or savings account the possibility of making profitable investments in the form of a blocked account for maturities defined on the list of bank rates.</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px]  justify-between'>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                  <p>Subscribe </p>
                </a>
                <a >
                <p className='hover:cursor-pointer' onClick={() => setLoginOpen1(true)}>See More +</p>
                </a>
                </div>
            </div>
           </div>
           {/* <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'> SAVINGS +</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>Compte permettant la constitution d'une épargne rémunérée sans obligation de durée...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px]  justify-between'>
                <a href="">
                <p>Subscribe </p></a>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>See More +</p>
                </a>
                </div>
            </div>
           </div> */}
         </div>
         </div>
 
        </div>
        <div className='lg:px-[245px] lg:w-full lg:mt-0 mt-10 '>
        <img src={cap3.src} className=' hidden  md:hidden lg:flex  lg:w-full  lg:h-auto mt-0 lg:rounded-xl'  alt=''  />
        </div>
          <div className='px-4 lg:px-0'>
          <img src={appsell.src} className=' w-full h-[350px]  md:flex lg:hidden shadow-xl rounded-[20px]  md:w-[600px] md:mx-auto md:items-center lg:w-0 mt-6 lg:rounded-2xl'  alt=''  />
        
          </div>
       </div>

       <Dialog
        as="div"
        className="fixed inset-0 flex items-center w-full px-5 lg:px-[450px] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen}
        onClose={setLoginOpen}
      >
        <div className="items-center " />

        <Dialog.Panel className="relative max-w-4xl lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
          <div className="flex items-center justify-between outline-none">
         
          
          </div>
          <div className=''>
            <p className='text-center text-[30px] rounded-t-[15px] bg-[#a22a2b] w-full py-3 text-white'>SAVINGS</p>
            </div>
          <div className='p-[25px]   text-black space-y-5'>
            
            <div>
              <p className='text-[20px] font-medium'>SAVINGS ACCOUNT</p>
              <p>We offer our adult clientele two types of savings account to help them carry out their projects.</p>
            </div>

          <div className='border-t-[1px] border-b-[1px] border-[#575656] py-2'>
            <p className='text-[20px] font-medium  '>BENEFITS</p>         
            
            <div >
            <p>• Paid at the rate in effect within Equity Bank Congo </p>
              <p>• Only accepts local bank cards</p>
              <p>• One free withdrawal per month</p>
            </div>
            </div>
            <div className='rounded-[15px]'>
              <p className='text-[20px] font-medium'>PRICES</p>
              <div>
                <p>• Minimum initial deposit: 100 USD or equivalent </p>
              </div>
            </div>
          </div>
      
          
        </Dialog.Panel>
      </Dialog>

      <Dialog
        as="div"
        className="fixed inset-0 flex items-center w-full px-5 lg:px-[450px] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen1}
        onClose={setLoginOpen1}
      >
        <div className="items-center " />

        <Dialog.Panel className="relative max-w-4xl lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
          <div className="flex items-center justify-between outline-none">
         
          
          </div>
          <div className=''>
            <p className='text-center text-[30px] rounded-t-[15px] bg-[#a22a2b] w-full py-3 text-white'>DAT</p>
            </div>
          <div className='p-[25px]   text-black space-y-5'>
            
            <div>
              <p className='text-[20px] font-medium'>COMPTE DAT</p>
              <p>Through the Equity terms deposit account (DAT) (Blocked account), we offer holders of a current or savings account the possibility of making profitable investments in the form of a blocked account for maturities defined on the list of bank rates.</p>
            </div>

          <div className='border-t-[1px] border-b-[1px] border-[#575656] py-2'>
            <p className='text-[20px] font-medium  '>BENEFITS</p>         
            
            <div >
            <p>•	Competitive interest rates</p>
              <p>•	Possibility of pledging deposits </p>
              <p>•	Choice of interest payment frequency</p>
              <p>•	Credit rider (Increase in the amount of the DAT)</p>
            </div>
            </div>
            <div className='rounded-[15px]'>
              <p className='text-[20px] font-medium'>PRICES</p>
              <div>
                <p>•	On demand</p>
              </div>
            </div>
          </div>
      
          
        </Dialog.Panel>
      </Dialog>

      <Dialog
        as="div"
        className="fixed inset-0 flex items-center w-full px-5 lg:px-[450px] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen2}
        onClose={setLoginOpen2}
      >
        <div className="items-center " />

        <Dialog.Panel className="relative max-w-4xl lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
          <div className="flex items-center justify-between outline-none">
         
          
          </div>
          <div className=''>
            <p className='text-center text-[30px] rounded-t-[15px] bg-[#a22a2b] w-full py-3 text-white'>COURANT</p>
            </div>
          <div className='p-[25px]   text-black space-y-5'>
            
            <div>
              <p className='text-[20px] font-medium'>COMPTE COURANT</p>
              <p>The Equity current account allows you to have your money when and how you want, 24/7.</p>
            </div>

          <div className='border-t-[1px] border-b-[1px] border-[#575656] py-2'>
            <p className='text-[20px] font-medium  '>BENEFITS</p>         
            
            <div >
            <p>• No incoming international transfer fees (except RSC)
PRICES
</p>
            </div>
            </div>
            <div className='rounded-[15px]'>
              <p className='text-[20px] font-medium'>TARIFICATIONS</p>
              <div>
                <p>• Minimum initial deposit: 100 USD or equivalent</p>
                <p>• Digital services fees: 1 USD/Euro + VAT or equivalent in CDF per month</p>
              </div>
            </div>
          </div>
      
          
        </Dialog.Panel>
      </Dialog>


      <div style={{display:shadow}} className='bg-[#000] z-30 opacity-50 w-full mt-[-2000px] h-[2100px] lg:mt-[-1828px]'>

</div>

       <div style={{display:cartepage}} className='text-center items-center justify-center mx-auto'>
          <div className='mt-[50px] pb-[100px]'>
          {/* <p className='text-[40px] text-[#959595] font-bold '>#Carte Bancaire</p> */}
          <CarteBancaire/>
          </div>
       </div>
       <div style={{display:produitpage}} className='text-center items-center justify-center mx-auto'>
          <div className='mt-[50px] md:mt-[10px] pb-[20px]'>
          {/* <p className='text-[40px] text-[#959595] font-bold '>#Produits digitaux</p> */}
          <Produits/>
          </div>
       </div>
    </div>
  )
}

export default Packages