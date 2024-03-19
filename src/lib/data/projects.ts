import type { Project } from '$lib/types/project';
import { Status } from '$lib/types/status';

export const projects: Project[] = [
	{
		id: 0,
		title: 'TF2DLE',
		thumbnail: {
			path: '/assets/img/projects/tf2dle/home-page.PNG',
			alt: 'TF2DLE home page'
		},
		images: [
			{
				path: '/assets/img/projects/tf2dle/home-page.PNG',
				alt: 'TF2DLE home page'
			},
			{
				path: '/assets/img/projects/tf2dle/weapon-game-mode.PNG',
				alt: 'Weapon game mode'
			},
			{
				path: '/assets/img/projects/tf2dle/map-game-mode.PNG',
				alt: 'Map game mode'
			},
			{
				path: '/assets/img/projects/tf2dle/cosmetic-game-mode.PNG',
				alt: 'Cosmetic game mode'
			},
			{
				path: '/assets/img/projects/tf2dle/color-blind-mode.PNG',
				alt: 'Color blind mode'
			}
		],
		status: Status.FINISHED,
		stack: ['SvelteKit', 'Postgres', 'Prisma', 'Shadcn', 'Tailwind', 'Vercel'],
		contributers: [
			{
				name: 'Joakim Edvardsen',
				githubLink: 'https://github.com/jKm00'
			}
		],
		features: [
			'Game modes',
			'Daily challenges',
			'Scoreboard',
			'Social media sharing',
			'Color blind mode'
		],
		resources: [
			{
				label: 'Live website:',
				link: 'https://tf2dle.com/'
			},
			{
				label: 'Repository:',
				link: 'https://github.com/jKm00/tf2dle'
			}
		],
		desc: 'TF2DLE is a wordle like game for the online game TF2. With daily challenges that reset every day, the players are tasked to find the correct answer for the different game modes in as few guesses as possible.',
		text: []
	},
	{
		id: 1,
		title: 'Sphere',
		thumbnail: {
			path: '/assets/img/projects/sphere/dashboard.PNG',
			alt: 'Sphere dashboard'
		},
		images: [
			{
				path: '/assets/img/projects/sphere/landing-page.PNG',
				alt: 'Landing page'
			},
			{
				path: '/assets/img/projects/sphere/login-page.PNG',
				alt: 'Login page'
			},
			{
				path: '/assets/img/projects/sphere/dashboard.PNG',
				alt: 'Dashboard'
			},
			{
				path: '/assets/img/projects/sphere/light-mode.PNG',
				alt: 'Light mode'
			}
		],
		status: Status.FINISHED,
		stack: ['SvelteKit', 'Postgres', 'Prisma', 'Lucia', 'Shadcn', 'Tailwind', 'Playwright'],
		contributers: [
			{
				name: 'Joakim Edvardsen',
				githubLink: 'https://github.com/jKm00'
			}
		],
		features: [
			'Email authentication',
			'OAuth',
			'Light/Dark mode',
			'Progressive web app',
			'Playwright testing'
		],
		resources: [
			{
				label: 'Live website:',
				link: 'https://sphere.edvardsen.dev/'
			},
			{
				label: 'Repository:',
				link: 'https://github.com/jKm00/sphere'
			}
		],
		desc: 'Sphere is an application that helps you keep track of your subscriptions. With a dashboard that shows you the total cost of all your subscriptions, as well as a list of all your subscriptions and the ability to add new ones.',
		text: []
	},
	{
		id: 2,
		title: 'CSGO Nade App',
		thumbnail: {
			path: '/assets/img/projects/csgostrats/view-strat.PNG',
			alt: 'Viewing a CS:GO strat'
		},
		images: [
			{
				path: '/assets/img/projects/csgostrats/landing-page.PNG',
				alt: 'Landing page'
			},
			{
				path: '/assets/img/projects/csgostrats/create-strat.PNG',
				alt: 'Strat editor'
			},
			{
				path: '/assets/img/projects/csgostrats/strats.PNG',
				alt: 'Available strats'
			},
			{
				path: '/assets/img/projects/csgostrats/filters.PNG',
				alt: 'Search with filters'
			},
			{
				path: '/assets/img/projects/csgostrats/view-strat.PNG',
				alt: 'View strat'
			},
			{
				path: '/assets/img/projects/csgostrats/view-nade.PNG',
				alt: 'View nade'
			},
			{
				path: '/assets/img/projects/csgostrats/settings-page.PNG',
				alt: 'User settings'
			},
			{
				path: '/assets/img/projects/csgostrats/custom-avatar.PNG',
				alt: 'Custom profile avatar'
			}
		],
		status: Status.IN_PROGRESS,
		stack: ['SvelteKit', 'Supabase', 'Netlify', 'Tailwind', 'TypeScript'],
		contributers: [
			{
				name: 'Joakim Edvardsen',
				githubLink: 'https://github.com/jKm00'
			}
		],
		features: [
			'User authentiation with third party OAuth',
			'Custom avatar',
			'Create a CS:GO team',
			'Create strats with image uploads',
			'Share strats publicly or with team member',
			'Search for strats one different CS:GO maps'
		],
		resources: [
			{
				label: 'Repository:',
				link: 'https://github.com/jKm00/csgo-nade-app'
			},
			{
				label: 'Live website:',
				link: 'https://csgostrats.com/'
			}
		],
		desc: 'CSGO Strats is an open-source project to create a CSGO website where players can create and share strategies with the community and their teams. With user authentication, team and start creation, and the ability to upload images illustrating nade lineups, CSGO Strats provides a platform for gamers to enhance their gameplay.',
		text: [
			'In my free time, I am currently developing a CSGO website called CSGO Strats. The idea behind the project is to allow CSGO players to create and share strategies, both publicly with the community and privately with their team members.',
			'The project is open-source and utilizes SvelteKit together with Supabase, providing a developer-friendly full-stack solution. The website is hosted on Netlify, with a CI/CD infrastructure that streamlines the process of pushing new versions.',
			'Several features have already been implemented in the project. First and foremost, there is user authentication available, enabling users to register and log in using their email. Additionally, I have integrated third-party OAuth services such as Discord and GitHub, offering convenient and secure login options. Users have the flexibility to customize their avatars, selecting from a diverse range of profile pictures generated by Midjourney.',
			'Users can create strats that include a collection of nades. For each nade, the user can upload images illustrating how the nades are thrown and where they impact the map. These strats can be shared publicly with the community, or the author of the strat can choose to keep the strat private. By default, private strats can only be viewed by the author, unless the strat is associated with a team (which the author can specify). In that case, the strat will be available to all members of the team.',
			'Version 1.0.0 is out and can be viewed on the live website, with many exciting and interesting ideas for a future version 2.0.0.'
		]
	},
	{
		id: 3,
		title: 'Trace Voice Pick',
		thumbnail: {
			path: '/assets/img/projects/voice-pick/figma-sketches.PNG',
			alt: 'Figma sketches of the iOS application'
		},
		images: [
			{
				path: '/assets/img/projects/voice-pick/figma-sketches.PNG',
				alt: 'Figma sketches of the iOS application'
			},
			{
				path: '/assets/img/projects/voice-pick/managment-pages.PNG',
				alt: 'Warehouse management pages'
			},
			{
				path: '/assets/img/projects/voice-pick/profile-pages.PNG',
				alt: 'Profile pages'
			},
			{
				path: '/assets/img/projects/voice-pick/mati-trucking.jpeg',
				alt: 'Mateusz driving a truck'
			},
			{
				path: '/assets/img/projects/voice-pick/swift-page-diagram.png',
				alt: 'iOS application flow chart',
				fit: 'contain'
			}
		],
		status: Status.FINISHED,
		stack: ['SwiftUI', 'Spring-boot', 'PostgreSQL', 'Docker', 'Keycloak'],
		contributers: [
			{
				name: 'Joakim Edvardsen',
				githubLink: 'https://github.com/jKm00'
			},
			{
				name: 'Petter Molnes',
				githubLink: 'https://github.com/PMolnes'
			},
			{
				name: 'Mateusz Picheta',
				githubLink: 'https://github.com/tama3ti'
			},
			{
				name: 'Håkon Sætre',
				githubLink: 'https://github.com/Haukaun'
			}
		],
		features: [
			'User authentication',
			'Speech recognition',
			'Text to speech',
			'Touch and voice interface',
			'Warehouse management'
		],
		resources: [
			{
				label: 'Read our thesis at:',
				link: 'https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3076971'
			},
			{
				label: 'Swift frontend repository:',
				link: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-frontend'
			},
			{
				label: 'Spring-boot API repository:',
				link: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-backend'
			},
			{
				label: 'YouTube video showing application in action:',
				link: 'https://youtu.be/ldt2QxZ4jbU'
			}
		],
		desc: 'My bachelor thesis project involved the development of a comprehensive iOS application using SwiftUI for efficient product plucking in a warehouse setting. The application incorporated a unique concept where employees could simultaneously utilize voice and touch interfaces for seamless plucking operations. Additionally, we designed and implemented a robust Spring Boot API to support a fully functional warehouse management system.',
		text: [
			'In my bachelor thesis, our team focused on developing a comprehensive solution to enhance the productivity of employees in warehouses. These employees are responsible for plucking products from shelves and loading them onto pallets before shipping them to local grocery stores. Currently, they rely solely on a voice-based system, where they communicate through voice commands. However, we aimed to revolutionize this process by creating a mobile application that combines both voice and touch interfaces. This empowers employees to choose the interface that best suits their needs, ensuring a more efficient workflow. While the voice interface offers hands-free operation for driving trucks and plucking products, the touch interface accelerates more complex actions.',
			'Our final product was an iOS application that can be easily downloaded by anyone. The application provides users with the ability to create their own accounts and configure their warehouses with specific locations, products, and employees. Furthermore, we implemented an invitations feature, enabling warehouse leaders to invite other users to join their warehouses. This functionality fosters collaboration and streamlines communication within and across warehouses. Overall, the project was a resounding success, meeting and exceeding the requirements and requests of our employees.',
			'Throughout the development process, our team gained valuable insights and knowledge. We encountered various challenges and learned to navigate them effectively. By working on this project, we honed our skills in iOS application development using SwiftUI, as well as in designing and implementing a robust Spring Boot API to support the warehouse management system. Additionally, we gained a deeper understanding of the user experience and the importance of providing flexible interface options to cater to diverse user preferences and workflows.',
			'The bachelor thesis project not only allowed us to showcase our technical capabilities but also highlighted our ability to understand and address the needs of end-users. By actively involving employees and incorporating their feedback, we ensured that the final product aligned with their requirements and expectations. This experience further solidified our passion for software development and reinforced the value of creating user-centered solutions.',
			'Overall, our bachelor thesis project was a significant achievement, both in terms of technical implementation and fulfilling the needs of warehouse employees. We are proud of the final product we delivered and the knowledge we acquired throughout the process, paving the way for future opportunities in the field of software development.'
		]
	},
	{
		id: 4,
		title: 'XXS - Hiking Equipments',
		thumbnail: {
			path: '/assets/img/projects/xxs/xxs-thumbnail-compressed.jpg',
			alt: 'XXS front page'
		},
		images: [
			{
				path: '/assets/img/projects/xxs/home-page-hero-compressed.jpg',
				alt: 'XXS landing page'
			},
			{
				path: '/assets/img/projects/xxs/home-page-about-compressed.jpg',
				alt: 'About xxs'
			},
			{
				path: '/assets/img/projects/xxs/home-page-reviews-compressed.jpg',
				alt: 'Reviews'
			},
			{
				path: '/assets/img/projects/xxs/shop-page-compressed.jpg',
				alt: 'Shop page'
			},
			{
				path: '/assets/img/projects/xxs/product-page-compressed.jpg',
				alt: 'Product page'
			},
			{
				path: '/assets/img/projects/xxs/shopping-cart-compressed.jpg',
				alt: 'Shopping cart'
			},
			{
				path: '/assets/img/projects/xxs/profile-page-compressed.jpg',
				alt: 'Profile page'
			},
			{
				path: '/assets/img/projects/xxs/footer-compressed.jpg',
				alt: 'XXS footer'
			}
		],
		status: Status.FINISHED,
		stack: ['React', 'Spring-Boot', 'Docker', 'PostgreSql', 'Nginx'],
		contributers: [
			{
				name: 'Eduard Christea',
				githubLink: 'https://github.com/falniir'
			},
			{
				name: 'Joakim Edvardsen',
				githubLink: 'https://github.com/jKm00'
			},
			{
				name: 'Richileu Bailey',
				githubLink: 'https://github.com/Richileu-A-Bailey'
			},
			{
				name: 'Torstein Eide',
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
		resources: [
			{
				label: 'Repository:',
				link: 'https://github.com/jKm00/hiking-equipment'
			}
		],
		desc: 'As part of my bachelor degree, I together with three other students was given a fictional company selling premium hiking equipment. Together we planned out and developed a webshop selling their products as well as their values. Everything from design to implementation.',
		text: [
			'In my fourth semester of my bachelor I had two courses, web technologies and application development. Throughout the semester, next to the lectures, we had an ongoing project combining what we learned in both the subjects to create a website.',
			'As this was quite a large project, we had to work in group. Both to distribute the work load, but also to get experience working with a team as this is normally how developers work.',
			'The beginning was a lot of planning. Creating wireframes, sketching the design of the database, creating a design guideline etc. We had many team meetings a this point to share and discuss different options and opinions until we were satisfied.',
			'Spring boot was taught in the application coures, so this was the framework we desided to use for our API. As for the frontend, HTML, CSS and JavaScript was taught in the web technologies course, but our group desided to use React as our frontend framework as some members already had some experience with it. For our database we used PostgreSQL, as again, member of the group had experience with it. At the very end of the project we also desided that we were to dockerize our app, to make it easier for production.',
			"Throughout the development github was actively used. Every meeting, we discussed things that needed to be implemented and/or changed and filed it as github issues. With this, it was easy for a single member to pick an issue from the issue list, work with it on a new branch, and then merge it back into the main branch with a simple pull request. This also made it possible to add code review to our workflow. Both to make sure the implemented was ok, but also so members that didn't implement sertain features could understand it by looking through it when it was finished and approve it.",
			'This project was a great success. We reached all our goals and learned a lot along the process.'
		]
	},
	// {
	// 	id: 2,
	// 	title: 'CryptoYard',
	// 	thumbnail: {
	// 		path: '/assets/img/projects/cryptoyard/cryptoyard-thumbnail-cropped.png',
	// 		alt: 'Cryptoyard dashboard'
	// 	},
	// 	images: [
	// 		{
	// 			path: '/assets/img/projects/cryptoyard/cryptoyard-dashbord-compressed.jpg',
	// 			alt: 'Cryptoyard dashboard'
	// 		},
	// 		{
	// 			path: '/assets/img/projects/cryptoyard/signin-page-compressed.jpg',
	// 			alt: 'Signin page'
	// 		},
	// 		{
	// 			path: '/assets/img/projects/cryptoyard/signup-page-compressed.jpg',
	// 			alt: 'Signup page'
	// 		},
	// 		{
	// 			path: '/assets/img/projects/cryptoyard/market-compressed.jpg',
	// 			alt: 'Market place'
	// 		}
	// 	],
	// 	status: Status.IN_PROGRESS,
	// 	stack: ['React', 'Spring-Boot', 'Docker', 'MySQL', 'Apache Kafka', 'Nginx'],
	// 	contributers: [
	// 		{
	// 			name: 'falniir',
	// 			githubLink: 'https://github.com/falniir'
	// 		},
	// 		{
	// 			name: 'Haukaun',
	// 			githubLink: 'https://github.com/Haukaun'
	// 		},
	// 		{
	// 			name: 'hazer98',
	// 			githubLink: 'https://github.com/hazer98'
	// 		},
	// 		{
	// 			name: 'jKm00',
	// 			githubLink: 'https://github.com/jKm00'
	// 		},
	// 		{
	// 			name: 'PMolnes',
	// 			githubLink: 'https://github.com/PMolnes'
	// 		},
	// 		{
	// 			name: 'pr0xity',
	// 			githubLink: 'https://github.com/pr0xity'
	// 		},
	// 		{
	// 			name: 'strazdinsg',
	// 			githubLink: 'https://github.com/strazdinsg'
	// 		},
	// 		{
	// 			name: 'TorsteinEide',
	// 			githubLink: 'https://github.com/TorsteinEide'
	// 		}
	// 	],
	// 	features: [
	// 		'User dashboard',
	// 		'Login / Signup page',
	// 		'Market place to select coins which appears in a users watchlist',
	// 		'Web socket connection to Binance'
	// 	],
	// 	githubLink: 'https://github.com/The-Compilers/CryptoYard',
	// 	desc: "A small hobby project with some students and teachers from my batchelor degree. The idea is to create a crypto bot, selling and purchasing crypto from the market together with a powerfull UI so the end user can have full control over what's going on.",
	// 	text: [
	// 		"To start a little developer community in our class some students together with a teacher started a project, creating a crypto bot. The main purpose is to learn technologies relevant in real-life projects, build a developer's portfolio and have fun socialising with people of same interrested.",
	// 		'We started with a meating discussing what technologies we where to use for the project and ended up with spring-boot for our backend API, react for our frontend, MySQL for database, apache kafka for message sharing and ngnix as a server proxy.',
	// 		"So far we have implemented a dashboard where the user should be able to see their watched coins with relevant information. Such as how much they have invested in each coin, the current price etc. We've also implemented login and signup pages for the frontend, but the authentication logic is still to be implemented.",
	// 		'Come back for more updates 😉'
	// 	]
	// },
	{
		id: 5,
		title: 'Portfolio',
		thumbnail: {
			path: '/assets/img/projects/portfolio/portfolio-thumbnail-cropped-compressed.jpg',
			alt: 'Portfolio front page'
		},
		images: [
			{
				path: '/assets/img/projects/portfolio/landing-page-compressed.jpg',
				alt: 'Portfolio landing page'
			},
			{
				path: '/assets/img/projects/portfolio/about-compressed.jpg',
				alt: 'About section'
			},
			{
				path: '/assets/img/projects/portfolio/technologies-compressed.jpg',
				alt: 'Technology cards'
			},
			{
				path: '/assets/img/projects/portfolio/projects-compressed.jpg',
				alt: 'Projects list'
			},
			{
				path: '/assets/img/projects/portfolio/project-top-compressed.jpg',
				alt: 'Specific project landing page'
			},
			{
				path: '/assets/img/projects/portfolio/project-body-compressed.jpg',
				alt: 'Content of specific project'
			},
			{
				path: '/assets/img/projects/portfolio/resume-compressed.jpg',
				alt: 'Resume'
			},
			{
				path: '/assets/img/projects/portfolio/footer-compressed.jpg',
				alt: 'Portfolio footer'
			}
		],
		status: Status.FINISHED,
		stack: ['SvelteKit', 'Cypress', 'TypeScript', 'Sass'],
		contributers: [
			{
				name: 'jKm00',
				githubLink: 'https://github.com/jKm00'
			}
		],
		features: ['Server-side rendering', 'On load and scroll animations', 'Data prefecting'],
		resources: [
			{
				label: 'Repository: ',
				link: 'https://github.com/jKm00/Personal-website'
			}
		],
		desc: 'This is the project you are currently visiting. Wanted to try out and learn some new technologies as well as I needed a portfolio to get my name out there. Since this was a solo project I could select the exact technologies I was most interrested in and learned a lot along the way. Such as end-to-end testing, github actions and server-side vs client-side rendering. Had a ton of fun with this project.',
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
