import { useState } from 'react'
import * as finnhub from 'finnhub';
import CompanyDetails from './CompanyDetails';
import { DebounceInput } from 'react-debounce-input';
import './app.css';



function App() {
  const [ state, setState ] = useState('');
  const [ details, setDetails ] = useState({});

  const onsubmitHandler = async (val) => {
    const api_key = finnhub.ApiClient.instance.authentications[ 'api_key' ];
    api_key.apiKey = "cn7fcahr01qgjtj4ivf0cn7fcahr01qgjtj4ivfg"
    const finnhubClient = new finnhub.DefaultApi()
    finnhubClient.companyProfile2({ 'symbol': val }, (error, data, response) => {
      setDetails(data);
    });
  }

  const onChangeHandler = async (e) => {
    setState(e.target.value)
    onsubmitHandler(e.target.value);
    return;
  }


  return (
    <>
      <div style={{ width: '70vw', margin: 'auto', marginTop: '1rem' }}>
        <div style={{ width: '70%', margin: 'auto' }}>
          <DebounceInput
            onChange={onChangeHandler}
            style={{ width: '100%', fontSize: '2rem', padding: '1rem 1.5rem', borderRadius: '10px' }}
            placeholder={'Search a Company (Ex- AAPL)'}
            debounceTimeout={300}
          />
        </div>
        <CompanyDetails details={details} state={state} />
      </div>
    </>
  )
}

export default App
