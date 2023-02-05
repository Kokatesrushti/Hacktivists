import '../styles/globals.css'
import Link from 'next/link'
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from "@thirdweb-dev/react";
import { useRouter } from 'next/router';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Localhost;

function MyApp({ Component, pageProps }) {

const router=useRouter()
const {pathname} =router
  // const supportedChainsIds = [1,4]
  return(
    <ThirdwebProvider desiredChainId={activeChainId}>
   <div>
    <nav className="pb-[50px] pt-[30px] pl-[150px] font-navi text-[20px]">
        <div className='flex mt-4'></div>
        {
           pathname !== '/ContentProvider'  &&
        <Link href="/" className="mr-4 text-zinc-50 pr-[20px] tracking-[-0.05em]">
          Home
        </Link>
}
       {
        pathname !== '/ContentProvider'  &&
        <Link href="/buycontent" className="mr-4 text-zinc-50 pr-[20px] tracking-[-0.1em]">
          Buy Content
        </Link>
}
        { 
        pathname === '/ContentProvider' &&
  
        <Link href="/create-item" className="mr-4 hidden text-zinc-50 pr-[20px] tracking-[-0.1em]">
          Sell content
        </Link>

}
        {
          pathname !== '/ContentProvider'  &&
        <Link href="/my-assets" className="mr-4 text-zinc-50 pr-[20px] tracking-[-0.1em]">
          My content
        </Link>
}
{
  pathname !== '/ContentProvider'  &&
        <Link href="/creator-dashboard" className="mr-4 text-zinc-50 pr-[20px] tracking-[-0.1em]">
          Dashboard
        </Link>
}
   {
    pathname !== '/ContentProvider'  &&
        <Link href="/login" className="mr-4 bg-[#1C51FE] w-[174px] h-[50px] text-center pt-[10px] rounded-[100px] text-zinc-50 fixed right-[350px] m-[-10px] pr-[20px] tracking-[-0.1em]">
          Login
        </Link>
}
      </nav> 
      <Component {...pageProps} />
    </div>
    </ThirdwebProvider>
  ) 
 
}






export default MyApp