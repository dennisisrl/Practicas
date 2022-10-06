import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideMenu from './pages/nav/SideMenu';
import React from 'react';
import { useState } from 'react';
import Eventos from './pages/nav/components/eventos.tsx';
import MisDatos from './pages/nav/components/MisDatos';
import Reportes from './pages/Reportes/Reportes';


import Gestion from  './pages/Reportes/components/Gestion_talento';
import Archivo from './pages/Reportes/components/gestion_finaciera';
import GestionC from '../src/pages/Reportes/components/gestion_cumunicacion';
import SeguridadO from '../src/pages/Reportes/components/Seguridad_Ocupacional';
import SaludO from '../src/pages/Reportes/components/Salud_Ocupacional';
import CondicionesIn from '../src/pages/Reportes/components/Indicador_cond_inseg';


import './App.css';
import Login from './pages/Login/Login';


function App() {

  const [inactive, setInactive] = useState(false);

  return (
     <div className="App">

      
      <Router>
        <SideMenu onCollapse={(inactive)=>{
          console.log(inactive);
          setInactive(inactive);
        }}/>
        <div className={`container ${inactive ? 'inactive': ''}`}>
        <Switch>
          <Route exact path={'/eventos'}>
            <Eventos />
          </Route>
          <Route path={'/misdatos'}>
            <MisDatos />
          </Route>
          <Route path={'/Reportes'}>
            <Reportes />
            </Route>
            <Route path={'/gestion_finaciera'}>
            <Gestion />
            </Route>
            <Route path={'/gestion_talento'}>
            <Archivo />
            </Route>
            <Route path={'/gestion_comunicacion'}>
            <GestionC />
            </Route>
            <Route path={'/Seguridad_Ocupacional'}>
            <SeguridadO />
            </Route>
            <Route path={'/Indicador_cond_inseg'}>
            <CondicionesIn />
            </Route>
            <Route path={'/Salud_Ocupacional'}>
            <SaludO />
            </Route>
            
           
        </Switch>
        </div>
      </Router>
     </div>
    
    
  );
}

export default App;