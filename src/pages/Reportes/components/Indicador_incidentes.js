import React from 'react';
import { render } from "react-dom";
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png'
import Indicador from '../../Reportes/components/Indicador.css'
import Observaciones from './Observaciones';
import { Bar, Line} from 'react-chartjs-2';
import {Datos_incidentes} from './Datos_Indicadores/Datos_incidentes';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Indicador_incidentes = () => {
  const state = {
    data: {
      labels: Datos_incidentes.map(o => o.Mes),
      datasets: [
        {
          label: 'Resultados %',
          backgroundColor: '#2C33E7',
          borderColor: '',
          borderWidth: 1,
          data: Datos_incidentes.map(o => o.Resultados)
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Porcentaje de Incidentes'
        }
      }
    }
  };
 

    return (

        <div className='grid'>
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
        <div className='indicInseg'> <h3> Seguridad Ocupacional- Indicador de Condiciones Inseguras</h3></div>
        <br></br>
       
        <table className=' table-bordered '>   
          <thead className=' table-active '>
  
            <tr className='tablem'>
              
           
              <th> Indicador N°6</th>  
             <th colspan="3">1 INFORMACIÓN DEL INDICADOR </th> 
            
            </tr>
           
          </thead>
          
          <tbody>
            
            <tr>
              <th>Nombre Indicador </th>
              <td>Indicador de Incidentes </td>
              <th>Codigo: </th>
              <td> DI-TH-S-I-005</td>
            </tr>
            <tr>
              <th>Finalidad</th>
              <td colspan="3">Implementación de las medidas preventivas pertinentes</td>
             
             
            </tr>
            <tr>
              <th>Calculo</th>
              <td colspan="3">   = (No. de incidentes peligrosos / No. de incidentes reportados) * 100 </td>
            
             
            </tr>
            <tr>
              <th>Unidad de medida</th>
              <td>Porcentaje </td>
              <td>Frecuencia</td>
              <td>Mensual</td>
            </tr>
            <tr>
              <th>Meta/ Umbral</th>
              <th>No existe cumplimiento</th>
              <th>Cumplimiento regular</th>
              <th>Cumplimiento eficiente</th>
            </tr>
            <tr>
              <td></td>
              <td>del 100% al 65%</td>
              <td>del 64% al 30%</td>
              <td> menor a 30% </td>
            </tr>
            

          </tbody>
          </table >   
      
        
        <br/>
        <br></br>
        <table>
          <tr className='tablem'>
            <th>2. DATOS</th>
            
          </tr>
        
        </table>
        <div className='table-resposive'>
          <table className='table table-bordered' padding="2px">
            <thead>
              <tr className='tabla1'>
                <th>ID</th>
                <th>MES</th>
                <th>NUMERADOR</th>
                <th>DENOMINADOR</th>
                <th>RESULTADOS</th>
                <th>ANALISIS DE CAUSAS</th>
                <th>ACCIONES PROPUESTAS</th>

              </tr>
            </thead>
            <tbody>
              {
                Datos_incidentes.map((data,key) => { 
                  return( 
                    <tr  className='lleno' key={key}>
                      
                      <th>{data.Id}</th>
                      <th>{data.Mes}</th>
                     <th>{data.Numerador}</th>
                     <th>{data.Denominador}</th>
                      <th>{data.Resultados}</th>
                      <th>{data.Causas}</th>
                    <th>{data.Acciones}</th>
                       
                      
                    </tr>
                  )
                })


              }
            </tbody>

          </table>
          <br></br>
          <br></br>

          
        </div>
        <table>
          <tr className='graficas'>
            <th>3. GRÁFICAS</th>
            

            
          </tr>
        </table>
        <Bar 
        datasetIdKey='id'
        options={state.options}
        data={state.data}
        
      />

        <table>
          <tr className='observaciones '>
            <th>4. OBSERVACIONES</th>
            
          

            

          </tr>
        
        </table>
        <br></br>

        <Observaciones/>

         

          
    <br></br>
           
    
          <br></br>
          
        <div className='piepagina'>
          <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>
    
        </div> 
          
     
      
      </div>   
    
   
    
      );
    
}

export default Indicador_incidentes;
  
  