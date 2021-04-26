import Temperature from "./Temperature";

export default class City {
  
  constructor(
    public name: string,
    public cityKey: string,
    public currentCondition: Temperature,
    public fiveDayForecast?: Temperature[]

  ){}
}