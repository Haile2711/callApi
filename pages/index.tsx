import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { actDemo } from '@redux/actions';

import Topbar from '../src/components/topbar/Topbar';
import Intro from '../src/components/intro/Intro';
import Card from '../src/components/card/Card';
import PostCard from '../src/components/postCard/PostCard';
import Talent from '../src/components/talents/Talent';
import Project from '../src/components/project/Project';
import Guide from '../src/components/guide/Guide';
import Documents from '../src/components/documents/Documents';
import Contact from '../src/components/contact/Contact';
import styles from '../styles/Home.module.scss';

const MainLayout = dynamic(() => import('@components/Layout'));

const Home = () => {
    const dispatch = useDispatch();
    const {
        i18n: { language },
    } = useTranslation();
    useEffect(() => {
        dispatch(actDemo(language));
    }, []);
    return (
        <MainLayout title='Home' description='Home description' className={styles.container}>
            <Topbar />
            <div className={styles.main} />
            <Intro />
            <Card />
            <PostCard />
            {/* <Talent /> */}
            <Project />
            <Guide />
            <Documents />
            <Contact />
        </MainLayout>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Home;
