 import React from 'react'
 import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.action';
 const  home = async () => {
  const loggedIn =await getLoggedInUser();
   return (
    //  <div>home</div>
     <section className='home'>
<div className='home-content'>
  <header className='home-header'>
    <HeaderBox type="greeting" title="Welcome" user={loggedIn?.name || 'guest'}
      subtext="accessa and manage your accont and transacction effeciently"  />

<TotalBalanceBox accounts={[]} totalBanks={1}
totalCurrentBalance={1230.23}
/>
  </header>
recent transaction 
</div>
{/* <RightSidebar/>*/}
<RightSidebar 
        user={loggedIn}
        // transactions={account?.transactions}
        // banks={accountsData?.slice(0, 2)}
        transactions={[]}
        banks={[{currentBalance:213.3},{currentBalance:444.4}]}
      />



     </section>
   )
 }
 
 export default home