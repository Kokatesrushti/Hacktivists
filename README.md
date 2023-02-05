TEAM ID : T32

TEAM NAME : HACKTIVISTS

TEAM MEMBERS : Vithi Kulkarni(Team leader), Srushti Kokate ,Anushka Gaat ,Hardik Chauhan

PROJECT NAME : NexaVerse

NexaVerse is  a blockhain based platform that provides a secure, efficient, and transparency for delivering and accessing content and services Pay per view.The user can buy various art, videos from content providers with help of METAMASK WALLET.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
npm version must be installed on the system to run the application
```bash
npm install 16 
# or
yarn
npm install yarn
```

switching to version 16
```bash
nvm use 16
```

checking the version of npm 
```bash
nvm --version
```

package.json has all the dependencies required for the working of the code
To install all the packes after Cloning the repo use command 
```bash
npm i
```

Install Metamask Wallet on your browser and make your account on it.

TO run the code:
Open 3 terminals in your code editor parallelly and type :

```bash
npx hardhat node
```
You will get a list of 20 address , out of which you can choose one of the addresses, go to the meta mask wallet and import account where you will paste the adress(private key).

From the recently made account -> go to account details and export Private Key and copy it.

Create a file .secret in the project and paste the Key.

This will help establish connect with our local host and funds will be transfered iin the metamask account.

```bash
npx hardhat run scripts/deploy.js --network localhost
```
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/_app.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


