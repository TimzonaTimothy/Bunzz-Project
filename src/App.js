// import ExpenseItem from './components/ExpenseItem';
// import ICOItem from './components/ICOItem';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//         <h2 className="h2">Getting Started</h2>
//         <ExpenseItem></ExpenseItem>
//         <ICOItem></ICOItem>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import bunzz from "bunzz-sdk";

import "./App.css";

const DAPP_ID = process.env.REACT_APP_DAPP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const init = async () => {
  const handler = await bunzz.initializeHandler({
    dappId: DAPP_ID,
    apiKey: API_KEY,
  });
  return handler;
};

const App = () => {
  const [contract, setContract] = useState();
  const [value, setValue] = useState(0);
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    const setup = async () => {
      try {
        const handler = await init();

        const userAddress = await handler.getSignerAddress();
        const contract = await handler.getContract("Token (ERC20)");

        setUserAddress(userAddress);
        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    };

    setup();
  }, []);

  const handleChange = (e) => setValue(e.target.value);

  const submit = async () => {
    await contract.mint(userAddress, value);
    alert("Transaction was sent in success🎉");
  };

  return (
    <div className="App App-header">
      <p className="in">You can mint your ERC20 if you're the owner</p>
      <input className="mint-inp" value={value} onChange={handleChange} type="text" />
      <button className="btn" onClick={submit}>mint</button>
    </div>
  );
};

export default App;
