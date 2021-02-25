import React, {useEffect, useState, useRef} from 'react'

 export default function Timer ({event}) {
    const [timer, setTimer] = useState(event)
    const countRef = useRef(null)

    useEffect(() => {
        if (timer < 0 ) {
            clearInterval(countRef.current)
        }

        countRef.current = setInterval(() => {
            setTimer((timer) => timer - 1)
        }, 10)
    })


    // Event will be passed down from the parent, from a form. 
    // Standard measurements (need millisecond)

    

    // let today = new Date
    // let minutes = 1000 * 60
    // let hours = minutes * 60
    // let days = hours * 24
    // let years = days * 365

    //Current Date Time and Year
    
    // let startTime = Date.now()
    // let currentYear = today.getFullYear()

    // How many measurements go into units of time

    // let minutesPerDay = 24 * 60 * 60 * 1000
    // let difference = (event - today.getTime())
    // let e_daysLeft = difference/minutesPerDay
    // let daysLeft = Math.floor(e_daysLeft)
    // let yearsLeft = Math.floor(difference / years)
    // let e_hoursLeft = (e_daysLeft - daysLeft) * 24
    // let hoursLeft = Math.floor(e_hoursLeft)
    // let minsLeft = Math.floor(e_hoursLeft - hoursLeft)

    // let timeLeft = {}

    // if(difference > 0){
    //     timeLeft = {
    //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //         minutes: Math.floor((difference / 1000 / 60) % 60), 
    //         seconds: Math.floor((difference / 1000) % 60)
    //     }
    // }

    //Time left is one option

   

    // Option: Years, Days, Hours, Minutes, Milliseconds 
    // console.log(today.getTime(), startTime)

        return (
            <div>
                <h3> Milliseconds </h3>
                <div className='stopwatch-card' >
                    <p>{timer}</p>
                </div>
            </div>
        )
}
