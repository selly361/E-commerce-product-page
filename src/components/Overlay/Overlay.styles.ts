import styled from "styled-components"

export const StyledOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    display: none;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);


    &.open {
        display: initial;
    }

`