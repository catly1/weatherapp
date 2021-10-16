import React from 'react'
import { fetchForecast } from '../util/weather_api'
import {convertUnixToDate, getDayofTheWeek} from '../util/utils'
import Day from './day'
import './home.css'

function Home(){
    const [days, setDays] = React.useState([])

    React.useEffect(() => {
        fetchForecast("Stockton").then(res => {
            console.log(res)
            let filtered = filterDays(res.list)
            filtered.pop()
            // console.log(filtered)
            setDays(filtered)
        })
    }, [])

    const renderDays = () => {
        return(
            <table>
                <tbody>
                    {days.map(day => 
                            <Day props={day} key={day.dt}/>
                    )}
                </tbody>
            </table>
        )
    }

    const filterDays = (list) => {
        let lastDay = ""
        let currentDay = ""
        return list.filter((day, i) => {
            currentDay = day
            const date = convertUnixToDate(day.dt)
            const hours = date.getHours()
            const dayOfTheWeek = getDayofTheWeek(date.getDay())
            if (dayOfTheWeek !== lastDay && hours >= 12 ){
                lastDay = dayOfTheWeek
                day["dayOfTheWeek"] = dayOfTheWeek
                return day
            }            
        })
    }

    return(
        renderDays()
    )
}

export default Home