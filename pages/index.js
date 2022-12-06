// React/Next -----------------------------------------------------------------------
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useContext, useState } from 'react';
// import { StoreContext } from '../store/store-context'
// Styles ---------------------------------------------------------------------------
import styles from '../styles/pages/index.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '../components/layout/PageWrapper';
import MenuCardSection from '../components/menu/MenuCardSection';
import { useAppContext } from '../context/AppContext';
// Other ----------------------------------------------------------------------------

const Index = () => {    
    const {navigation} = useAppContext();

    return (
        <PageWrapper>
            <div className="container">
                <div className={`fontAdjustment center ${styles.description}`}>
                    <p>Welcome to Beyond the Table! A Dungeons & Dragons tool website.</p>
                </div>
                <MenuCardSection data={navigation} />
            </div>
        </PageWrapper>
    )
}
export default Index;