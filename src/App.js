import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form onSubmit={onClick}>
        <p>Ingrese el primer valor:
          <input type="number" name="valor1"></input>
        </p>
        <p>Ingrese el segundo valor:
          <input type="number" name="valor2"></input>
        </p>
        <p>
          <input type="submit" value="Sumar"></input>
        </p>
      </form>
    </div>
  );
}

function onClick(e){
  e.preventDefault();
  const num1= parseInt(e.target.valor1.value, 10);
  const num2= parseInt(e.target.valor2.value, 10);
  const suma = num1 + num2;

  alert('La suma es de: ' + suma);
}

export default App;
