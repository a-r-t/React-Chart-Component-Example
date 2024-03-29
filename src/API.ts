export default {
  getRainfallMonthData: (): Promise<number[]> => {
    // pretend this is calling out to an external API with axios and is returning a list of data from the API
    return Promise.resolve([ 10, 24, 200, 149, 5, 65, 11, 11, 89, 100, 120, 205 ])
  },
  getRainfallYearData: (): Promise<number[]> => {
    // pretend this is calling out to an external API with axios and is returning a list of data from the API
    return Promise.resolve([ 568, 430, 590, 989 ])
  }
}