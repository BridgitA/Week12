import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myelement = (
  <div>
    <h2>Welcome to React Transportation</h2> 
    <p>The best place to buy vehicles online</p>

    <h2>Choose Options</h2>
    <p>New Only <input type = "checkbox" id = "coding" name = "interest" value = "coding" checked /> </p>
    <p>Select Type
      <select>
        <option value = "All">All</option>
        <option value = "Cars">Cars</option>
        <option value = "Trucks">Trucks</option>
        <option value = "Convertibles">Convertibles</option>
      </select>
    </p>
    <h2>Cars</h2>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2013</td>
          <td>A</td>
          <td>$32000</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2011</td>
          <td>B</td>
          <td>$4400</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2016</td>
          <td>B</td>
          <td>$15500</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <h2>Trucks</h2>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2014</td>
          <td>D</td>
          <td>$18000</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2013</td>
          <td>E</td>
          <td>$5200</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <h2>Convertibles</h2>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2009</td>
          <td>F</td>
          <td>$2000</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2010</td>
          <td>G</td>
          <td>$6000</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2012</td>
          <td>H</td>
          <td>$12500</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2017</td>
          <td>M</td>
          <td>$50000</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
  </div>

)



ReactDOM.render(
  myelement,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
