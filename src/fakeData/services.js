import icoDeliver from '../Image/ICON/deliver.png';
import fastdelivery from '../Image/img/fastdelivery.png';
import notification from '../Image/ICON/notification.png';
import freshsoup from '../Image/img/freshsoup.png';
import home from '../Image/ICON/home.png';
import homeDelivery from '../Image/img/home-delivery.png';

const services = [
	{
		id          : 3426,
		title       : 'Fresh Soups',
		description :
			'The Soup Loop focus on providing fresh ingredients and quality soups. Shop our delicious chef-made soups now!',
		icon        : notification,
		img         : freshsoup
	},
	{
		id          : 1234,
		title       : 'Order Online',
		description :
			'Fresh food directly from our kitchen to your home. Your soup is just one click away!',
		icon        : icoDeliver,
		img         : fastdelivery
	},
	{
		id          : 2134,
		title       : 'Door Delivery',
		description :
			'Fresh chef-made soups, delivered safely to your door. Now offering no-contact delivery.',
		icon        : home,
		img         : homeDelivery
	}
];

export default services;
