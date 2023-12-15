import './styles.css'


export default function FilterCard() {

  return (
    <div className='card '>
      <div className=' dsf-filter-card dsf-mb20  dsf-container  '>
        <div className=''>

          <form className='dsf-form'>
            <input
              type="text"
              placeholder='Preço mínimo'
              name='PrecoMin'
            />

            <input type="text"
              placeholder='Preço máximo'
              name='PrecoMax'
            />

            <button className='dsf-button'> Filtrar</button>
          </form>

        </div>

      </div>
    </div>

  );
}
