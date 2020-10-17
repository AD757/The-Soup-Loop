import vegetarian1 from '../Image/Vegetarian/vegetarian1.png';
import vegetarian2 from '../Image/Vegetarian/vegetarian2.png';
import vegetarian3 from '../Image/Vegetarian/vegetarian3.png';
import vegetarian4 from '../Image/Vegetarian/vegetarian4.png';
import vegetarian5 from '../Image/Vegetarian/vegetarian5.png';
import vegetarian6 from '../Image/Vegetarian/vegetarian6.png';

import soup1 from '../Image/Soup/soup1.png';
import soup2 from '../Image/Soup/soup2.png';
import soup3 from '../Image/Soup/soup3.png';
import soup4 from '../Image/Soup/soup4.png';
import soup5 from '../Image/Soup/soup5.png';
import soup6 from '../Image/Soup/soup6.png';

import vegan1 from '../Image/Vegan/vegan1.png';
import vegan2 from '../Image/Vegan/vegan2.png';
import vegan3 from '../Image/Vegan/vegan3.png';
import vegan4 from '../Image/Vegan/vegan4.png';
import vegan5 from '../Image/Vegan/vegan5.png';
import vegan6 from '../Image/Vegan/vegan6.png';

const foods = [{
		id: 0,
		type: 'Vegetarian',
		slug: 'vegetarian',
		items: [{
				id: 0,
				name: 'Vegetarian Noodle Soup',
				title: 'Vegetarian',
				info: 'The soup is thicker than the usual clear noodle soups, and the creamy colour is from the sesame paste (or tahini) and chilli paste.',
				price: 5.99,
				img: vegetarian1
			},
			{
				id: 1,
				name: 'Tomato Soup',
				title: 'Vegetarian',
				info: 'Made from our organic garden grown tomatos. Real homemade tomato soup like no other you have had before.',
				price: 4.99,
				img: vegetarian2
			},
			{
				id: 2,
				name: 'Mushroom Soup',
				title: 'Vegetarian',
				info: 'A velvety, creamy mushroom soup that is low in fat, yet rich in flavor.',
				price: 5.99,
				img: vegetarian3
			},
			{
				id: 3,
				name: 'Creamy Broccoli Soup',
				title: 'Vegetarian',
				info: 'Rich, creamy and delicious soup made just with organic broccoli!',
				price: 3.99,
				img: vegetarian4
			},
			{
				id: 3,
				name: 'Pumpkin Soup',
				title: 'Vegetarian',
				info: 'As a light supper when you need a bit of comfort – it has a lovely silky texture made purely from organic pumpkins!',
				price: 4.99,
				img: vegetarian5
			},
			{
				id: 3,
				name: 'Lentil Soup',
				title: 'Vegetarian',
				info: 'Enjoy this filling veggie soup with red lentils, carrots and leeks',
				price: 5.99,
				img: vegetarian6
			},
		]
	},
	{
		id: 1,
		type: 'Soups',
		slug: 'soup',
		items: [{
				id: 0,
				name: 'Chicken Soup',
				title: 'Soup',
				info: 'Pure soul food, this warming, chicken soup makes the most of roast chicken.',
				price: 8.99,
				img: soup1
			},
			{
				id: 1,
				name: 'Beef Noodle Soup',
				title: 'Soup',
				info: 'noodle soup made of stewed or red braised beef, beef broth, vegetables and Chinese noodles.',
				price: 9.99,
				img: soup2
			},
			{
				id: 2,
				name: 'Beef Stew Soup',
				title: 'Soup',
				info: 'A hearty Vegetable Beef Soup with melt-in-your-mouth slow cooked chunks of beef, potato and vegetables simmered in a herb infused savoury broth.',
				price: 9.99,
				img: soup3
			},
			{
				id: 3,
				name: 'Hot N Sour Chicken Soup',
				title: 'Soup',
				info: 'Hot and Sour chicken soup a very popular Indo Chinese Soup which is just the perfect soup for the soul.',
				price: 8.99,
				img: soup4
			},
			{
				id: 4,
				name: 'Shrimp Soup',
				title: 'Soup',
				info: 'Incredibly delicious creamy tomato soup that features shrimp, coconut milk, and bright lemon juice. Perfect for any occasion!',
				price: 14.99,
				img: soup5
			},
			{
				id: 5,
				name: 'Seafood Soup',
				title: 'Soup',
				info: 'Salmon, shrimp and loads of chopped veggies make this chowder a hearty, herby meal-in-a-bowl.',
				price: 13.99,
				img: soup6
			}
		]
	},
	{
		id: 2,
		type: 'Vegan',
		slug: 'vegan',
		items: [{
				id: 0,
				name: 'Minestrone Soup',
				title: 'Vegan',
				info: 'Minestrone is a hearty Italian vegetable soup made with tomato-y broth and pasta or rice.',
				price: 7.99,
				img: vegan1
			},
			{
				id: 1,
				name: 'Sweet Potato Soup',
				title: 'Vegan',
				info: 'Sweet potato soup is a big bowl of comfort. The number 1 favorite for vegans!',
				price: 6.99,
				img: vegan2
			},
			{
				id: 2,
				name: 'Ginger & Carrot Soup',
				title: 'Vegan',
				info: 'The creamy base of the soup comes purely from the pureed carrots. Mixed with ginger to boost your immune system!',
				price: 6.99,
				img: vegan3
			},
			{
				id: 3,
				name: 'Pea Soup',
				title: 'Vegan',
				info: 'Made from dried peas, such as the split pea',
				price: 3.99,
				img: vegan4
			},
			{
				id: 4,
				name: 'Squash & Apple Soup',
				title: 'Vegan',
				info: 'Sweet apples with mellow butternut squash. Meanwhile cumin, coriander, ginger, and cayenne add vibrant flavors.',
				price: 5.99,
				img: vegan5
			},
			{
				id: 5,
				name: 'Sweet Corn Soup',
				title: 'Vegan',
				info: 'Comforting, healthy and delicious mixed soup made with corn & veggies.',
				price: 4.99,
				img: vegan6
			}
		]
	}
];

export default foods;