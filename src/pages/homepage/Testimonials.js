import UserOne from '../../assets/user-1.png';
import UserTwo from '../../assets/user-2.png';
import UserThree from '../../assets/user-3.png';
import UserFour from '../../assets/user-4.png';

export default function Testimonials() {
    return (
        <section className='testimonials-section'>
            <h2 className='section-title'>Testimonials</h2>
            <ul className='testimonials'>
                <li className='user'>
                    <p className='user-name'>
                        <strong>Kaitlyn</strong>
                    </p>
                    <img className='user-img' src={UserOne} alt='user 1' />
                    <p className='user-review'>
                        Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.


                    </p>
                </li>
                <li className='user'>
                    <p className='user-name'>
                        <strong>Shivaya</strong>
                    </p>
                    <img className='user-img' src={UserTwo} alt='user 2' />
                    <p className='user-review'>
                        ALorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.


                    </p>
                </li>
                <li className='user'>
                    <p className='user-name'>
                        <strong>Sri</strong>
                    </p>
                    <img className='user-img' src={UserThree} alt='user 3' />
                    <p className='user-review'>
                        Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.


                    </p>
                </li>
                <li className='user'>
                    <p className='user-name'>
                        <strong>William</strong>
                    </p>
                    <img className='user-img' src={UserFour} alt='user 4' />
                    <p className='user-review'>
                        Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.


                    </p>
                </li>
            </ul>
        </section>
    );
}

