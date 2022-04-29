import React, { MouseEventHandler } from 'react';
interface ButtonProps {
    icon?: string;
    backgroundColor?: string;
    label: string;
    funtion?: MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({ icon, backgroundColor, label, funtion }) => {
    return (
        <button className="button-wrapper" onClick={funtion}>
            {icon && <img src={icon} alt={label} />}
            <label className="">{label}</label>
        </button>
    );
};

export default Button;
