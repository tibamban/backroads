import image1 from './images/tour-1.jpeg';
import image2 from './images/tour-2.jpeg';
import image3 from './images/tour-3.jpeg';
import image4 from './images/tour-4.jpeg';
import image5 from './images/tour-5.jpeg';
import image6 from './images/tour-6.jpeg';

export const pageLinks = [
	{ id: 1, href: '#home', text: 'home' },
	{ id: 2, href: '#about', text: 'about' },
	{ id: 3, href: '#services', text: 'services' },
	{ id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
	{ id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
	{ id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
	{ id: 4, href: 'https://www.google.com', icon: 'fab fa-google' },
];

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing confort',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
	},
];

export const tours = [
	{
		id: 1,
		image: image1,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit quode xercitationem fugit, qui corporis.',
		location: 'china',
		duration: 6,
		cost: 2100,
	},
	{
		id: 2,
		image: image2,
		date: 'october 1th, 2020',
		title: 'best of Indonasia',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit quode xercitationem fugit, qui corporis.',
		location: 'indonesia',
		duration: 11,
		cost: 1400,
	},
	{
		id: 3,
		image: image3,
		date: 'september 15th, 2020',
		title: 'explore hong kong',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit quode xercitationem fugit, qui corporis.',
		location: 'hong kong',
		duration: 8,
		cost: 5000,
	},
	{
		id: 4,
		image: image4,
		date: 'december 5th, 2019',
		title: 'kenya highlights',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit quode xercitationem fugit, qui corporis.',
		location: 'kenya',
		duration: 20,
		cost: 3300,
	},
	{
		id: 5,
		image: image5,
		date: 'august 31th, 2010',
		title: 'Mama Africa',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit quode xercitationem fugit, qui corporis.',
		location: 'South Africa',
		duration: 22,
		cost: 3900,
	},
	{
		id: 6,
		image: image6,
		date: 'June 26th, 2020',
		title: "Prayer time",
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit quode xercitationem fugit, qui corporis.',
		location: 'India',
		duration: 18,
		cost: 7200,
	},
];
