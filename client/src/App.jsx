import './App.css'

import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import { PageVisitsProvider } from './PageVisitContext';
import Admin from './Admin';
import Client from './Client';
import { ClientAuthProvider } from './ClientAuth';
import { AdminAuthProvider } from './AdminAuth';
function App() {


  return (
    <div className="app">
      <PageVisitsProvider>
      {
        
        window.location.pathname === "/admin" || window.location.pathname === "/dashboard"   
        ? 
        <AdminAuthProvider> <Admin /> </AdminAuthProvider >
        : 

        <ClientAuthProvider> <Client /> </ClientAuthProvider >
      }
      </PageVisitsProvider>
    </div>

  )
}

export default App
