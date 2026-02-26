import Card from './Card';
import './cardGallery.css';

import CardOne from '../../../assets/restaurant-chef-B.jpg';
import CardTwo from '../../../assets/lemon-dessert.jpg';
import CardThree from '../../../assets/greek-salad.jpg';

export default function CardGallary() {
    const cardData = [
        {
            title: `Meat Loaf Gyros`,
            description: `Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.

.`,
            image: CardOne,
            price: `$18.00`,
            delivery: `Delivery Available`,
            altText: `Meat Loaf Gyros`,
        },
        {
            title: `Lemon Dessert`,
            description: `Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.

`,
            image: CardTwo,
            price: `$18.00`,
            delivery: `Delivery Available`,
            altText: `Meat Loaf Gyros`,
        },
        {
            title: `Mediterranean Pork and Orzo Salad`,
            description: `Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.

`,
            image: CardThree,
            price: `$18.00`,
            delivery: `Delivery Available`,
            altText: `Meat Loaf Gyros`,
        },
    ];

    return (
        <ul className="card-gallery">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    price={card.price}
                    delivery={card.delivery}
                    altText={card.altText}
                />
            ))}
        </ul>
    );
};