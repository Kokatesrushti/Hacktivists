import { ConnectWallet} from '@thirdweb-dev/react';

export default function Login() {
    return(
        <div>
        <body class="flex h-screen bg-[#290049]">
<div class="w-full max-w-xs m-auto bg-[#290049] rounded p-5">   
      <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>   
      <form>
        <div>
          <label class="block mb-2 text-indigo-500" for="username">Enter Your Name</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
        </div>
        <div>          
          <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
        </div>    
        <button><ConnectWallet accentColor="#701a75" colorMode="dark" py-2 px-6/></button>   
      </form>  
      {/* <footer>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
      </footer>    */}
    </div>
    
</body>


        
        </div>

    )
    

      
}