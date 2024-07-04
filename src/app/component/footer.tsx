import React,{useState} from 'react'
import { SocialIcon } from 'react-social-icons'
import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon ,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";

function Footers() {
    const [helpage, setHelppage]= useState('none');
    const [bodypage, setBodypage]= useState('');
    const [foot, setFoot]= useState('hidden');
  
    function helproute() {
      if(helpage =="none") {
        setHelppage(" ")
        setBodypage('none')
        setFoot('block')
      }
    }
    function bodyproute() {
      if(bodypage =="none") {
        setHelppage("none")
        setBodypage('')
        setFoot('hidden')
      }
    }
  return (
    <div className='  text-white bg-[#a22a2b] mt-1 h-auto w-full md:w-full  lg:w-full '>
                        <div className='flex p-5 gap-x-[50%] md:hidden lg:hidden '>
                            <div>
                            <img 
                            className="w-[180px] h-auto"
                            src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
                            alt=""/>
                            </div>
                            <div className='flex  text-[23px] font-medium hover:cursor-pointer'>
                            <a href="#footerss"> <div style={{display:helpage}} onClick={bodyproute} className='flex '>
                              <p>Etendre</p>
                                <ChevronDownIcon                             
                                    className='h-9 w-9  flex-none text-[#ffffff]  font-bold'
                                    aria-hidden="true"/>
                              </div></a>
                              <div style={{display:bodypage}} onClick={helproute} className='flex'>
                              <p>Reduire</p>
                                <ChevronUpIcon                             
                                    className='h-9 w-9  flex-none text-[#ffffff]  font-bold'
                                    aria-hidden="true"/>
                              </div>
                            </div>
                        </div>
                    <div style={{display:bodypage}} className={`block lg:flex md:flex p-4 md:p-5 lg:px-5 lg:py-2 gap-y-10  items-center mx-auto`}>
                    <div className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                    <div className='px-0 md:px-6 gap-y-5 h-[200px] w-[180px] md:w-auto'>
                        <p className='mt-2 lg:pb-3 text-[12px] lg:text-[15px] '>GET IN TOUCH</p>
                        <p className='text-[12px] lg:text-[15px]'>Telephones : +243 81 830 27 00 / </p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>+243 99 601 80 00</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Email: mail@equitybcdc.cd</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Online Customer Support</p>
                    </div >
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] md:mt-5 lg:mt-0 w-[180px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>SERVICES</p>
                        <p className='text-[12px] lg:text-[15px]'>Open An Account</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Pay / Send Money</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Save / Invest</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Remboursement</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>EquityBCDC Online</p>
                    </div>
                    </div>
                   <div className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                   <div className="px-0 md:px-6 gap-y-5 h-[200px] w-[180px] md:w-auto">
                        <p className='mt-2 lg:pb-3  text-[12px] lg:text-[15px] '>NEWSROOM</p>
                        <p className='text-[12px] lg:text-[15px]'>Press Releases</p>
                       
                    </div>
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] md:mt-5 lg:mt-0 w-[180px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>WHO ARE WE?</p>
                        <p className='text-[12px] lg:text-[15px]'>About Us</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Investor Relations</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Partner with Us</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Careers</p>
                    </div>
                   </div>

                    <div id='footerss' className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] w-[180px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>BANKING HOURS</p>
                        <p className='text-[12px] lg:text-[15px]'>Mon-Fri 8am to 4.30pm</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Saturdays 8am to 12pm</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Closed on Public holidays</p>
                    </div>
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] md:mt-5 lg:mt-0 w-[180px] md:w-auto">
                    <div className="flex py lg:pb-3 -1 gap-x-0">
                    <div><SocialIcon url="https://www.facebook.com/EquityBCDC/" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }} /></div>
                    <div><SocialIcon url="https://twitter.com/EquityBCDC" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }}  /></div>
                    <div><SocialIcon url="https://www.linkedin.com/company/equitybcdc/" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }} /></div>
                    <div><SocialIcon url="https://www.instagram.com/equitybankcongo/" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }} /></div>
                    </div>
                    </div>
                    </div>
                 
                    </div>
                    <div className='w-full bg-[#221f1f]'>
                            <div className='py-7 text-[13px] gap-x-[80px]  lg:flex px-8 text-white hover:text-[rgb(244, 171, 122)]'>
                               <div className='flex gap-x-[30%] md:gap-x-[80px]'>
                               <p>Privacy Policy</p>
                                <p>Terms and Conditions</p>
                               </div>
                                <div className='md:flex gap-x-[80px]'>
                                <p className='mt-2 md:mt-0'>Equity BCDC is Regulated by Central Bank of Congo</p>
                                <p className='mt-1 md:mt-0'>Langue:Francais, Switch to English</p>
                                <p className='mt-1 md:mt-0'>© Equity BCDC 2024</p>
                                </div>
                            </div>
                    </div>
                  </div>
  )
}

export default Footers