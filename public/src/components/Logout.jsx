import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiPowerOff } from "react-icons/bi";

export default function Logout() {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <Button onClick={handleClick}>
            <BiPowerOff />
            <Tooltip>Logout</Tooltip>
        </Button>
    );
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #9a86f3;
    border: none;
    cursor: pointer;
    position: relative;
    
    svg {
        font-size: 1.3rem;
        color: #ebe7ff;
    }
`;

const Tooltip = styled.span`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #9a86f3;
    color: #ebe7ff;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    white-space: nowrap;

    ${Button}:hover & {
        opacity: 1;
    }
`;


