import styles from "./LimitedOffer.module.css"
import chair from "../../assets/images/counter-timer-img.png"

import React, { useState, useEffect } from "react"
const LimitedOffer = () => {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval
  const countDown = () => {
    const destination = new Date("Feb 23, 2023").getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = destination - now
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      if (destination < 0) clearInterval(interval.current)
      else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    countDown()
  })
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Limited Offer</h2>
          <h1>Quality Chair</h1>
          <div className={styles.time_container}>
            <div>
              <div className={styles.number}>{days}</div>
              <div className={styles.caption}>days</div>
            </div>
            <div className={styles.colon}>:</div>
            <div>
              <div className={styles.number}>{hours}</div>
              <div className={styles.caption}>hours</div>
            </div>
            <div className={styles.colon}>:</div>
            <div>
              <div className={styles.number}>{minutes}</div>
              <div className={styles.caption}>minutes</div>
            </div>
            <div className={styles.colon}>:</div>
            <div>
              <div className={styles.number}>{seconds}</div>
              <div className={styles.caption}>seconds</div>
            </div>
          </div>
          <button className='buy_btn'>Visit store</button>
        </div>
        <div className={styles.right}>
          <img src={chair} alt='' />
        </div>
      </div>
    </div>
  )
}

export default LimitedOffer
