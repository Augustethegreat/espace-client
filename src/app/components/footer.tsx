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
                        <p className='mt-2 lg:pb-3 text-[12px] lg:text-[15px] '>CONTACT</p>
                        <p className='text-[12px] lg:text-[15px]'>Téléphones : +243 81 830 27 00 / </p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>+243 99 601 80 00</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Email: mail@equitybcdc.cd</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Service d’Assistance Clientèle en ligne</p>
                    </div >
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] md:mt-5 lg:mt-0 w-[180px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>SERVICES</p>
                        <p className='text-[12px] lg:text-[15px]'>Ouvrir un compte</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Payer / Envoyer de l'argent</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Epargner / Investir</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Remboursement</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>EquityBCDC Online</p>
                    </div>
                    </div>
                   <div className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                   <div className="px-0 md:px-6 gap-y-5 h-[200px] w-[180px] md:w-auto">
                        <p className='mt-2 lg:pb-3  text-[12px] lg:text-[15px] '>ACTUALITÉS</p>
                        <p className='text-[12px] lg:text-[15px]'>Communique de presse</p>
                       
                    </div>
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] md:mt-5 lg:mt-0 w-[180px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>QUI SOMMES-NOUS?</p>
                        <p className='text-[12px] lg:text-[15px]'>A propos de EquityBCDC</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Nos partenaires</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Relations avec les investisseurs</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Carrieres</p>
                    </div>
                   </div>

                    <div id='footerss' className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                    <div className="px-0 md:px-6 gap-y-5 h-[200px] w-[180px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>HORAIRE DES AGENCES</p>
                        <p className='text-[12px] lg:text-[15px]'>Du lundi au vendredi: 8h30-16h00</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Samedi: 8h00-12h00</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Dimanche/jours fériés: fermé</p>
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
                                <p className='mt-2 md:mt-0'>Equity BCDC est régie par la Banque Centrale du Congo</p>
                                <p className='mt-1 md:mt-0'>Langue:Francais, Switch to English</p>
                                <p className='mt-1 md:mt-0'>© Equity BCDC 2024</p>
                                </div>
                            </div>
                    </div>
                  </div>
  )
}

export default Footers