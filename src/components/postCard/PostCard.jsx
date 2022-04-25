/* eslint-disable @next/next/no-img-element */

export default function PostCard() {
    return (
        <div className='postCard'>
            <div className='post1'>
                <h2 className='textSm'>
                    Get Mentorship <span className='textLg'> from top Vietnamese Leaders</span>
                </h2>
                <img className='bgPost' src='./assets/poster/bgPost.png' alt='' />
                <img className='people' src='./assets/poster/people.png' alt='' />
            </div>
            <div className='post2'>
                <div className='left'>
                    <div className='wrapper'>
                        <h2>TALENTS & PROJECTS</h2>
                        <h1>Find Collaboration</h1>
                    </div>
                </div>
                <div className='right'>
                    <div className='circle1'>
                        <h2 className='text'>1000+ Vietnamese talents worldwide in Innovation </h2>
                    </div>
                    <div className='circle2' />
                    <div className='circle3'>
                        <h2 className='text'>100 Top tiers mentors </h2>
                    </div>
                    <div className='circle4'>
                        <h2 className='text'>15+ Countries </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
