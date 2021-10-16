import React from 'react';
import {removeDecimal, shortenDay} from '../util/utils'
import './day.css'

function Day(props){
    const [day, setDay] = React.useState("")
    const [icon, setIcon] = React.useState("")
    const [min, setMin] = React.useState("")
    const [max, setMax] = React.useState("")
    React.useEffect(()=>{
        const {weather, main, dayOfTheWeek} = props.props
        // var date = new Date(dt * 1000)
        setIcon(weather[0].icon + ".png")
        setDay(shortenDay(dayOfTheWeek))
        setMin(removeDecimal(main.temp_min)+ "°")
        setMax(removeDecimal(main.temp_max)+ "°")
    }, [])

    return(
        <tr className="dayWeather">
            <td className="day">{day}</td>
            <img src={`http://openweathermap.org/img/wn/${icon}`}/>
            <td className="temp">            
                <span>{min}</span>
                <span>{max}</span>
            </td>
        </tr>
    )
}

export default Day