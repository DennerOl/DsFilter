import { useState } from 'react';
import Header from './componentes/Header'
import ListingBody from './componentes/ListingBody'
import { ContextListingCount } from './utils/context-listing';



function App() {

  const [contextListingCount, setContextListingCount] = useState<number>(0);

  return (
    <>
      <ContextListingCount.Provider value={{ contextListingCount, setContextListingCount }}>
        <Header />
        <ListingBody />

      </ContextListingCount.Provider>
    </>
  )
}

export default App
