import { Fragment, useContext, useEffect, useState } from "react";
import Link from 'next/link'
import { useAppContext } from "../../context/AppContext";
// import { ACTION_TYPES, AppContext } from '../../context/AppContext'
import styles from '../../styles/components/Navbar.module.css'
import Login from "./Login";


const Navbar = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const {navigation} = useAppContext();

    /**
     * It takes an array of objects, and returns an array of React elements
     * @param navigationArray - array of objects that you want to create the navagation from.
     * @param [parentKey=null] - key of the parent nav item. Used to create the url for the sub nav item.
     * @returns An array of JSX elements
     */
    const createNavItems = (navigationArray, parentKey = null) => {
        let navArray = [];
        if(navigationArray && navigationArray.length > 0){
            navigationArray.map((navObj) => {
                if(navObj.doNotShow || navObj.shouldNotShowInNav){
                    // Do nothing because we should not show this here
                }
                else if(navObj.disabledReason){
                    navArray.push(
                        <li key={navObj.key} className="nav-item">
                            <a className={`nav-link nav-text ${styles.linkText}`} href='#' onClick={(e)=>{e.preventDefault()}}>
                                <span className={styles[navObj.disabledReason]}>{navObj.display}</span>&nbsp;
                                {navObj.disabledReason === "future" && <span className={styles.future_subtext}>Future Content!</span>}
                                {navObj.disabledReason === "coming" && <span className={styles.coming_subtext}>Coming Soon!</span>}
                            </a>
                        </li>
                    )
                }
                else if(parentKey){
                    navArray.push(<li key={navObj.key}><Link href={`${baseUrl}${parentKey}/${navObj.key}`} className="dropdown-item">{navObj.display}</Link></li>)
                }
                else if(navObj.subNavagation && navObj.subNavagation.length > 0){
                    let subNavagationToUse = navObj.subNavagation
                    if(!Array.isArray(navObj.subNavagation)){
                        //assume its a string of the key we need too access in the state thats in the store
                        subNavagationToUse = state[navObj.subNavagation];
                    }
                    navArray.push(
                        <li key={navObj.key} className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{navObj.display}</a>
                            <ul className="dropdown-menu">
                                {createNavItems(subNavagationToUse, navObj.key)}
                            </ul>
                        </li>
                    )
                }
                else{
                    navArray.push(
                        <li key={navObj.key} className="nav-item">
                            <Link href={`${baseUrl}${navObj.key}`} className="nav-link">{navObj.display}</Link>
                        </li>
                    )
                }
            });
        }
        return navArray;
    }
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark brand">
            <div className="container-fluid">
                <Link href={baseUrl} className="navbar-brand nav-text">BTT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {createNavItems(navigation)}
                    </ul>
                    <ul className="navbar-nav d-flex">
                        <Login/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
