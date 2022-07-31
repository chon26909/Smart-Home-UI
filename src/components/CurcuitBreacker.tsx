import React, { FC } from 'react'
import { useAppSelector } from '../hooks';
import styles from './CurcuitBreacker.module.scss'

const CurcuitBreacker: FC = () => {


    const { curcuit } = useAppSelector(state => state);

    return (
        <div className={styles.Curcuit}>
            <div className={styles.Title}>
                Voltage Regulator
            </div>
            <div className={styles.List}>
                {Object.values(curcuit).map((item, index: number) => {
                    return <div key={index} className={styles.Item}>
                        <div>Curcuit {index + 1}</div>
                        <div>
                            <span className={styles.Voltage}>{item.voltage.toFixed(2)}{" "}</span>
                            <span>v.</span>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default CurcuitBreacker