import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import LoginPage from "./components/LoginPage";
import Footer from './components/Footer';
import HomePageClient from './components/HomePageClient.jsx';
import BookComplaint from './components/BookComplaint';
import HomePageAdmin from './components/HomePageAdmin';
import HomePageEngineer from './components/HomePageEngineer';
import ChangeStatusClient from './components/ChangeStatusClient';
import ViewProfile from './components/ViewClientProfile';
import ViewEngineerProfile from './components/ViewEngineerProfile';
import ViewAdminProfile from './components/ViewAdminProfile';
import UpdateClient from './components/UpdateClient';
import GetComplaintsByProduct from './components/GetComplaintsByProduct';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <Route path="/homepage-client/" component={HomePageClient}></Route>
        <Route path="/bookComplaint/" component={BookComplaint}></Route>
        <Route path="/homepage-admin/" component={HomePageAdmin}></Route>
        <Route path="/homepage-engineer/" component={HomePageEngineer}></Route>
        <Route path="/change-status" component={ChangeStatusClient}></Route>
        <Route path="/client-profile" component={ViewProfile}></Route>
        <Route path="/engineer-profile" component={ViewEngineerProfile}></Route>
        <Route path="/admin-profile" component={ViewAdminProfile}></Route>
        <Route path="/client-update" component={UpdateClient}></Route>
        <Route path="/complaint_by_product" component={GetComplaintsByProduct}></Route>
        <Route path="/addEngineer" component={GetComplaintsByProduct}></Route>
        <Route component={NotFound} />
      </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;