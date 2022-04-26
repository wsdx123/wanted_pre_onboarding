import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContain = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    width: 450px;
    background-color: aliceblue;
    list-style: none;
`;
const StyledItem = styled.li`
    padding: 10px;
    flex-grow: 1;
    text-align: center;
    color: rgb(168, 167, 167);
    cursor: pointer;
`;
const StyledClicked = styled(StyledItem)`
    color: black;
    font-weight: bold;
`;
const UnderLine = styled.div`
    position: absolute;
    ${({offset:[offsetLeft, offsetTop, offsetWidth]}) => {
        return `
            top: ${offsetTop - 2}px;   
            left: ${offsetLeft}px;
            width: ${offsetWidth}px;
        `;
    }}
    height: 2px;
    background-color: skyblue;
    transition: all 0.5s;
`;

const Tab = () => {
    const [tb,setTb] = useState(0);
    const [offset, setOffset] = useState([0, 0, 0]);

    const tabClick = (index) => {
        const tabEl = document.querySelector(`#onboarding-tab__${index}`);
        if (tabEl instanceof HTMLLIElement) { 
            setOffset([tabEl.offsetLeft, tabEl.offsetTop + tabEl.offsetHeight, tabEl.offsetWidth]);
        }
        setTb(index);
    }

    useEffect(() => {
        tabClick(0);
    },[]);

    const tabArr = [
        {
            tabMenu:"tab1"
        },
        {
            tabMenu:"tab2"
        },
        {
            tabMenu:"tab3"
        }
    ];

    return(
        <div>
            <StyledContain>
                {tabArr.map((e,index) => {
                    return(
                        tb === index ? (
                            <StyledClicked
                                id={`onboarding-tab__${index}`}
                                key={index}
                                onClick={() => tabClick(index)}
                            >
                                {e.tabMenu}
                            </StyledClicked>
                        ) : (
                            <StyledItem
                                id={`onboarding-tab__${index}`}
                                key={index}
                                onClick={() => tabClick(index)}
                            >
                                {e.tabMenu}
                            </StyledItem>
                        )
                    )   
                })}                
            </StyledContain>
            <UnderLine offset={offset} />
        </div>
    );
}

export default  Tab;
