import React from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import './App.css';
import { Login } from './pages/login';
import emblem from './images/emblem.webp';
import { OfficerMain } from './pages/officer/officer-main';
import { Adduser } from './pages/officer/add-user';
import { IssueTicket } from './pages/officer/issue-ticket';
import { CitizenMain } from './pages/citizen/citizen-main';
import { Payment } from './pages/citizen/payment';
import { PaymentConf } from './pages/citizen/components/pay-conf';
import { FineissuedConf } from './pages/officer/components/fineIssued-conf';

function App() {
  return (
    <div className="App">
      <Router>
        <img src= {emblem} className='emblem'/>
        <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path = '/officer-main' element={<OfficerMain/>}/>
          <Route path = '/add-user' element={<Adduser/>}/>
          <Route path = '/issue-ticket' element={<IssueTicket/>}/>
          <Route path='/citizen-main' element={<CitizenMain/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/fineissued-conf' element={<FineissuedConf/>}/>
          <Route path='/paymentconf' element={<PaymentConf/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
