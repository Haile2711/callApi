/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
export default function Intro() {
    return (
        <div className='intro'>
            <div className='left'>
                <h2 className='text'> Powered by AVSE Clobal @2021</h2>
                <div className='container'>
                    <img className='star' src='./assets/star.png' alt='' />
                    <h1 className='title'>
                        Vietnam most trusted network of <span>top talents, innovators</span>{' '}
                    </h1>
                    <p className='desc'>
                        Vietnam’s first innovation platform empowered by credit utility and more than 10K experts
                        network at global level. V-Space is a project founded by AVSE Global.
                    </p>
                    <div className='wrapper'>
                        <button className='btnGetStart'>Get Started for Free</button>
                        <button className='btnSignIn'>Sign In </button>
                    </div>

                    <ul className='items'>
                        <li className=' '>Top-tier Vietnameseleader from </li>
                        <li>
                            <img src='./assets/avse.png' alt='' />
                        </li>
                        <li>
                            <img src='./assets/vpbank.png' alt='' />
                        </li>
                        <li>
                            <img src='./assets/vin.png' alt='' />
                        </li>
                        <li>
                            <img src='./assets/fpt.png' alt='' />
                        </li>
                        <li>
                            <img src='./assets/ted.png' alt='' />
                        </li>
                        <li>
                            <img src='./assets/oneMount.png' alt='' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='right'>
                <button className='btn'>
                    Powered by <span className='blod'>AVSE Global</span>
                </button>
                <img className='poster' src='./assets/poster.png' alt='' />
            </div>
        </div>
    );
}
