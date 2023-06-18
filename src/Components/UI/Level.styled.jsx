import styled from "styled-components";

export const lvl = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 13px;
gap: 19px;

/* Secondary/Green */

border: 3px solid ${props.color}
border-radius: 100px;
:hover { background: lighten(color: ${props.color}, amount: 5%) }
`;
