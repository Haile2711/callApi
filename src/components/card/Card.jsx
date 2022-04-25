/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import { cards } from '../../../data';

export default function Card() {
    return (
        <div className='card'>
            {cards.map((card) => (
                <div className='wrapper'>
                    <div className='container'>
                        <img className='cardImg' src={card.img} alt='' />
                        <div className='titleSm'>{card.titleSm}</div>
                        <div className='titleLg'>{card.titleLg}</div>
                        <button className='btnCard'>{card.textButon}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
