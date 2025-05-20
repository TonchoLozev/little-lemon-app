import React, { useState, useMemo } from 'react';

import ExpandMoreImg from '../../assets/icons/expand_more.svg';
import ExpandMoteWhiteImg from '../../assets/icons/expand_more_white.svg';

import './index.css';

type SelectProps = {
    color?: 'primary' | 'secondary';
    id: string;
    name: string;
    label?: string;
    defaultValue?: string;
    value: string;
    options: string[];
    availableOptions?: string[];
    onChange: (e: { target: { id: string; name: string; value: any } }) => void;
    icon?: string;
    isRequired?: boolean;
};

const Select = ({
    color = 'primary',
    id,
    name,
    label,
    defaultValue,
    value,
    options,
    availableOptions,
    onChange,
    icon,
    isRequired,
}: SelectProps) => {
    const [isOpened, setIsOpened] = useState(false);
    const isSelected = Boolean(value);

    const colorClass = useMemo(() => {
        if (color === 'primary') {
            return 'select-primary';
        }
        if (color === 'secondary') {
            return 'select-secondary';
        }
    }, [color]);

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
        <div
            className={`select ${colorClass}`}
            role="select"
            aria-label="On Click"
        >
            <label htmlFor={id}>
                <h3 className={!label ? 'empty-label' : ''}>
                    {label} {isRequired && <span className="text-red">*</span>}
                </h3>
            </label>
            <div
                className={`select-input ${isSelected ? 'select-input--selected' : ''} ${!label ? 'empty-label' : ''}`}
                onClick={handleSelectClick}
                id={id}
                data-testid={id}
            >
                {icon && !isSelected ? (
                    <img
                        src={require(`../../assets/icons/${icon}`)}
                        height={40}
                        width={40}
                    />
                ) : (
                    <span style={{ height: 20, width: 20 }} />
                )}
                <h6 className="text-green">{value || defaultValue}</h6>
                <img
                    src={isSelected ? ExpandMoteWhiteImg : ExpandMoreImg}
                    height={20}
                    width={20}
                    style={{
                        transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                />
            </div>
            <ul
                className={`select-options ${isOpened ? 'select-options--opened' : ''}`}
                role="dropdown"
            >
                {options.map((option) => (
                    <li
                        className={
                            availableOptions
                                ? availableOptions.includes(option)
                                    ? ''
                                    : 'disabled'
                                : ''
                        }
                        key={option}
                        onClick={
                            availableOptions
                                ? availableOptions.includes(option)
                                    ? handleOptionClick(option)
                                    : undefined
                                : handleOptionClick(option)
                        }
                    >
                        {' '}
                        <h3
                            className={
                                availableOptions
                                    ? availableOptions.includes(option)
                                        ? 'text-green'
                                        : 'text-gray'
                                    : 'text-green'
                            }
                        >
                            {option}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
