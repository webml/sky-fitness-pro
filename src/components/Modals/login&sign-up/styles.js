import styled from "styled-components";
import { Button } from '../../UI Kit/button/styles'

export const FormButtonBox = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const SignUpButton = styled(Button)`
    border: 1px solid #D0CECE;
    color: #000000;
    background: transparent;

    :hover {
        background: #F4F5F6;
    }

    :active {
        background: #D9D9D9;
    }
`