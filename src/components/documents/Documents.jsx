/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDocument } from '../../redux/api/apicall';

export default function Documents() {
    const dispatch = useDispatch();
    const document = useSelector((state) => state.documents.document);

    useEffect(() => {
        getDocument(dispatch);
    }, [dispatch]);
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
                        {document.map((doc) => (
                            <SwiperSlide>
                                <div className='container'>
                                    <img className='imgDocument' src={doc.thumbnail} alt='' />
                                    <div className='title'>{doc.title}</div>
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
