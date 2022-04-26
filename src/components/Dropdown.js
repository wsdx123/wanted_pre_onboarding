import { useState } from 'react';
import closed from '../arrow-close.png';
import styled from 'styled-components';

const StyledDiv = styled.div`
    
    background-color: lightgray;
    padding: 5px;
    width: 200px;
`;
const StyledContent = styled.div`
    display: none;
    ${({bod}) => {
        if(bod){
            return`
                border: 1px solid rgb(172, 163, 163);
                display: block;
                position: relative;
            `;
        }
    }}
    
`;
const StyledFilter = styled.input`
    border: none;
    border-bottom: 1px solid rgb(172, 163, 163);
    width: calc(100% - 10px);
    padding: 5px;
`;
const StyledLabel = styled.label`
    margin: 0;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: beige;
    border: 1px solid rgb(172, 163, 163);
`;
const StyledInput = styled.input`
    display: none;
`;
const StyledArrow = styled.img`
    width: 20px;
    transition: transform 0.5s;
    ${({rot}) => {
        if(rot){
            return`
                transform:rotate(180deg);
            `;
        }
    }}
`;
const StyledUl = styled.ul`
    list-style: none;
    padding: 5px;
    margin: 0;
    background-color: beige;

`;
const StyledLi = styled.li`
    cursor: pointer;

    &:hover{
        background-color: lightgray;
    }
`;
const Dropdown = () => {
    const [arw,setArw] = useState(false);
    const [symbol, setSymbol] = useState("all symbols");
    const [fil, setFil] = useState("");
    const dList = [
        {id: 1, value:'apple'},
        {id: 2, value:'banana'},
        {id: 3, value:'crush'},
        {id: 4, value:'drum'},
        {id: 5, value:'eraser'},
        {id: 6, value:'friday'},
        {id: 7, value:'grade'},
        {id: 8, value:'hover'},
        {id: 9, value:'isolation'},
        {id: 10, value:'jungle'},
        {id: 11, value:'kream'},
    ]

    const arrowHandle = () => {
        setArw(!arw);
    }
    const symbolHandle = (e) => {
        setSymbol(e.target.textContent);
        setArw(false);
    }
    const filterHandle = (e) => {
        setFil(e.target.value);
    }
    return(
        <div>
            <StyledDiv>
                <StyledInput id="dropbox" type="checkbox" />
                <StyledLabel 
                    htmlFor="dropbox" 
                    onClick={arrowHandle}
                >
                    <div>{symbol}</div>
                    <StyledArrow rot={arw} src={closed} />
                </StyledLabel>
                <StyledContent bod={arw}>
                    <StyledFilter 
                        value={fil} 
                        onChange={filterHandle} 
                        type="text" 
                        placeholder='검색어 입력' 
                    />
                    <StyledUl>
                        {dList.filter((data) => {
                            if(fil === ""){
                                return data;
                            } else if(data.value.toLowerCase().includes(fil.toLowerCase())){
                                return data;
                            }
                        }).map((el,index) => {
                            return(
                                <StyledLi 
                                    onClick={symbolHandle} 
                                    key={index}
                                >
                                    {el.value}
                                </StyledLi>
                            )
                        })}
                    </StyledUl>
                </StyledContent>
            </StyledDiv>
        </div>
    );
}

export default Dropdown;