// React/Next -----------------------------------------------------------------------
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import { Fragment, useContext, useEffect, useState } from 'react';
import styles from '../../styles/components/PageWrapper.module.css'
// Components -----------------------------------------------------------------------
import Navbar from './Navbar';
// Other ----------------------------------------------------------------------------

const defaultTitle = "Beyond the Table";

const PageWrapper = ({ children, className=false, title=null, description="Welcome to Beyond the Table! A Dungeons & Dragons tool website.", showNav=true, showHeader=true, showFooter=true, }) => {

    return (
        <Fragment>
            {showNav ? <Navbar/> : ""}
            <div className={className ? className : ""}>
                <Head>
                    <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
                    <meta name="description" content={description} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {showHeader ? 
                    <Fragment>
                        <div className={`${styles.container} container`}>
                            <div className={`${title ? styles.pagePanel : styles.homePanel}`}>
                                {title ? 
                                    <Fragment>
                                        <br/>
                                        <h2>{title}</h2>
                                        <br/>
                                        <br/>
                                    </Fragment>
                                :
                                    <Fragment>
                                        <br/>
                                        <h1>Welcome to</h1>
                                        <h1>Beyond the Table</h1>
                                        <br/>
                                        <br/>
                                    </Fragment>
                                }
                            </div>
                        </div>
                        <div className="branded-line"></div>
                    </Fragment>
                : ""}

                { children }

            </div>
            {showFooter ? 
                <footer className={styles.footer}>
                    <span className={styles.text}>
                        I do not own the copy right to any of the images or sounds used on this site. I am just a fan of D&D. I created this site to challenge myself for fun and will not monetize it in anyway.
                    </span>
                </footer>
            : ""}
        </Fragment>
    )
}

export default PageWrapper;
