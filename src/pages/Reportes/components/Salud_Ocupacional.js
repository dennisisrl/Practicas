import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png';




import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import EngineeringIcon from '@mui/icons-material/Engineering';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const seguridad_ocupacional = () => {

    return (

        <div className=''>
          <div className='encabezado'>
            <div className='logoprovincia'>
            <img src={logo} width={'100%'} height={'100%'}/>
            </div>
    
            <div className='tituloreporte'>
            <p>GOBIERNO AUTÓNOMO DESCENTRALIZADO MUNICIPAL DEL CANTÓN RIOBAMBA </p>
            <p>SUBPROCESO DE DESARROLLO INSTITUCIONAL  </p>
            <p>INDICADORES DE GESTIÓN </p>
        </div>
          </div>
          <div className='botton'>
      </div>
     
        <div className='divisor'>
          
        </div>
    
        <br></br>
        <div className='menudesplegable'>
            <div className='Seguridad'>
                <br></br>
                <h3>Indicadores de Salud Ocupacional</h3>
                <br></br>
                <br></br>
                <div className='botn'>
               
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='botones' >
                    <Button  className='boton1' href='Indicador_trab_aptos'>
                        <EngineeringIcon sx={{ fontSize:50 }} />
                        Indicador de Trabajadores Aptos</Button>
                    <Button className='boton2' href='Indicador_pers_rest'>
                        <ReportOffIcon sx={{ fontSize:50 }}/>
                        Indicador de Personal con Restricción</Button>
                    <Button  className='boton1' href='Indicador_trab_noaptos' >
                        <WorkOffIcon  sx={{ fontSize:50 }}/>
                        Indicador de Trabajadores no Aptos</Button>
            </ButtonGroup>
      
            </div>
            <div className='botn2'>
               
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='botones2' >
                    <Button  className='boton4' href='Indicador_consul_medic'>
                        <LocalHospitalIcon sx={{ fontSize:50 }} />
                        Indicador de Consultas Médicas </Button>
                    <Button className='boton5' href='Indicador_det_salud'>
                        <GroupIcon sx={{ fontSize:50 }}/>
                        Indicador de Deterioro de la Salud</Button>
                    <Button  className='boton6' href='Indicador_consul_medic'>
                        <AssignmentIndIcon  sx={{ fontSize:50 }}/>
                        Indicador de Ctas Médicas</Button>
            </ButtonGroup>
      
            </div>
           
    <br></br>
    
   
    </div>       
        
          
    
          <br></br>
          
        </div>
    
          
        <div className='piepagina'>
          <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>
    
        </div> 
          
     
      
      </div>   
    
    
      );
    
}
export default seguridad_ocupacional

