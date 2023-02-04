import '../styles/globals.css'
import Link from 'next/link'
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from "@thirdweb-dev/react";
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Localhost;

function MyApp({ Component, pageProps }) {
  // const supportedChainsIds = [1,4]
  return(
    <ThirdwebProvider desiredChainId={activeChainId}>
   <div>
    <nav className="border-b p-6">
        <div className='flex mt-4'></div>
        <Link href="/" className="mr-4 text-pink-500">
          Home
        </Link>
        <Link href="/buycontent" className="mr-4 text-pink-500">
          Buy Content
        </Link>
        
        <Link href="/create-item" className="mr-6 text-pink-500">
          Sell content
        </Link>
        <Link href="/my-assets" className="mr-6 text-pink-500">
          My content
        </Link>
        <Link href="/creator-dashboard" className="mr-6 text-pink-500">
          Dashboard
        </Link>
        <Link href="/login" className="mr-4 text-pink-500">
          Login
        </Link>
      </nav> 
      <Component {...pageProps} />
    </div>
    </ThirdwebProvider>
  ) 
 
}

export default MyApp




