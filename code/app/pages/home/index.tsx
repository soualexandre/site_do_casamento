import { NextPage } from 'next';
import Head from 'next/head';
import Layout from './components/layout/Layout';
import HeroSection from './sections/HeroSection';
import OurStory from './sections/Ourstory';
import EventInfo from './sections/EventInfo';
import RSVPSection from './sections/RSVPSection';

const Home: NextPage = () => {
    const weddingDate = new Date('2024-10-12T18:00:00'); // Data do casamento

    return (
        <>
            <Head>
                <title>Alexandre & Acsa - Nosso Casamento</title>
                <meta name="description" content="Bem-vindos ao nosso site de casamento. Estamos muito animados para compartilhar este dia especial com vocês!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <HeroSection weddingDate={weddingDate} />
                <OurStory />
                <EventInfo />
                <RSVPSection />
                {/* <GallerySection /> */}
            </Layout>
        </>
    );
};

export default Home;