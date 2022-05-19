import TableHeader from '../components/TableHeader';
import '../styles/globals.css'


// eslint-disable-next-line no-unused-vars
const seattle = new Store('Seattle', 23, 65, 6.3);
// eslint-disable-next-line no-unused-vars
const tokyo = new Store('Tokyo', 3, 24, 1.2);
// eslint-disable-next-line no-unused-vars
const dubai = new Store('Dubai', 11, 38, 2.3);
// eslint-disable-next-line no-unused-vars
const paris = new Store('Paris', 20, 38, 2.3);
// eslint-disable-next-line no-unused-vars
const lima = new Store('Lima', 2, 16, 4.6);




function App({ Component, pageProps }) {
  return (
    <table>
      <TableHeader />
      <tbody>
        {/* here there be loops */}
      </tbody>
    </table>
  );
}

export default App
