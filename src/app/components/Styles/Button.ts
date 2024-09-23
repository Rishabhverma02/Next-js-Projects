import styled from "styled-components";

interface ButtonProps {
    secondary?: boolean;
}
export const Button = styled.button<ButtonProps>`
    background-color: #019afe;
    color: #fff;
    border: none;
    padding: 12px;
    margin-top: 6px;
    font-size: 14px;
    border-radius: 5px;
    cursor:pointer;

    &:hover {
        background-color: #327dcc;
    }
      
    ${(props) =>
        props.secondary &&
        `
        display: flex;
        gap:6px;
        align-items:center;
        justify-content:center;
        background-color: #fff;
        border: 1px solid #838383;
        color: #327dcc;

        &:hover {
            background-color: #f0f0f0; 
            border-color: #6b6b6b;
            transition-duration: 0.5s 
        }
        `};
`;