import { useState } from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: block;
    width: 300px;
    padding: 10px;
    margin: 10px 0 10px 0;
`;
const StyledDivVal = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    justify-content: flex-end;
    padding: 10px;
    margin-bottom: 10px;
`;
const StyledItem = styled.div`
    margin-left: 10px; 
    font-weight: bold;
`;
const StyledSlide = styled.input`
    margin: 0 0 5px 0;
    width: 100%;
`;
const StyledBContainer = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const StyledButton = styled.button`
    border-radius: 10px;
    background-color: beige;
    color: lightgray;
    border: none;
    font-size: 5px;
    padding: 5px;
    &:hover{
        background-color: blue;
    }
`;
const Slider = () => {
    const [val,setVal] = useState(0);
    const valHandle = (e) => {
        setVal(e.target.value)
    }
    return(
        <StyledDiv>
            <StyledDivVal >
                <StyledItem>{val}</StyledItem>
                <StyledItem>%</StyledItem>
            </StyledDivVal>
            <StyledSlide type="range" value={val} onChange={valHandle} min="0" max="100" />
            <StyledBContainer>
                <StyledButton onClick={() => setVal(1)}>1%</StyledButton>
                <StyledButton onClick={() => setVal(25)}>25%</StyledButton>
                <StyledButton onClick={() => setVal(50)}>50%</StyledButton>
                <StyledButton onClick={() => setVal(75)}>75%</StyledButton>
                <StyledButton onClick={() => setVal(100)}>100%</StyledButton>
            </StyledBContainer>
        </StyledDiv>
    );
}

export default Slider;