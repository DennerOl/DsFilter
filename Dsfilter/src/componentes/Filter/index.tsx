import { useState } from 'react';
import './styles.css'


type Props = {
  onSearch: Function;
}

type FormData = {
  minimo?: number,
  maximo?: number;

}

export default function Filter({ onSearch }: Props) {

  const [formData, setFormData] = useState<FormData>({
    minimo: undefined,
    maximo: undefined

  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormData(formData);
    onSearch(formData.minimo, formData.maximo);


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
              value={formData.maximo || ""}
              type="text"
              placeholder='Preço máximo'
              onChange={handleInputChange}
            />

            <button type='submit' className='dsf-button'> Filtrar</button>
          </form>

        </div>

      </div>
    </div>

  );
}
