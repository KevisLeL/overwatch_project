import React from 'react';
import { useParams } from 'react-router-dom';

import PartidasList from '../Components/PartidaList';

const PARTIDAS = [
    {
        id: 'Partida 1',
        date: '20/03/2020',
        map: 'Junkertown',
        role: 'Support',
        player: 'Moira',
        damage: 7500,
        heal: 13750,
        kills: 21,
        creator: 'u1'

    },
    {
        id: 'Partida 2',
        date: '21/03/2020',
        map: 'Habana',
        role: 'DPS',
        player: 'Junkrat',
        damage: 17500,
        heal: 0,
        kills: 43,
        creator: 'u1'

    },
    {
        id: 'Partida 1',
        date: '23/03/2020',
        map: 'Ilios',
        role: 'Tank',
        player: 'Roadhog',
        damage: 12300,
        heal: 6350,
        kills: 28,
        creator: 'u2'

    },{
        id: 'Partida 2',
        date: '24/03/2020',
        map: 'Estación Lunar',
        role: 'Support',
        player: 'Baptiste',
        damage: 5300,
        heal: 16350,
        kills: 12,
        creator: 'u2'
    }
]
const PartidasPage = () => {
    
    const userId = useParams().userId;
    const partidaMostrada = PARTIDAS.filter(partida => partida.creator === userId);

    return <PartidasList items={partidaMostrada}/>
    
};

export default PartidasPage;