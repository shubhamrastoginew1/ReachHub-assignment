import { useState } from 'react'
import * as finnhub from 'finnhub';
import CompanyDetails from './CompanyDetails';
import { DebounceInput } from 'react-debounce-input';



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

  const onChangeHandler = (e) => {
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
            style={{ width: '100%', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '10px' }}
            placeholder={'Company'}
            debounceTimeout={300}
          />

          {/* <input style={{ width: '100%', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '10px' }} value={state} type="text" placeholder='company name' onChange={(e) => setState(e.target.value)} /> */}
        </div>
        <CompanyDetails details={details} />
      </div>
    </>
  )
}

export default App
