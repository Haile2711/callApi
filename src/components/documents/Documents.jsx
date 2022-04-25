/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getDocuments from '../../redux/api/apiDocument';

export default function Documents() {
    const document = useSelector((state) => state.documents.document.data);
    const dispatch = useDispatch();
    useEffect(() => {
        getDocuments(dispatch);
    }, []);
    console.log(document);
    return (
        <div className='documents'>
            <div className='wrapper'>
                <div className='top'>
                    <div className='titleTop'>
                        <div className='circle' />
                        <span className='text'>Documents: Contracts for Startups</span>
                        <button className='btnShow'>Show all</button>
                    </div>
                    <div className='desc'>Documents: Contracts for Startups</div>
                </div>
                <div className='bottom'>
                    <Swiper
                        slidesPerView={5}
                        slidesPerGroup={5}
                        loop
                        loopFillGroupWithBlank
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                        }}
                        navigation
                        modules={[Pagination, Navigation, Autoplay]}
                        className='mySwiper'
                    >
                        {document.map((d) => (
                            <SwiperSlide>
                                <div className='container'>
                                    <img className='imgDocument' src={d.thumbnail} alt='' />
                                    <div className='title'>{d.title}</div>
                                    <div className='items'>
                                        <img src='./assets/heart.png' alt='' />
                                        <button>Download</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
