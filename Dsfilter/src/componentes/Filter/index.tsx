import { useState } from 'react';
import './styles.css'


type FormData = {
  minimo?: number,
  maximo?: number;

}

export default function Filter() {

  const [formData, setFormData] = useState<FormData>({
    minimo: undefined,
    maximo: undefined

  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    (formData.minimo || Number.MIN_VALUE),
      (formData.maximo || Number.MAX_VALUE);


  }

  return (
    <div className='card '>
      <div className=' dsf-filter-card dsf-mb20  dsf-container  '>
        <div className=''>

          <form onSubmit={handleSubmit} className='dsf-form'>
            <input
              name="minimo"
              value={formData.minimo || ""}
              type="text"
              placeholder='Preço mínimo'
              onChange={handleInputChange}
            />

            <input
              name="maximo"
              value={formData.minimo || ""}
              type="text"
              placeholder='Preço máximo'
              onChange={handleInputChange}
            />

            <button className='dsf-button'> Filtrar</button>
          </form>

        </div>

      </div>
    </div>

  );
}
