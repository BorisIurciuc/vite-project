import React, { FC, useEffect, useState } from "react";
import MyButton from "../../common/MyButton/MyButton";
import styles from './BtnTest.module.css'
import cn from 'classnames'

const BtnTest: FC = () => {
    
    const [active, setActive] = useState(true);

    const handleToggle = ():void => {
        setActive((active) => !active)
    };

    useEffect(() => {
        console.log("useEffect from btnTest");
    }, []);

    return(
        <div>
            <div className={cn(styles.container, {
                [styles.containerActive]: active,
                [styles.containerDisabled]:!active
            })}>
                <MyButton 
                    text={active ? 'active':'disable'}
                    active={active}
                    onClick={handleToggle} />
                <h3 className={cn(styles.container, {
                    [styles.headlingActive]: active,
                    [styles.headInputDisabled]: !active
                    })}>Changing Element
                </h3>
            </div>
        </div>
    )
}
export default BtnTest;