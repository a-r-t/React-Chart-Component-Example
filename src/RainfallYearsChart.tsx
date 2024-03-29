import {   
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import API from './API'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Inches of Rainfall Per Year in CT'
    },
  }
}

const labels = ['2020', '2021', '2022', '2023']

const RainfallYearsChart = () => {
  // define data variable that will hold the result of the API call when it is completed
  const [rainfallData, setRainfallData] = useState([] as number[]);

  // call this on initial render, aka when page is first loaded or whenever the page is refreshed
  useEffect(() => {
    API.getRainfallYearData()
      .then((yearData: number[]) => {
        setRainfallData(yearData)
      })
  }, [])

  // format chart data to be compatible with chart library line graph format
  const formatChartData = (): ChartData<'line'> => {
    return {
      labels,
      datasets: [
        {
          label: 'Rainfall per year',
          data: rainfallData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    }
  }

  // when useEffect has finished calling 'setRainfallData', React will recognize that the variable 'rainfallData' that is being used in the 'formatChartData' function has changed.
  // Since that 'formatChartData' function is being used in the below HTML, React determines that it needs to rerender the page to account for the 'rainfallData' variable changing and show any updates.
  return (
    <>
      <Line options={options} data={formatChartData()} />
    </>
  )
}

export default RainfallYearsChart