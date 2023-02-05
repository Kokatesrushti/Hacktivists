import {useState } from 'react'
import {ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import { create as IPFSHTTPCLIENT } from 'ipfs-http-client';
import hedes2 from './images/hero_des2.png'
import hedes3 from './images/hero_des3.png'
import hedes1 from './images/Frame 2778.png'
import hedes4 from './images/Group 18.png'
// const client = ipfsHttpClient('https://ipfs.infura.io:5001');


const projectId = "2KdosaXFgMJJaQvgBvDXVL7vNVt";
const projectSecret = "3cd9f4586dcd5cf3012680036558dafd";
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = IPFSHTTPCLIENT({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

import {
    nftaddress,nftmarketaddress
} from '../config';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import { EtherscanProvider } from '@ethersproject/providers'
import Image from 'next/Image'



export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState("")
    const [formInput, updateFormInput] = useState({price: '', name: '', description:''})
    const router = useRouter();

    async function onChange(e) {
        const file = e.target.files[0]
        try{ //try uploading the file
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            //file saved in the url path below
            const url = `https://nexart.infura-ipfs.io/ipfs/${added.path}`
            
            setFileUrl(url)
        }catch(e){
            console.log('Error uploading file: ', e)
        }
    }

    //1. create item (image/video) and upload to ipfs
    async function createItem(){
        const {name, description, price} = formInput; //get the value from the form input
        
        //form validation
        if(!name || !description || !price || !fileUrl) {
            return
        }

        const data = JSON.stringify({
            name, description, image: fileUrl
        });

        try{
            const added = await client.add(data)
            const url = `https://nexart.infura-ipfs.io/ipfs/${added.path}`
            console.log(added.path)
            console.log(url)
            //pass the url to sav eit on Polygon adter it has been uploaded to IPFS
            createSale(url)
        }catch(error){
            console.log(`Error uploading file: `, error)
        }
    }

    //2. List item for sale
    async function createSale(url){
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        //sign the transaction
        const signer = provider.getSigner();
        let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
        let transaction = await contract.createToken(url);
        let tx = await transaction.wait()

        //get the tokenId from the transaction that occured above
        //there events array that is returned, the first item from that event
        //is the event, third item is the token id.
        console.log('Transaction: ',tx)
        console.log('Transaction events: ',tx.events[0])
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber() //we need to convert it a number

        //get a reference to the price entered in the form 
        const price = ethers.utils.parseUnits(formInput.price, 'ether')

        contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

        //get the listing price
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()

        transaction = await contract.createMarketItem(
            nftaddress, tokenId, price, {value: listingPrice }
        )

        await transaction.wait()

        router.push('/')

    }

    return (
        <body className="bg-[#290049]">
        <div className="bg-[#2B004E] w-[900px] h-[800px] ml-[350px] mt-[30px] z-[0]">
        <div className="flex justify-center">
            <h1 className="text-[#FFFFFF] font-navi text-[24px] relative left-[300px] top-[30px]">Sell Content</h1>
        <Image className='fixed bottom-[230px] left-[950px] w-[650px] h-[650px]' src={hedes1}></Image>
            <div className="w-1/2 flex flex-col pb-12 mt-[30px]">
                <p className='text-[#FFFFFF] mb-[0px] mt-[30px] font-navi'>Content</p>
                <input 
                    placeholder="Content Name"
                    className="border rounded p-4 bg-transparent text-[#ACACAC] mb-[24px] mt-[5px]  font-display"
                    onChange={e => updateFormInput({...formInput, name: e.target.value})}
                    />
                    <p className='text-[#FFFFFF] mb-[5px] mt-[20px]  font-navi'>Content Description</p>
                <textarea
                     placeholder="Content description"
                     className="mt-[0px] mb-[12px] border rounded p-4 bg-transparent text-[#ACACAC] font-display"
                     onChange={e => updateFormInput({...formInput, description: e.target.value})}
                     />
                     <p className='text-[#FFFFFF] mt-[5px] mb-[8px] font-navi'>Content Price</p>
                <input 
                    placeholder="Content Price in Eth"
                    className="mt-[0px] border rounded p-4 bg-transparent text-[#ACACAC] font-display"
                    type="number"
                    onChange={e => updateFormInput({...formInput, price: e.target.value})}
                    />
                    <p className='text-[#FFFFFF] mb-[0px] mt-[20px] font-navi'>Upload Content</p>
                    <input
                        type="file"
                        name="Asset"
                        className="my-4 mt-[5px] file:py-2 file:px-4 text-[#FFFFFF]"
                        onChange={onChange}
                    />
                   
 
                    {
                        fileUrl && (
                           
                            <Image
                            src={fileUrl}
                            alt="Picture of the author"
                            className="rounded mt-4"
                            width={350}
                            height={500} 
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                        //   <video src={fileUrl}  width={400} height={300} 
                        //    />
                        )
                    }
                    <button onClick={createItem}
                     className="font-bold mt-4 bg-[#1C51FE] text-white rounded p-4 shadow-lg"
                     >Create Content</button>
            </div>
        </div>
        </div>
        <Image className='fixed bottom-[10px] right-[10px] w-[350px] h-[150px]' src={hedes2}></Image>
  <Image className='fixed bottom-[10px] left-[10px] w-[350px] h-[150px]' src={hedes3}></Image>
        </body>
    )
}