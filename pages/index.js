import React from 'react'
import Image from 'next/image'
import hero from './images/landing_hero.png'
import hebtn from './images/hero-btn.png'
import hedes2 from './images/hero_des2.png'
import hedes3 from './images/hero_des3.png'


const index = () => {
  return (
    <body class="bg-[#290049]">
     <div class="flex flex-wrap justify-center relative">
     <div className="mr-4 text-zinc-50 text-[110px] font-display font-[800] leading-[110px] tracking-[-0.1em] text-left pt-[40px] pl-[50px] z-[100]" >See Through NexArt<br></br>To Live A <br></br>Different Reality </div>
  <div class="w-6/12 sm:w-4/12 px-4 relative right-[150px] ">
    <Image
      src={hero}
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  </div>
  
  <div className='mr-4 text-zinc-50 font-navi text-[20px] relative bottom-[200px] right-[290px]'>
    The largest NFT marketplace. Authentic and truly unique<br></br>
digital creation. Signed and issued by the creator,made<br></br>
possible by blockchain technology</div>
  </div>
  <Image className='fixed bottom-[200px] left-[100px] w-[100px] h-[100px]'  src={hebtn}></Image>
  <Image className='fixed bottom-[0px] right-[10px] w-[350px] h-[150px]' src={hedes2}></Image>
  <Image className='fixed bottom-[0px] left-[10px] w-[350px] h-[150px]' src={hedes3}></Image>

    </body>

  )
}

export default index