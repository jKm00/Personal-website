import type { Project } from '../app/types/Project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'XXS - Hiking Equipments',
		thumbnail: {
			path: '/img/projects/xxs/xxs-thumbnail-compressed.jpg',
			alt: 'XXS front page'
		},
		images: [
			{
				path: '/img/projects/xxs/home-page-hero-compressed.jpg',
				alt: 'XXS landing page'
			},
			{
				path: '/img/projects/xxs/home-page-about-compressed.jpg',
				alt: 'About xxs'
			},
			{
				path: '/img/projects/xxs/home-page-reviews-compressed.jpg',
				alt: 'Reviews'
			},
			{
				path: '/img/projects/xxs/shop-page-compressed.jpg',
				alt: 'Shop page'
			},
			{
				path: '/img/projects/xxs/product-page-compressed.jpg',
				alt: 'Product page'
			},
			{
				path: '/img/projects/xxs/shopping-cart-compressed.jpg',
				alt: 'Shopping cart'
			},
			{
				path: '/img/projects/xxs/profile-page-compressed.jpg',
				alt: 'Profile page'
			},
			{
				path: '/img/projects/xxs/footer-compressed.jpg',
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
			path: '/img/projects/cryptoyard/cryptoyard-thumbnail-cropped.png',
			alt: 'Cryptoyard dashboard'
		},
		images: [
			{
				path: '/img/projects/cryptoyard/cryptoyard-dashbord-compressed.jpg',
				alt: 'Cryptoyard dashboard'
			},
			{
				path: '/img/projects/cryptoyard/signin-page-compressed.jpg',
				alt: 'Signin page'
			},
			{
				path: '/img/projects/cryptoyard/signup-page-compressed.jpg',
				alt: 'Signup page'
			},
			{
				path: '/img/projects/cryptoyard/market-compressed.jpg',
				alt: 'Market place'
			}
		],
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
		text: [
			"To start a little developer community in our class some students together with a teacher started a project, creating a crypto bot. The main purpose is to learn technologies relevant in real-life projects, build a developer's portfolio and have fun socialising with people of same interrested.",
			'We started with a meating discussing what technologies we where to use for the project and ended up with spring-boot for our backend API, react for our frontend, MySQL for database, apache kafka for message sharing and ngnix as a server proxy.',
			"So far we have implemented a dashboard where the user should be able to see their watched coins with relevant information. Such as how much they have invested in each coin, the current price etc. We've also implemented login and signup pages for the frontend, but the authentication logic is still to be implemented.",
			'Come back for more updates 😉'
		]
	},
	{
		id: 3,
		title: 'Portfolio',
		thumbnail: {
			path: '/img/projects/portfolio/portfolio-thumbnail-cropped-compressed.jpg',
			alt: 'Portfolio front page'
		},
		images: [
			{
				path: '/img/projects/portfolio/landing-page-compressed.jpg',
				alt: 'Portfolio landing page'
			},
			{
				path: '/img/projects/portfolio/about-compressed.jpg',
				alt: 'About section'
			},
			{
				path: '/img/projects/portfolio/technologies-compressed.jpg',
				alt: 'Technology cards'
			},
			{
				path: '/img/projects/portfolio/projects-compressed.jpg',
				alt: 'Projects list'
			},
			{
				path: '/img/projects/portfolio/project-top-compressed.jpg',
				alt: 'Specific project landing page'
			},
			{
				path: '/img/projects/portfolio/project-body-compressed.jpg',
				alt: 'Content of specific project'
			},
			{
				path: '/img/projects/portfolio/resume-compressed.jpg',
				alt: 'Resume'
			},
			{
				path: '/img/projects/portfolio/footer-compressed.jpg',
				alt: 'Portfolio footer'
			}
		],
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
		text: [
			'My portfolio was a small personal project I started, that only I have worked on. The result is the website you are currently visiting.',
			'Because I was the only person involved in this project, I had the full freedom to choose wathever technologies I wanted. When deciding, I recently had some experience with both React and Vue. But I had also recently heard a lot about Svelte and SvelteKit. For me it seemed so simple and elegant and I wanted to try it out for myself. Thats the main reason why this website is build using SvelteKit.',
			"I also wanted to learn more about testing, continuous integration and continuous delivery. Cypress was a tool I had just heard about and started looking more into. I decided to use it for testing in this project, and have not regretted it. Together with cypress I also looked into and added piplines/actions to my GitHub. So whenever I pushed some new code to the repository, it automatically get's build, tested and then published if every test are passed.",
			'The hardest task for this project was probably to come up with a design I was happy with. I wanted something that I was genuenlly happy with and something that fit me as well as it was easy to understand and use. My first version looked OK+, but it had some flaws. Specially for readability. Some of the fonts were very thin and the contrasts between the background and forground made it a little to hard to read.',
			'I completely redesigned the whole page for version 2.0. This is the current design used today. Although I was happy with the first outcome, there was a lot of tweeking throughout the process.',
			"I'm really happy with the result of the current version. But I also think this is a project I will continue developing as I get new ideas for things I want to add."
		]
	}
];
