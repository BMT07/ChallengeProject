import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisationAppli = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const instructions = [
        { step: 'Étape 1', text: 'Ouvrez l\'application sur votre appareil.' },
        { step: 'Étape 2', text: 'Entrer vos identifiants et valider le mail.' },
        { step: 'Étape 3', text: 'Connectez vous discutez avec le chatbot et aussi au forum.' },

    ];



    return (
        <div className="container mt-5">

            <h1 className='text-center
            '>Comment utiliser l'application ?</h1>
            <div className="mt-4">
                {instructions.map((instruction, index) => (
                    <div key={index} className="text-center">
                        <motion.h2 animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="mb-4">
                            {instruction.step}
                        </motion.h2>
                        <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                            {instruction.text}
                        </motion.p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UtilisationAppli;
