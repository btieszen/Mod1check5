import { useState } from 'react'
import { useEffect } from 'react'
import HomeStyle from './Todo/Home.style'


//App.tsx
import React from "react";
//import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import CallbackPage from "./AUTHO/CallbackPage";
import ProtectedPage from "./pages/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./AUTHO/AuthenticationGuard";
import HomePage from './pages/HomePage';
import Home from './Todo/Home';

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/home"
        element={<AuthenticationGuard component={Home} />}
      />
      <Route 
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;