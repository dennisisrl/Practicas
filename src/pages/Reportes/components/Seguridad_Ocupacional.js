import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png';




import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Seguridad_Ocupacional = () => {

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
                <h3>Indicadores de Seguridad Ocupacional</h3>
                <br></br>
                <br></br>
                <div className='botn'>
               
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='botones' >
                    <Button  className='boton1' href='Indicador_cond_inseg'>
                        <WarningOutlinedIcon sx={{ fontSize:50 }} />
                        Indicador de Condiciones Inseguras</Button>
                    <Button className='boton2' href='Indicador_accidentes'>
                        <AirlineSeatFlatIcon sx={{ fontSize:50 }}/>
                        Indicador de Accidentes</Button>
                    <Button  className='boton1' href='Indicador_incidentes'>
                        <EngineeringIcon sx={{ fontSize:50 }}/>
                        Indicador de Incidentes</Button>
            </ButtonGroup>
      
            </div>
            <div className='botn2'>
               
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='botones2' >
                    <Button  className='boton4' href='Indicador_cond_inseg'>
                        <LocalHospitalIcon sx={{ fontSize:50 }} />
                        Indicador de deterioro de Salud </Button>
                    <Button className='boton5' href='Indicador_cond_inseg'>
                        <GroupIcon sx={{ fontSize:50 }}/>
                        Indicador de controles operacionales</Button>
                    <Button  className='boton6'href='Indicador_cond_inseg' >
                        <AssignmentIndIcon  sx={{ fontSize:50 }}/>
                        Indicador de Capactaciones</Button>
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
export default Seguridad_Ocupacional


