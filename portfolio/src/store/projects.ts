import type { Project } from '../app/types/Project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'XXS - Hiking Equipments',
		status: 'Finished',
		stack: ['React', 'Spring-Boot', 'Docker', 'PostgreSql', 'Nginx'],
		features: [],
		desc: 'As part of my batchelor degree, I together with three other student was given a fictional company selling premium hiking equipment. Together we planned out and developed a webshop selling their products as well as their values. Everything from design to user authentication.',
		text: [],
		thumbnail: {
			path: '/img/projects/xxs-thumbnail.png',
			alt: 'XXS front page'
		},
		images: [
			{
				path: '/img/projects/xxs-frontpage.png',
				alt: 'XXS front page'
			}
		]
	},
	{
		id: 2,
		title: 'CryptoYard',
		status: 'On-going',
		stack: ['React', 'Spring-Boot', 'Docker', 'MySQL', 'Apache Kafka', 'Nginx'],
		features: [],
		desc: "A small hobby project with some students and teachers from my batchelor degree. The idea is to create a crypto bot, selling and purchasing crypto from the market together with a power full UI so the end user can have full control over what's going on.",
		text: [],
		thumbnail: {
			path: '/img/projects/cryptoyard-thumbnail-cropeed.png',
			alt: 'Cryptoyard dashboard'
		},
		images: []
	},
	{
		id: 3,
		title: 'Portfolio',
		status: 'Finished',
		stack: ['SvelteKit', 'Cypress', 'TypeScript', 'Sass'],
		features: [],
		desc: 'This is the project you are currently visiting. Wanted to try out and learn some new technologies as well as I needed a portfolio to get my name out there. Since this was a solo project I could select the exact technologies I was most interrested in and learned a lot along the way. Such as end-to-end testing, github actions and server-side vs client-side rendering. Had a tun of fun with this project.',
		text: [],
		thumbnail: {
			path: '/img/projects/portfolio-thumbnail-cropped.png',
			alt: 'Portfolio front page'
		},
		images: []
	}
];
