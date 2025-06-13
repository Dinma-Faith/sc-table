import ISPTable from './components/isp-table';
import ispData from './data/isp-data';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ISP Performance Table</h1>
      <ISPTable data={ispData} />
    </div>
  );
}

export default App;
