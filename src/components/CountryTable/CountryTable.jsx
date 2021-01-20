import styles from './CountryTable.module.css';

const orderBy = ({countries}) => {
    return countries.sort((a,b) => a.population > b.population ? 1 : -1);
};

const CountryTable = ({countries}) => {
    const ordered = orderBy(countries);
  return (
      <div>
        <div className={styles.heading}>
          <button className={styles.heading_name} >
              <div>Name</div>
          </button>
          <button className={styles.heading_population} >
              <div>Population</div>
          </button>
        </div>
        {countries.map((c) => {
            <div className={styles.row}>
                <div className={styles.name}>
                    {c.name}
                </div>
                <div className={styles.population}>
                    {c.population}
                </div>
            </div>
        })}
      </div>
      
  );   
};

export default CountryTable;