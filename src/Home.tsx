import styles from './Home.module.css'
import RainfallMonthsChart from './RainfallMonthsChart'
import RainfallYearsChart from './RainfallYearsChart'

const Home = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['charts-container']}>
        <RainfallMonthsChart />
        <RainfallYearsChart />
      </div>
    </div>
  )
}

export default Home