import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/wallet/Home';
import Testing from './containers/wallet/Testing';
import Enrollment from './containers/wallet/Enrollment';
import Payment from './containers/wallet/Payment';
import RewardCreditHistory from './components/rewards/RewardCreditHistory';
import Transactions from './components/cash/Transactions';
import Earn from './containers/wallet/Earn';
import Transfer from './containers/wallet/Transfer';
import PlayPlay from './containers/wallet/Play&Play';
import CashOut from './containers/wallet/CashOut';
import Benefits from './containers/wallet/Benefits';
import Redeem from './containers/wallet/Reedem';
import RewardEventEntry from './containers/wallet/RewardEventEntry';
import config from './config/config';

function App() {
  let baseDirecory: any = '';
  baseDirecory = config.baseDirecory;

  return (
    <Router basename={baseDirecory}>
      {/* <div className="App"> */}
      <Switch>
        <Route path="/" exact component={Testing} />
        <Route path="/enrollment" component={Enrollment} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/benefits" exact component={Benefits} />
        <Route path="/reward" exact component={RewardCreditHistory} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/earn" exact component={Earn} />
        <Route path="/transfer" exact component={Transfer} />
        <Route path="/redeem" exact component={Redeem} />
        <Route path="/cash-out" exact component={CashOut} />
        <Route path="/play-play" exact component={PlayPlay} />
        <Route path="/reward-entry/:id" exact component={RewardEventEntry} />
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
