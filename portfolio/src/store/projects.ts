import type { Project } from '../app/types/Project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'XXS Hiking Equipment',
		desc: 'Webshop project during my batchelor degree with three other students',
		text: [
			'Me along with three other studentes where tasked to create a webshop for a fictional company selling premium hikinh equipment.'
		],
		images: [
			{
				path: '/img/projects/front-page.png',
				alt: 'XXS front page'
			}
		]
	},
	{
		id: 2,
		title: 'CryptoYard',
		desc: 'A fun project with some students and teachers at NTNU. Just as a hobby project next to the studies.',
		text: [
			'Me along with three other studentes where tasked to create a webshop for a fictional company selling premium hikinh equipment.'
		],
		images: [
			{
				path: '/img/projects/cryptoyard.png',
				alt: 'Cryptoyard front page'
			}
		]
	}
];
