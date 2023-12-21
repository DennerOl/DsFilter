import { ContextListingCount } from '../../utils/context-listing';
import { useContext } from 'react';
import './styles.css'

export default function Header() {

  const { contextListingCount, setContextListingCount } = useContext(ContextListingCount);

  return (

    <header>
      <div className='dsf-container dsf-container-header'>
        <h1>DSFilter</h1>
        <p>{contextListingCount} produto(s)</p>
      </div>
    </header>
  );

}