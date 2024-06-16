import { Route, Routes } from 'react-router-dom';
import './App.css';
import StateProvider from "./Infrastructure/state/StateProvider";
import { MyContext } from './ContexApi/MyContext';
import OTP_L1 from './Components/Athentication/Sign_In/OTP/Levels/OTP_L1';
import OTP_L2 from './Components/Athentication/Sign_In/OTP/Levels/OTP_L2';
import Dashboard from './Components/DashboardItems/Pages/Dahboard/Dashboard';
import Info_1 from './Components/Athentication/Sign_In/Information/Level_1/Info_1';
import Levels_All from './Components/Athentication/Sign_In/Information/Levels_All';
import Info_2 from './Components/Athentication/Sign_In/Information/Level_2/Info_2';
import Info_3 from './Components/Athentication/Sign_In/Information/Level_3/Info_3';
import { useEffect, useState } from 'react';
import OTP_Register from './Components/Athentication/Sign_In/OTP/OTP_Register';
import Contract from './Components/DashboardItems/Pages/Contract/Contract';
import Notification from './Components/DashboardItems/Pages/Notification/Notification';
import Orders from './Components/DashboardItems/Pages/Orders/Orders';
import Product_All from './Components/DashboardItems/Pages/Products/Product_All';
import Product_Mine from './Components/DashboardItems/Pages/Products/Product_Mine';
import Services_All from './Components/DashboardItems/Pages/Services/Services_All';
import Services_Mine from './Components/DashboardItems/Pages/Services/Services_Mine';
import Ticket from './Components/DashboardItems/Pages/Ticket/Ticket';
import ProfilePage from './Components/DashboardItems/Fast_Access_NAV/ProfilePage';
import Wellcome from './Components/WellcomePage/Wellcome';
import Side_Basket from './Components/DashboardItems/Tools/Side_Basket/Side_Basket';
import BuyBasket1 from './Components/DashboardItems/Pages/Buy_Basket/BuyBasket1';
import BuyBasket2_sub from './Components/DashboardItems/Pages/Buy_Basket/BuyBasket2_sub';
import BuyBasket3 from './Components/DashboardItems/Pages/Buy_Basket/BuyBasket3';
import Financial from './Components/DashboardItems/Pages/Financial/Financial_cyrcle';
import Debt from './Components/DashboardItems/Pages/Financial/Debt';
import Pays from './Components/DashboardItems/Pages/Financial/Pays';
import Club from './Components/DashboardItems/Pages/Financial/Club';
import Wallet from './Components/DashboardItems/Fast_Access_NAV/Wallet/Wallet';
import Comission from './Components/DashboardItems/Fast_Access_NAV/Commission';
import Full_wallet from './Components/DashboardItems/Fast_Access_NAV/Wallet/Full_Wallet';
import Returned from './Components/DashboardItems/Pages/Orders/Returned';





function App() {

  const [levels, setLevels] = useState('1');
  const [otpPage, setOtpPage] = useState('first');
  const [activation, setActivation] = useState('');
  const [showAside, setShowAside] = useState(false)


  return (

    <StateProvider>
      <MyContext.Provider value={{ levels, setLevels, otpPage, setOtpPage, activation, setActivation, showAside, setShowAside }}>


        <div className="App">

          {/* <Side_Basket /> */}

          <div className='w-100 vh-100 position-fixed' style={{backgroundColor : '#fcfcfc' , zIndex : '-1'}} />
          <Routes >
            <Route path='/' element={<Dashboard />} />
            <Route path='/2' element={<OTP_L2 />} />
            <Route path='/info' element={<Levels_All />} />
            <Route path='/info/1' element={<Info_1 />} />
            <Route path='/info/2' element={<Info_2 />} />
            <Route path='/info/3' element={<Info_3 />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/contract' element={<Contract />} />
            <Route path='/dashboard/notification' element={<Notification />} />
            <Route path='/dashboard/orders' element={<Orders />} />
            <Route path='/dashboard/returned' element={<Returned />} />
            <Route path='/dashboard/allpro' element={<Product_All />} />
            <Route path='/dashboard/mypro' element={<Product_Mine />} />
            <Route path='/dashboard/allserv' element={<Services_All />} />
            <Route path='/dashboard/myserv' element={<Services_Mine />} />
            <Route path='/dashboard/ticket' element={<Ticket />} />
            <Route path='/dashboard/basket' element={<BuyBasket1 />} />
            <Route path='/dashboard/basket/1' element={<BuyBasket2_sub />} />
            <Route path='/dashboard/basket/2' element={<BuyBasket3 />} />
            <Route path='/dashboard/financial' element={<Financial />} />
            <Route path='/dashboard/debt' element={<Debt />} />
            <Route path='/dashboard/pays' element={<Pays />} />
            <Route path='/dashboard/club' element={<Club />} />
            <Route path='/dashboard/wallet' element={<Wallet />} />
            <Route path='/dashboard/increase-wallet' element={<Full_wallet />} />
            <Route path='/dashboard/Commission' element={<Comission />} />
            <Route path='/dashboard/profile' element={<ProfilePage />} />
            
          </Routes>

        </div>
      </MyContext.Provider>
    </StateProvider>
  );
}

export default App;
