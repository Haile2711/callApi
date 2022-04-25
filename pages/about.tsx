import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { actDemo } from '@redux/actions';

import styles from '../styles/Home.module.scss';

const MainLayout = dynamic(() => import('@components/Layout'));

const about = () => {
    const dispatch = useDispatch();
    const {
        i18n: { language },
    } = useTranslation();
    useEffect(() => {
        dispatch(actDemo(language));
    }, []);
    return (
        <MainLayout title='About' className={styles.container}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <a href='/en' className={styles.card}>
                        <h2>Home a &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                    <Link href='/' locale='en' passHref>
                        <a href='home' className={styles.card}>
                            <h2>Home link &rarr;</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};
export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});
export default about;
