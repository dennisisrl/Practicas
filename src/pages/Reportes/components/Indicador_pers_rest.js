import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png'
import Indicador from '../../Reportes/components/Indicador.css'





const Indicador_pers_rest = () => {

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
    <div className='indicInseg'> <h3>Indicador de Condiciones Inseguras</h3></div>
    <br></br>
   
    <table className=' table-bordered '>   
      <thead className=' table-active '>

        <tr className='tablem'>
       
          <th> Indicador N°19</th>  
         <th>1 1. INFORMACIÓN DEL INDICADOR </th> 
         <th></th>
         <th></th>
        </tr>
       
      </thead>
      
      <tbody>
        
        <tr>
          <th>Nombre Indicador </th>
          <td>Indicador de personal con restricción</td>
          <th>Codigo: </th>
          <td>DI-TH-SO-PR-005</td>
        </tr>
        <tr>
          <th>Finalidad</th>
          <td>Monitorizar la exposición a los factores de riesgo</td>
          <th></th>
          <th></th>
         
        </tr>
        <tr>
          <th>Calculo</th>
          <td> = (No. de trabajadores aptos con restricción / No. de trabajadores evaluados) * 100											
 </td>
          <th></th>
          <th></th>
         
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
            <td>12</td>
            <td>68</td>
            <td>17,65%</td>
            <td>Análisis vulnerabilidad por COVID-19</td>
            <td>APO- TELETRABAJO</td>

          </tr>
          <tr>
            <td>2</td>
            <td>Febrero</td>
            <td>19</td>
            <td>81</td>
            <td>26,46</td>
            <td>Evaluacion Ocupacional a personal con discpacidad	</td>
            <td>"Seguimiento de casos médicos ocupacionales x equipo multidisciplinario</td>

          </tr>
         
          <tr>
            <td>3</td>
            <td>Marzo</td>
            <td>12</td>
            <td>194</td>
            <td>6,19%</td>
            <td>Evaluaciones Ocupascionales Periódicas y re integro	</td>
            <td>"Seguimiento de casos médicos ocupacionales x equipo multidisciplinario</td>

          </tr>
          <tr>
            <td>4</td>
            <td>Abril</td>
            <td>5</td>
            <td>78</td>
            <td>6,41%</td>
            <td>Evaluaciones Ocupascionales Periódicas y re integro</td>
            <td>Seguimiento de casos médicos ocupacionales x equipo multidisciplinario</td>
            

          </tr>
          <tr>
            <td>5</td>
            <td>Mayo</td>
            <td>13</td>
            <td>132</td>
            <td>9,85%</td>
            <td>Evaluación Ocupacional Periódica  (seguimiento de equipo multidisciplinario)</td> 
            <td>"Seguimiento de casos médicos ocupacionales x  equipo multidisciplinario			"			
</td>               

          </tr>
          <tr>
            <td>6</td>
            <td>Junio</td>
            <td>14</td>
            <td>143</td>
            <td>9,79%</td>
            <td>Evaluaciones Ocupascionales Periódicas y re integro	</td> 
            <td>Seguimiento de casos médicos ocupacionales x  equipo multidisciplinario</td>               

          </tr>
          <tr>
            <td>7</td>
            <td>Julio</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>                

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

export default Indicador_pers_rest;
  
  