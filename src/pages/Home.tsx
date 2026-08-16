import Hero from '../components/Hero';
import Services from '../components/Services';
import Professional from '../components/Professional';
import WhyChoose from '../components/WhyChoose';

import ClientLogos from '../components/ClientLogos';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <ClientLogos />
            <Services />
            <WhyChoose />
            <Professional />
        </motion.div>
    );
}
