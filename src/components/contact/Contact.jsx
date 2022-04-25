/* eslint-disable react/button-has-type */

export default function Contact() {
    return (
        <div className='contact'>
            <div className='wrapper'>
                <div className='title'>
                    <div className='textSm'>SUBSCRIBE FOR OUR NEWSLETTER</div>
                    <div className='textLg'>Get more free startup resources</div>
                </div>
                <div className='mail'>
                    <input type='text' placeholder='Your Email' className='urMail' />
                    <button> Get it now</button>
                </div>
            </div>
        </div>
    );
}
