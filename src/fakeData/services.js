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
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : notification,
		img         : freshsoup
	},
	{
		id          : 1234,
		title       : 'Order Online',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : icoDeliver,
		img         : fastdelivery
	},
	{
		id          : 2134,
		title       : 'Door Delivery',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : home,
		img         : homeDelivery
	}
];

export default services;
