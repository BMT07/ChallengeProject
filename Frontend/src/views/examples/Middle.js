import React from 'react'

const Middle = () => {
    return (
        <>
            <h3 className='text-center mt-2'>Participez au Combat pour l'environnement</h3>
            <div
                className="page-header"
                style={{
                    backgroundImage: "url(" + require("assets/img/environnement.jpeg") + ")",
                }}
            >
                <h2 className="presentation-title">Sauver la planète</h2>

            </div>
        </>
    )
}

export default Middle
