/* eslint-disable no-empty */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getUserInfor from '../../redux/api/apiUser';

export default function Talent() {
    const user = useSelector((state) => state.user.userInfor);
    const dispatch = useDispatch();
    useEffect(() => {
        getUserInfor(dispatch);
    }, [dispatch]);
    console.log(user);
    return (
        <div className='talent'>
            <div className='top'>
                <div className='title'>
                    <div className='circle' />
                    <span className='text'>Talents: Most Ative</span>
                    <button className='btnShow'>Show all</button>
                </div>
                <div className='desc'>
                    Vietnam’s first innovation platform empowered by credit utility and more than 10K experts network at
                </div>
            </div>

            <div className='bottom'>
                <Swiper
                    slidesPerView={4}
                    slidesPerGroup={4}
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
                    {user.map((talent) => (
                        <SwiperSlide key={talent._id}>
                            <div key={talent._id} className='container'>
                                <img className='avatar' src={talent.avatar} alt='' />
                                <div className='tag'>
                                    {talent.skills.map((skill) => (
                                        <div className='tagItem'>{skill}</div>
                                    ))}
                                </div>
                                <div className='talentName'>{talent.fullName}</div>
                                <div className='jobs'>{talent.email}</div>
                                <div className='items'>
                                    <img className='iconMess' src='./assets/mess.png' alt='' />
                                    <button className='btnFollow'>Follow</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
