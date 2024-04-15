import React, { FC } from "react";
import styles from './MyButton.module.css'
import cn from 'classnames'

interface btnProps {
    text: string;
    active?: boolean;
    onClick?:() => void;
}

const MyButton: FC<btnProps> = ({text, active = true, onClick}) => (
    <button className={cn(styles.button, {
        [styles.active]: active,
        [styles.disabled]: !active
    })} onClick={onClick}>
        {text}
    </button>
)
export default MyButton;
