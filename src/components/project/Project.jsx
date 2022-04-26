/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

export default function Project() {
    const projects = useSelector((state) => state.documents.document);
    return (
        <div className='project'>
            <div className='top'>
                <div className='title'>
                    <div className='circle' />
                    <span className='text'>Projects: Look for Collaboration</span>
                    <button className='btnShow'>Show all</button>
                </div>
                <div className='desc'>
                    Vietnam’s first innovation platform empowered by credit utility and more than 10K experts network at
                </div>
            </div>
            <div className='bottom'>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={3}
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
                    {projects.map((project) => (
                        <SwiperSlide>
                            <div className='container'>
                                <img src='./assets/img/5.png' alt='' />
                                <div className='title'>{project.title}</div>
                                <ul className='tags'>
                                    <li className='tag'>CODE</li>
                                    <li className='tag'>INTERNET</li>
                                    <li className='tag'>TRAVELLING</li>
                                    <li className='tag'>FOOD</li>
                                </ul>
                                <div className='desc'>TripAdvisor for Food - Discover culinary secrets worldwide</div>
                                <div className='items'>
                                    <div className='date'>
                                        <img src='./assets/date.png' alt='' />
                                        <span>september 12,2020</span>
                                    </div>
                                    <button>Follow</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
