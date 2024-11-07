import React, { useState } from 'react';

import ExpandMoreImg from '../../assets/icons/expand_more.svg';

import './index.css';

type SelectProps = {
    id: string;
    name: string;
    defaultValue?: string;
    value: string;
    options: string[];
    onChange: any;
    icon?: string;
};

const Select = ({
    id,
    name,
    defaultValue,
    value,
    options,
    onChange,
    icon,
}: SelectProps) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleSelectClick = () => {
        setIsOpened((prevState) => !prevState);
    };

    const handleOptionClick = (option) => () => {
        setIsOpened(false);
        onChange({
            target: {
                id,
                name,
                value: option,
            },
        });
    };

    return (
        <div className="select" role="select">
            <div className="select-input" onClick={handleSelectClick}>
                {icon ? (
                    <img
                        src={require(`../../assets/icons/${icon}`)}
                        height={40}
                        width={40}
                    />
                ) : (
                    <span style={{ height: 20, width: 20 }} />
                )}
                <h6 className="text-green">{value || defaultValue}</h6>
                <img src={ExpandMoreImg} height={20} width={20} />
            </div>
            <ul
                className={`select-options ${isOpened ? 'select-options--opened' : ''}`}
            >
                {options.map((option) => (
                    <li onClick={handleOptionClick(option)}>
                        {' '}
                        <h3 className="text-green">{option}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
