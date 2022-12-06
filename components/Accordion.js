// React/Next -----------------------------------------------------------------------
import { Fragment, useContext, useEffect, useState } from 'react';
import accordionStyles from '../styles/components/accordions.module.css'
// Components -----------------------------------------------------------------------
// Other ----------------------------------------------------------------------------

const Accordion = ({containerStyles = {padding:"20px 0px"}, initialActive = false, display, contentHeight, children}) => {
    const [active, setActive] = useState(initialActive);

    useEffect(() => {
    }, []);

    const toggler = (e, currentValue, setFunction) => { 
        e.preventDefault();
        setFunction(!currentValue);
    }

    const renderContent = () => {
        if(contentHeight){
            return(<div style={{height:contentHeight}} className={`${active ? "" : accordionStyles.mockHide} ${accordionStyles.content}`}>{children}</div>)
        }
        return(<div className={`${active ? "" : "hide"} ${accordionStyles.content}`}>{children}</div>)
    }

    return (
        <div className={accordionStyles.accordionContainer} style={containerStyles}>
            <a className={`${accordionStyles.header} ${accordionStyles.text}`} href="#" onClick={(e) => { toggler(e, active, setActive); }}>
                <div className={accordionStyles.display}>
                    <span>{display}</span>
                    <span>
                        <i className={`${active ? "hide" : ""} fa-solid fa-plus`}></i>
                        <i className={`${active ? "" : "hide"} fa-solid fa-minus`}></i>
                    </span>
                </div>
            </a>
            {renderContent()}
        </div>
    )
}

export default Accordion;