import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png'
import Indicador from '../../Reportes/components/Indicador.css'





const Indicador_accidentes = () => {

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
    <div className='indicInseg'> <h3>Indicador de Accidentes</h3></div>
    <br></br>
   
    <table className=' table-bordered '>   
      <thead className=' table-active '>

        <tr className='tablem'>
       
          <th> Indicador N°8</th>  
         <th>1 INFORMACIÓN DEL INDICADOR </th> 
         <th></th>
         <th></th>
        </tr>
       
      </thead>
      
      <tbody>
        
        <tr>
          <th>Nombre Indicador </th>
          <td>Indicador de Accidentes </td>
          <th>Codigo: </th>
          <td> DI-TH-S-A-004</td>
        </tr>
        <tr>
          <th>Finalidad</th>
          <td>Evaluar la protección a los trabajadores de los peligros y riesgos relacionados con el trabajo</td>
          <th></th>
          <th></th>
         
        </tr>
        <tr>
          <th>Calculo</th>
          <td> = No. de días sin accidentes </td>
          <th></th>
          <th></th>
         
        </tr>
        <tr>
          <th>Unidad de medida</th>
          <td>Numérico </td>
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
      <tr className='datos'>
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
          <tr  className='espacio1'>
            <td>1</td>
            <td>Enero</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>

          </tr>
          <tr>
            <td>2</td>
            <td>Febrero</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>
            

          </tr>
         
          <tr>
            <td>3</td>
            <td>Marzo</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>

          </tr>
          <tr>
            <td>4</td>
            <td>Abril</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>
            

          </tr>
          <tr>
            <td>5</td>
            <td>Mayo</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Junio</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Julio</td>
            <td>0</td>
            <td>1818</td>
            <td>0,00%</td>
            <td>No se registró accidentes </td>
            <td>Campañas de prevención de riesgos laborales con frecuencia, Capacitaciones, actualización de señalética, entrega de EPP de acuerdo al riesgo al que esta expuesto el trabajador. </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Agosto</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> 
            <td></td>               

          </tr>
          <tr>
            <td>9</td>
            <td>Septiembre</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> 
            <td></td>               

          </tr>
          <tr>
            <td>10</td>
            <td>Octubre</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>  
            <td></td>              

          </tr>
          <tr>
            <td>11</td>
            <td>Noviembre</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>  
            <td></td>              

          </tr>
          <tr>
            <td>12</td>
            <td>Diciembre</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>  
            <td></td>              

          </tr>

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
      
<br></br>
       

      <br></br>
      
    <div className='piepagina'>
      <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>

    </div> 
      
 
  
  </div>   

    
      );
    
}

export default Indicador_accidentes;
  
  