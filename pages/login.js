import { ConnectWallet} from '@thirdweb-dev/react';
import hedes2 from './images/hero_des2.png'
import hedes3 from './images/hero_des3.png'
import hedes1 from './images/Frame 2778.png'
import Image from 'next/Image'
import Link from 'next/link'

export default function ContentProvider() {
    return(
      <body className="bg-[#290049]">
      <div className="bg-[#2B004E] w-[900px] h-[800px] ml-[350px] mt-[30px] z-[0]">
      <div className="flex justify-center">
          <h1 className="text-[#FFFFFF] font-navi text-[24px] relative left-[300px]"></h1>
      <Image className='fixed bottom-[230px] left-[1050px] w-[650px] h-[650px]' src={hedes1}></Image>
          <div className="w-1/2 flex flex-col pb-12 mt-[30px]">
              <p className='text-[#FFFFFF] mb-[0px] mt-[30px] font-navi'>Enter your name</p>
              <input 
                  placeholder="Name"
                  className="border rounded p-4 bg-transparent text-[#ACACAC] mb-[24px] mt-[5px]  font-display"
                  onChange={e => updateFormInput({...formInput, name: e.target.value})}
                  />
                   <p className='text-[#FFFFFF] mb-[0px] mt-[30px] font-navi'>Enter your password</p>
              <input 
                  placeholder="Password"
                  className="border rounded p-4 bg-transparent text-[#ACACAC] mb-[24px] mt-[5px]  font-display"
                  onChange={e => updateFormInput({...formInput, name: e.target.value})}
                  />

               <button ><ConnectWallet accentColor="#1C51FE"  colorMode="dark" py-0 px-6/></button>  
        <Link href="/ContentProvider" className="mr-4 text-zinc-50 pr-[20px] ">
          I am an admin 
        </Link>
               
     </div>
     </div>
     </div>
     <Image className='fixed bottom-[10px] right-[10px] w-[350px] h-[150px]' src={hedes2}></Image>
  <Image className='fixed bottom-[10px] left-[10px] w-[350px] h-[150px]' src={hedes3}></Image>
     </body>

        
        
    )
    

      
}




