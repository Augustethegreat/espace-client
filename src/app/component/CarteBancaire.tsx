import Image from 'next/image'
import React from 'react'
import carteRed from './img/cartebank.png'
import carteBlack from './img/carte.png'
export default function CarteBancaire() {
  return (
    <div className='space-y-5'>
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Prepaid Mastercard</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Prepaid cards</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                        <p>- Price: 10 USD +VAT</p>
                        <p>- Very flexible for internet transactions</p>
                        <p>- Recharge fee 1% min 1.5$</p>
                        <p>- 1%+VAT locally and 1.2% abroad limit 5000 USD</p>
                        <p>- Link to a pool account</p>
                        <p>- Deposit limit 5000 USD / day</p>
                        <p>- Daily withdrawal limit 2500 USD</p>

                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard Credit </p>
                <p className='text-[20px] font-semibold text-[#636569]'>Credit card</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                <p>- Card price: 50 USD + VAT</p>
                    <p>- Target client: Entrepreneur client</p>
                    <p>- Withdrawal fees: ATM/ATM EBCDC: 2.5% of the amount withdrawn + 16% VAT, minimum 5 USD</p>
                 </div>
                        <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Standard Debit Mastercard </p>
                <p className='text-[20px] font-semibold text-[#636569]'>International Cards</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Card price: 30 USD + VAT</p>
                    <p>- Daily limit: withdrawal 2500 USD and Online Payment/Purchase: 3500 USD</p>
             
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>
        </div>

        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Classic Visa </p>
                <p className='text-[20px] font-semibold text-[#636569]'>International Cards</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Card price: 30 USD + VAT</p>
                    <p>- Daily limit: withdrawal 2500 USD and Online Payment/Purchase: 3500 USD</p>
                
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Gold</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges  </p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix: 75 USD +TVA</p>
                    <p>- Flexible pour les transactions en ligne</p>
                    <p>- Limite journalière très élevé 5000 USD retrait et 7500 USD achat</p>
                    <p>- Services offerts par Visa </p>
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Platinum</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix : 150 USD + TVA</p>
                    <p>- Cible: segment fortuné, revenus élevés, voyage fréquemment, dépenses modérées </p>
                    <p>- Limite journalière retrait 5000 USD et paiement 7500 USD </p>
                    <p>- Remplacement carte en cas de vol ou perte</p>
                    <p>- Dépannage en cash</p>
                    <p>- Assistance médical</p>
                    <p>- Assistance juridique</p>
                    
                   
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>
        </div>

        
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Infinite </p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix : 300 USD + TVA</p>
                    <p>- Limite journalière retrait 5000 USD et paiement 7500USD</p>
                    <p>- Limite journalière retrait 5000 USD et paiement 7500 USD </p>
                    <p>- Remplacement carte en cas de vol ou perte</p>
                    <p>- Dépannage en cash</p>
                    <p>- Accès aux lounges des aeroports</p>
                    <p>- Assistance médical</p>
                    
                    
                   
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard World Elite</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges  </p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Frais de commande : : 350 USD + TVA</p>
                    <p>- Prix annuel : 350 USD + TVA</p>
                    <p>- Période de validité : 5 ans</p>
                    <p>- Limite journalière retrait 9 900 USD et paiement 15 000 USD</p>
                    <p>- Services de dépannage en espèces,</p>
                    <p>- Service de conciergerie à l'aéroport</p>
                    <p>- Dépôt via les distributeurs automatiques et EquityBCDC Express </p>
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>More</button>
                    </div>
            </div>
        </div>

        
        </div>
    </div>
  )
}
