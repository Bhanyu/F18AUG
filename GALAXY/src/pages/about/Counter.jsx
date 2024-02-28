import React, { useEffect, useState } from "react";
import styles from "../about/_about.module.scss";
import CountUp from 'react-countup';

const Counter = ()=>{

// const [count, setCount] = useState(0);
// useEffect(()=>{
//     const interval = setInterval(()=>{
//         setCount(prevCount => {
//             if (prevCount >= max) {
//                 clearInterval(interval);
//                 return prevCount
//             }
//             return prevCount + 1
//         })
//     },50);
//     return interval
// },[max])

    return(
        <>
        <section id={styles.counter_sec}>
            <div className={styles.container}>
                <div className={`row ${styles.counter_cols}`}>
                    <div className="col-lg-4">
                        <div className={styles.counter_card}>
                           <div className={styles.counter_number}>

                           <h2 className={styles.count}  >
                           <CountUp
                            start={0}
                             end={64} 
                           
                             delay={0}>
                            </CountUp>
                            </h2>
                           </div>
                      <div className={styles.counter_data}>
                        <p>VOLETRO ALLERO</p>
                      </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.counter_card}>
                           <div className={styles.counter_number}>
                           <h2  className={styles.count} >
                           +<CountUp
                            start={0}
                             end={50} 
                         
                             delay={0}>

                            </CountUp> %
                            </h2>
                           </div>
                      <div className={styles.counter_data}>
                        <p>ALLER MIRATE VOLETRO MOMENTUM</p>
                      </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.counter_card}>
                           <div className={styles.counter_number}>
                           <h2  className={styles.count}  >
                           +<CountUp
                            start={0}
                             end={10} 
                            
                             delay={0}>
                            </CountUp> %
                            </h2>
                           </div>
                      <div className={styles.counter_data}>
                        <p>LACINIA NULLA MAXIMUS ALIQUET</p>
                      </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Counter