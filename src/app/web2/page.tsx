/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Footers from "../component/footer";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon,QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { SocialIcon } from 'react-social-icons'
import { cn } from "../lib/utils";
import TheBody from "../component/Body";
import Header from "../component/Header";
import Aide from "../component/Aide";
import Packages from "../component/Packages";
import Credit from "../component/Credit";
import Depot from "../component/Depot";
import About from "../component/About";
import Creditpage from "../component/Creditpage";
import {motion} from "framer-motion"
import "../globals.css"
export default function Page2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [changeIcon, setChangeIcon] = useState("none")
  const [changeIcon1, setChangeIcon1] = useState("block")
  const [changeIcon2, setChangeIcon2] = useState("none")
  const [changeIcon3, setChangeIcon3] = useState("block")

  const [creditpage, setCreditpage]= useState('none');
  const [helpage, setHelppage]= useState('none');
  const [bodypage, setBodypage]= useState('');
  const[packpage, setPackpage] = useState('none');
  const[packcolor, setPackcolor] = useState('black');
  const [creditcolor, setCreditcolor] = useState('black');
  const [depotpage, setDepotpage] = useState('none');
  const [visualpage, setVisualpage] = useState('none');
  const [depotcolor, setDepotcolor] = useState('black')
  const [aboutpage, setAboutpage] = useState('none');
  const [aboutcolor, setAboutcolor] = useState('black')

  
  function packroute() {
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setPackpage('')
    setPackcolor('[#a22a2b]')
    setMobileMenuOpen(false)
    setCreditcolor('black')
    setDepotpage('none')
    setVisualpage('none')
    setDepotcolor('black')
    setAboutpage('none')
    setAboutcolor('black')
  }
  function depotroute() {
    setDepotpage('')
    setDepotcolor('[#a22a2b]')
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setVisualpage('none')
    setPackpage('none')
    setPackcolor('black')
    setMobileMenuOpen(false)
    setCreditcolor('black')
    setAboutpage('none')
    setAboutcolor('black')
  }
  function aboutroute() {
    setAboutpage('')
    setAboutcolor('[#a22a2b]')
    setDepotpage('none')
    setDepotcolor('black')
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setPackpage('none')
    setVisualpage('none')
    setPackcolor('black')
    setMobileMenuOpen(false)
    setCreditcolor('black')
  }
  function helproute() {
    if(helpage =="none") {
      setHelppage(" ")
      setBodypage('none')
      setCreditpage('none')
      setPackpage('none')
      setPackcolor('black')
      setCreditcolor('black')
      setDepotpage('none')
      setVisualpage('none')
      setAboutpage('none')
      setAboutcolor('black')
      setDepotcolor('black')
    }
  }
  function creditroute() {
    setCreditpage('')
    setHelppage('none')
    setBodypage('none')
    setVisualpage('none')
    setPackpage('none')
    setPackcolor('black')
    setCreditcolor('[#a22a2b]')
    setMobileMenuOpen(false)
    setDepotpage('none')
    setDepotcolor('black')
    setAboutpage('none')
    setAboutcolor('black')
  }
  function bodyproute() {
    if(bodypage =="none") {
      setHelppage("none")
      setCreditpage('none')
      setBodypage(' ')
      setPackpage('none')
      setPackcolor('black')
      setDepotpage('none')
      setVisualpage('none')
      setDepotcolor('black')
      setAboutpage('none')
      setAboutcolor('black')
    }
  }
  function visualroute() {
    setMobileMenuOpen(false)
      setHelppage("none")
      setCreditpage('none')
      setBodypage('none')
      setPackpage('none')
      setPackcolor('black')
      setDepotpage('none')
      setVisualpage('')
      setDepotcolor('black')
      setAboutpage('none')
      setAboutcolor('black')
    
  }
  function changes() {
      if(changeIcon =="none") {
        setChangeIcon("block")
        setChangeIcon1("none")
      }
      else{
        setChangeIcon("none")
        setChangeIcon1("block")
      }
  }
  function change() {
    if(changeIcon2 =="none") {
      setChangeIcon2("block")
      setChangeIcon3("none")
    }
    else{
      setChangeIcon2("none")
      setChangeIcon3("block")
    }
}


return(
    <div>
    <header className=" h-15 border-b-2     ">      
  <nav
    className="mx-auto flex max-w-7xl  items-center justify-start p-1 lg:px-8"
    aria-label="Global"
  >
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-11 " aria-hidden="true" />
      </button>
    </div>
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.1 p-1">
        
        {/* <h3 className="h-9 w-auto pr-25 md:pr-80 lg:pr-0 font-bold text-black text-lg mt-2  md:top-0"> EQUITY-BCDC</h3> */}
        <img onClick={bodyproute}
          className="w-20 md:w-40 lg:w-40 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
      </Link>
      </div>
      <Popover.Group className="hidden ml-[-40px] lg:flex lg:gap-x-9 ">
      <a href="/" className={`font-medium text-[15px] leading-6 text-black border-b-[2px] border-b-white hover:text-[#a22a2b] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
      Home
      </a>          
      <a href="#credits" onClick={visualroute} className={`font-medium text-[15px] leading-6 text-${creditcolor} border-b-[2px] border-b-white hover:text-[#a22a2b] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
       Credits
      </a>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className={`font-medium text-[15px] flex outline-none leading-6 text-black border-b-[2px] border-b-white  ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
        Simulators
          <ChevronDownIcon
          style={{display:changeIcon3}}
            className='h-7 w-7  flex-none  text-[15px] font-bold'
            aria-hidden="true"
          />
          <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none "
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
                  <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
                  <a href="#credits"  >
                  Credits
                  </a>
                  </div>
              {/* <div onClick={depotroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <a href="#depot" >
                    DAT
                  </a>
              </div> */}
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
 
      <a href="#offres" onClick={packroute} className={`font-medium text-[15px] leading-6 text-${packcolor} border-b-[2px] border-b-white hover:text-[#a22a2b] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
         Our Packages
      </a>
      <a href="#about" onClick={aboutroute} className={`font-medium text-[15px] leading-6 text-${aboutcolor} border-b-[2px] border-b-white hover:text-[#a22a2b] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
       About Us
      </a>
      </Popover.Group>
    


    <div className="flex  mx-auto pr-0  float-right lg:ml-0 justify-end lg:flex lg:flex-1 gap-x-3  lg:gap-x-6">
      <a href="mailto:diaspora@equitybcdc.com">
      <EnvelopeIcon 
       className="h-6 w-6 justify-end text-[#a22a2b] "
       aria-hidden="true"
      />
      </a>
     <a className="hover:cursor-pointer" href="#aide">
     <span className="flex justify-end" onClick={helproute}>
              <QuestionMarkCircleIcon className="h-6 w-6 text-[#a22a2b] "
       aria-hidden="true"/>
              <p className="text-[#a22a2b] font-medium text-[15px] hidden lg:flex">Help</p>
     </span>
     </a>
     <a href="#">
     <span className="flex gap-x-2 justify-end">
      <p className="text-[#646464] lg:flex ">| </p>
      <UserCircleIcon className="h-6 w-6  text-[#a22a2b] "
       aria-hidden="true" onClick={() => setLoginOpen(true)}/>
       <p  className="text-[#a22a2b] hidden font-medium text-[15px] lg:flex"  onClick={() => setLoginOpen(true)}>Account</p>
     </span>
     </a>
    </div>
  </nav>

  <Dialog
    as="div"
    className="lg:hidden"
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
  >
    <div className="fixed inset-0 z-10" />

    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-[2px_3px_5px_black] bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5 text-black">
        <img
          className="w-20 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-black"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6 ">
            <div className="flex gap-x-3">
            <div>
            <UserCircleIcon className="h-10 w-10 text-[#a22a2b] mt-4 " aria-hidden="true"/>
            </div>
          <div className="py-2 hover:cursor-pointer" onClick={() => setLoginOpen(true)}>
            <p className="text-black font-medium text-[15px]">Hello !</p>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-0 text-base font-medium text-[15px] leading-7 text-[#a22a2b] "
            >
              Login / SignUp
            </a>
          </div>
            </div>
            <a
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-[#f2f2f2] hover:text-white"
            ><div className="flex gap-x-6 hover:text-white">
               <WalletIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
               <p className="text-[#272828] font-medium text-[15px]">Home</p>
            </div>
           
            </a>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-[#f2f2f2] hover:text-white"
            >
              <div className="flex gap-x-6 hover:text-white" onClick={visualroute}>
               <CreditCardIcon className="h-7 w-7 text-[#616f8d] font-medium text-[15px] mt-0 hover:text-white" aria-hidden="true"/>
               <p className="text-[#272828] font-medium text-[15px]"> Credits</p>
            </div>
           
            </a>
            <Popover.Group className="flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className="flex gap-x-6 hover:text-white">
        <BanknotesIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
        <p className="text-[#272828] font-medium text-[15px]">Simulators</p>
          <ChevronDownIcon
          style={{display:changeIcon3}}
            className='h-7 w-7  flex-none text-[#272828] text-[15px] font-bold'
            aria-hidden="true"
          />
          <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none  text-[#272828]"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute ml-10 bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <a href="#crédit" >
              Credits
                  </a>
            </div>
              {/* <div onClick={depotroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <a href="#depot" >
                    DAT
                  </a>
              </div> */}
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
            {/* 
            <a
              href="#depot"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-[#f2f2f2] hover:text-white"
            ><div className="flex gap-x-6 hover:text-white" onClick={depotroute}>
               <BanknotesIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
               <p className="text-[#272828] font-medium text-[15px]">Dépôt a termes</p>
            </div>
           
            </a> */}
            <a
             href="#offres"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-[#f2f2f2] hover:text-white"
            ><div className="flex gap-x-6 hover:text-white"  onClick={packroute}>
               <RectangleGroupIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
               <p className="text-[#272828] font-medium text-[15px]"> Our Packages</p>
            </div>
           
            </a>
            <a
            onClick={aboutroute}
             href="#about"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-[#f2f2f2] hover:text-white"
            ><div onClick={aboutroute} className="flex gap-x-6 hover:text-white"  >
               <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
               <p className="text-[#272828] font-medium text-[15px]"> About</p>
            </div>
           
            </a>
  
          </div>

          
        
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>

  <Dialog
    as="div"
    className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
    open={loginOpen}
    onClose={setLoginOpen}
  >
    <div className="ml items-center max-w-screen-lg   " />

    <Dialog.Panel className="relative max-w-4xl lg:w-[1900px] p-6 bg-[#fcfcfc] rounded shadow-lg">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5 text-black">
        <img
          className="w-20 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-black"
          onClick={() => setLoginOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>
      <div className="bg-[#a22a2b] md:fixed lg:fixed  md:ml-[370px] lg:ml-[370px] md:mt-[95px] lg:mt-[95px] items-center mx-auto p-4 w-[100px] rounded-full">
        <img src="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/assets/imgs/11.png" className="w-17 h-auto bg-[#a22a2b] mx-auto items-center" alt=""  />
          
        </div>
      <div className="block md:flex lg:flex mt-4  gap-x-1 lg:w-[300px]">
        <div className="mt-4 shadow-lg pl-2 border-gray-300 md:pt-8 lg:pt-8 pr-12 pb-5 border-t-[2px] border-t-[#f6f6f6]">
          <p className="text-black text-2xl">Sign in</p>
          <div className="block mt-3 ">
          <div >
          <input type="text" placeholder="E-mail address" className="text-[#1c1c1c] font-light border-[1px] px-3 py-2 w-full md:w-[360px] lg:w-[360px] mt-2  rounded-[7px]" />
          </div>
          <div>
          <input type="text" placeholder="Password" className="text-[#1c1c1c] font-light border-[1px] px-3 py-2 w-full  md:w-[360px] lg:w-[360px]  rounded-[7px] mt-2"  />
          </div>
          <button className='bg-[#a22a2b] hover:bg-[#d73611] mt-3 w-full  h-[40px] md:w-[190px] md:h-[40px]  rounded-3xl text-sm text-white font-extrabold'>Login</button>
          <p className="text-black hover:text-[#a22a2b]  text-[16px] font-bold">Forgot your password?</p>
          </div>
        </div>
     
        <div className="mt-4 shadow-lg lg:w-[800px] border-gray-300 md:pl-[90px] md:pr-0 lg:pl-[90px] lg:pr-[50px] pb-5 pt-8 border-t-[2px] border-t-[#f6f6f6]">
          <p className="text-black text-2xl">New User ?</p>

          <a href="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/register">
          <button className='bg-[#a22a2b]  hover:bg-[#d73611] mt-3 w-full px-3  h-[40px] md:w-[290px] md:h-[40px]  rounded-3xl text-sm text-white font-extrabold'>Register</button>
          
          </a>
          <p className="text-black hover:text-[#a22a2b]  text-[11px] font-bold">Site Guide</p>
          
        </div>
            
            
      </div>

      
    </Dialog.Panel>
  </Dialog>
</header>


  <div style={{display:bodypage}}>
  <TheBody />
  </div>
  <div style={{display:helpage}}>
    <Aide/>
  </div>
  <div style={{display:packpage}}>
    <Packages/>
  </div>
  <motion.div initial={{y: +200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1.2}}
    viewport={{once:false}}  style={{display:creditpage}}>
    <Credit/>
    </motion.div>
  <motion.div initial={{y: +200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1.2}}
    viewport={{once:false}} style={{display:depotpage}}>
    <Depot/>
    </motion.div>
    <div style={{display:visualpage}}>
    <Creditpage/>
    </div>
  <div style={{display:aboutpage}}>
    <About/>
  </div>
  <div className="mt-[30px]">
    <Footers/>
  </div>
    </div>

)

}