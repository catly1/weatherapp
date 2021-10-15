import React from 'react'
import { fetchForecast } from '../util/weather_api'
import Day from './day'

function Home(){
    const [days, setDays] = React.useState([])

    React.useEffect(() => {
        fetchForecast().then(res => {
            setDays(res.list)
        })
    })

    const renderDays = () => {
        return(
            <table>
                   {days.map(day => 
                   <tr>
                        <Day props={day} key={day.weather.id}/>
                   </tr>
                   )}
            </table>
        )
    }

    return(
        <div className="home">
            {renderDays()}
        </div>
    )
}

export default Home