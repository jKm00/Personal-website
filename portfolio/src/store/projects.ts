import type { Project } from '../app/types/Project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'XXS - Hiking Equipments',
		thumbnail: {
			path: '/img/projects/xxs/xxs-thumbnail.png',
			alt: 'XXS front page'
		},
		images: [
			{
				path: '/img/projects/xxs/home-page-hero.png',
				alt: 'XXS landing page'
			},
			{
				path: '/img/projects/xxs/home-page-about.PNG',
				alt: 'About xxs'
			},
			{
				path: '/img/projects/xxs/home-page-reviews.PNG',
				alt: 'Reviews'
			},
			{
				path: '/img/projects/xxs/shop-page.PNG',
				alt: 'Shop page'
			},
			{
				path: '/img/projects/xxs/product-page.PNG',
				alt: 'Product page'
			},
			{
				path: '/img/projects/xxs/shopping-page.PNG',
				alt: 'Shopping cart'
			},
			{
				path: '/img/projects/xxs/profile-page.PNG',
				alt: 'Profile page'
			},
			{
				path: '/img/projects/xxs/footer.PNG',
				alt: 'XXS footer'
			}
		],
		status: 'Finished',
		stack: ['React', 'Spring-Boot', 'Docker', 'PostgreSql', 'Nginx'],
		contributers: [
			{
				name: 'falniir',
				githubLink: 'https://github.com/falniir'
			},
			{
				name: 'jKm00',
				githubLink: 'https://github.com/jKm00'
			},
			{
				name: 'Richileu-A-Bailey',
				githubLink: 'https://github.com/Richileu-A-Bailey'
			},
			{
				name: 'TorsteinEide',
				githubLink: 'https://github.com/TorsteinEide'
			}
		],
		features: [
			'User authentication',
			'Shopping cart',
			'Dynamically loaded products',
			'Image showcase with carousels',
			'Admin page for product/user updates'
		],
		githubLink: 'https://github.com/jKm00/hiking-equipment',
		desc: 'As part of my batchelor degree, I together with three other student was given a fictional company selling premium hiking equipment. Together we planned out and developed a webshop selling their products as well as their values. Everything from design to user authentication.',
		text: [
			'In my fourth semester of my batchelor I had two courses, web technologies and application development. Throughout the semester, next to the lectures, we had an on going project combining what we learned in both the subjects to create a website.',
			'As this was quite a large project, we had to work in group. Both to distribute the work load, but also to more experience working with a team as this is normally how developers work.',
			'The beginning was a lot of planning. Creating wireframes, sketching the design of the database, creating a design guideline etc. We had many team meatings a this point to share and discuss different opinions and options until we were satisfied.',
			'Spring boot was taught in the application coures, so this was the framework we desided to use for our API. As for the frontend, HTML, CSS and JavaScript was taught in the web technologies course, but our group desided to use React as our frontend framework as some members already had some experience with it. For our database we used PostgreSQL as again, member of the group had experience with it. At the very end of the project we also desided that we were to dockerize our app, to make it easier for production.',
			"Throughout the development github was actively used. Every meating, we discussed things that needed to be implemented and/or changed and filed it as github issues. With this, it was easy for a single member to pick an issue from the issue list, work with it on a new branch, and then merge it back into the main branch with a simple pull request. This also made it possible to add code review to our workflow. Both to make sure the implemented was ok, but also so members that didn't implement sertain features could understand it by looking through it when it was finished and approve it.",
			'This project was a great success. We reached all our goals and learned a lot along the process.'
		]
	},
	{
		id: 2,
		title: 'CryptoYard',
		thumbnail: {
			path: '/img/projects/cryptoyard-thumbnail-cropeed.png',
			alt: 'Cryptoyard dashboard'
		},
		images: [],
		status: 'On-going',
		stack: ['React', 'Spring-Boot', 'Docker', 'MySQL', 'Apache Kafka', 'Nginx'],
		contributers: [
			{
				name: 'falniir',
				githubLink: 'https://github.com/falniir'
			},
			{
				name: 'Haukaun',
				githubLink: 'https://github.com/Haukaun'
			},
			{
				name: 'hazer98',
				githubLink: 'https://github.com/hazer98'
			},
			{
				name: 'jKm00',
				githubLink: 'https://github.com/jKm00'
			},
			{
				name: 'PMolnes',
				githubLink: 'https://github.com/PMolnes'
			},
			{
				name: 'pr0xity',
				githubLink: 'https://github.com/pr0xity'
			},
			{
				name: 'strazdinsg',
				githubLink: 'https://github.com/strazdinsg'
			},
			{
				name: 'TorsteinEide',
				githubLink: 'https://github.com/TorsteinEide'
			}
		],
		features: [
			'User dashboard',
			'Login / Signup page',
			'Market place to select coins which appears in a users watchlist',
			'Web socket connection to Binance'
		],
		githubLink: 'https://github.com/The-Compilers/CryptoYard',
		desc: "A small hobby project with some students and teachers from my batchelor degree. The idea is to create a crypto bot, selling and purchasing crypto from the market together with a powerfull UI so the end user can have full control over what's going on.",
		text: []
	},
	{
		id: 3,
		title: 'Portfolio',
		thumbnail: {
			path: '/img/projects/portfolio-thumbnail-cropped.png',
			alt: 'Portfolio front page'
		},
		images: [],
		status: 'On-going',
		stack: ['SvelteKit', 'Cypress', 'TypeScript', 'Sass'],
		contributers: [
			{
				name: 'jKm00',
				githubLink: 'https://github.com/jKm00'
			}
		],
		features: ['Server-side rendering', 'On load and scroll animations', 'Data prefecting'],
		githubLink: 'https://github.com/jKm00/Personal-website',
		desc: 'This is the project you are currently visiting. Wanted to try out and learn some new technologies as well as I needed a portfolio to get my name out there. Since this was a solo project I could select the exact technologies I was most interrested in and learned a lot along the way. Such as end-to-end testing, github actions and server-side vs client-side rendering. Had a tun of fun with this project.',
		text: []
	}
];
