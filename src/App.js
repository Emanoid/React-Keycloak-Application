import React from 'react';
import { KeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'

import react from 'react';
import './App.css';

import {AppRouter} from './routes/index';

// Wrap everything inside KeycloakProvider
function App() {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <div className="App"> 
        <AppRouter />
      </div> 
    </KeycloakProvider>
  );
}

export default App;