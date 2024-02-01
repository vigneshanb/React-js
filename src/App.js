import logo from './logo.svg';
import './App.css';


function ReactTask(){
  return(<>
  <div>
    <h1>
      WELCOME TO REACT JS CLASS
    </h1>
   <h2>vignesh</h2> 
    </div>
    <App/>
    </>
  )
}
function App() {
  return (
    <div>
      <table border = "1">
    <tr>
        <th> S.NO</th>       
         <th> EMPLOYEE NAME </th>
        <th> EMPLOYEE ROLE</th>
        <th> EMPLOYEE PH.NO</th>
        <th> COMPANY NAME</th>
 </tr>
 <tr>
    <td> 01</td>
    <td> Vignesh A</td>
    <td>Java </td>
    <td> 8754676621</td>
    <td> Greens Tech </td>
</tr>
<tr>
    <td> 02</td>
    <td>Abinesh K</td>
    <td> Python</td>
    <td> 9790491506</td>
    <td> Zoho</td>
</tr>
    <tr>
        <td> 03</td>
        <td> Nithish G </td>
        <td> Sql</td>
        <td> 9944253838</td>
        <td> Wipro</td>
    </tr>
    </table>
    </div>
  );
}

export default ReactTask;
