import { styled } from "styled-components";

export const StyledMain = styled.main`
    min-height: calc(100vh - 112px);
    width: 100vw;
    
    display: grid;
    grid-template-columns: 445px 445px;
    column-gap: 125px; 
    justify-content: center;
    align-items: center;
    padding-top: 90px;


    @media (max-width: 1123px){
        & {
            padding-top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
        }
    }
`