import type { Project } from '$lib/types/project';
import { Status } from '$lib/types/status';

export const projects: Project[] = [
	{
		id: 0,
		active: true,
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
		content: [
			{
				text: [
					'My portfolio was a small personal project I started, that only I have worked on. The result is the website you are currently visiting.',
					'Because I was the only person involved in this project, I had the full freedom to choose wathever technologies I wanted. When deciding, I recently had some experience with both React and Vue. But I had also recently heard a lot about Svelte and SvelteKit. For me it seemed so simple and elegant and I wanted to try it out for myself. Thats the main reason why this website is build using SvelteKit.',
					"I also wanted to learn more about testing, continuous integration and continuous delivery. Cypress was a tool I had just heard about and started looking more into. I decided to use it for testing in this project, and have not regretted it. Together with cypress I also looked into and added piplines/actions to my GitHub. So whenever I pushed some new code to the repository, it automatically get's build, tested and then published if every test are passed.",
					'The hardest task for this project was probably to come up with a design I was happy with. I wanted something that I was genuenlly happy with and something that fit me as well as it was easy to understand and use. My first version looked OK+, but it had some flaws. Specially for readability. Some of the fonts were very thin and the contrasts between the background and forground made it a little to hard to read.',
					'I completely redesigned the whole page for version 2.0. This is the current design used today. Although I was happy with the first outcome, there was a lot of tweeking throughout the process.',
					"I'm really happy with the result of the current version. But I also think this is a project I will continue developing as I get new ideas for things I want to add."
				]
			}
		]
	},
	{
		id: 1,
		active: true,
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
		content: [
			{
				text: [
					'In my fourth semester of my bachelor I had two courses, web technologies and application development. Throughout the semester, next to the lectures, we had an ongoing project combining what we learned in both the subjects to create a website.',
					'As this was quite a large project, we had to work in group. Both to distribute the work load, but also to get experience working with a team as this is normally how developers work.',
					'The beginning was a lot of planning. Creating wireframes, sketching the design of the database, creating a design guideline etc. We had many team meetings a this point to share and discuss different options and opinions until we were satisfied.',
					'Spring boot was taught in the application coures, so this was the framework we desided to use for our API. As for the frontend, HTML, CSS and JavaScript was taught in the web technologies course, but our group desided to use React as our frontend framework as some members already had some experience with it. For our database we used PostgreSQL, as again, member of the group had experience with it. At the very end of the project we also desided that we were to dockerize our app, to make it easier for production.',
					"Throughout the development github was actively used. Every meeting, we discussed things that needed to be implemented and/or changed and filed it as github issues. With this, it was easy for a single member to pick an issue from the issue list, work with it on a new branch, and then merge it back into the main branch with a simple pull request. This also made it possible to add code review to our workflow. Both to make sure the implemented was ok, but also so members that didn't implement sertain features could understand it by looking through it when it was finished and approve it.",
					'This project was a great success. We reached all our goals and learned a lot along the process.'
				]
			}
		]
	},
	{
		id: 2,
		active: true,
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
		content: [
			{
				text: [
					'In my bachelor thesis, our team focused on developing a comprehensive solution to enhance the productivity of employees in warehouses. These employees are responsible for plucking products from shelves and loading them onto pallets before shipping them to local grocery stores. Currently, they rely solely on a voice-based system, where they communicate through voice commands. However, we aimed to revolutionize this process by creating a mobile application that combines both voice and touch interfaces. This empowers employees to choose the interface that best suits their needs, ensuring a more efficient workflow. While the voice interface offers hands-free operation for driving trucks and plucking products, the touch interface accelerates more complex actions.',
					'Our final product was an iOS application that can be easily downloaded by anyone. The application provides users with the ability to create their own accounts and configure their warehouses with specific locations, products, and employees. Furthermore, we implemented an invitations feature, enabling warehouse leaders to invite other users to join their warehouses. This functionality fosters collaboration and streamlines communication within and across warehouses. Overall, the project was a resounding success, meeting and exceeding the requirements and requests of our employees.',
					'Throughout the development process, our team gained valuable insights and knowledge. We encountered various challenges and learned to navigate them effectively. By working on this project, we honed our skills in iOS application development using SwiftUI, as well as in designing and implementing a robust Spring Boot API to support the warehouse management system. Additionally, we gained a deeper understanding of the user experience and the importance of providing flexible interface options to cater to diverse user preferences and workflows.',
					'The bachelor thesis project not only allowed us to showcase our technical capabilities but also highlighted our ability to understand and address the needs of end-users. By actively involving employees and incorporating their feedback, we ensured that the final product aligned with their requirements and expectations. This experience further solidified our passion for software development and reinforced the value of creating user-centered solutions.',
					'Overall, our bachelor thesis project was a significant achievement, both in terms of technical implementation and fulfilling the needs of warehouse employees. We are proud of the final product we delivered and the knowledge we acquired throughout the process, paving the way for future opportunities in the field of software development.'
				]
			}
		]
	},
	{
		id: 3,
		active: true,
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
		content: [
			{
				text: [
					'In my free time, I am currently developing a CSGO website called CSGO Strats. The idea behind the project is to allow CSGO players to create and share strategies, both publicly with the community and privately with their team members.',
					'The project is open-source and utilizes SvelteKit together with Supabase, providing a developer-friendly full-stack solution. The website is hosted on Netlify, with a CI/CD infrastructure that streamlines the process of pushing new versions.',
					'Several features have already been implemented in the project. First and foremost, there is user authentication available, enabling users to register and log in using their email. Additionally, I have integrated third-party OAuth services such as Discord and GitHub, offering convenient and secure login options. Users have the flexibility to customize their avatars, selecting from a diverse range of profile pictures generated by Midjourney.',
					'Users can create strats that include a collection of nades. For each nade, the user can upload images illustrating how the nades are thrown and where they impact the map. These strats can be shared publicly with the community, or the author of the strat can choose to keep the strat private. By default, private strats can only be viewed by the author, unless the strat is associated with a team (which the author can specify). In that case, the strat will be available to all members of the team.',
					'Version 1.0.0 is out and can be viewed on the live website, with many exciting and interesting ideas for a future version 2.0.0.'
				]
			}
		]
	},
	{
		id: 4,
		active: false,
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
		content: [
			{
				text: [
					'Sphere is a small web application that helps you keep track of your subscriptions. The main idea is to give a quick overview of all your subscription expenses.',
					'The application provides a dashboard that displays the total cost of all your subscriptions, how many subscriptions you have, and which of your subscriptions are the most expensive. In addition, the dashboard provides a table that shows more detailed information about each individual subscription with quick access to actions.',
					"From the dashboard, a user can easily add new subscriptions, update existing ones, or delete subscriptions they no longer need. Additionally, users can choose their preffered currency and period (like monthly, yearly etc.). The application uses this information and calculates the values to the user's desire based on the current exchange rates.",
					'The application is built with SvelteKit and uses Prisma as an ORM to interact with the Postgres database. The UI is built using Shadcn and Tailwind. For authentication, the application implements Lucia which is an auth library that abstracts away the complexity of handling sessions. The application implements PWA with service workers allowing users to download the website as an application on their mobile device. Because of this, the website was developed with a mobile first approach ensuring that it looks great on all screen sizes. Additionally, playwright has been used extensively for testing the server side logic.'
				]
			}
		]
	},
	{
		id: 5,
		active: true,
		title: 'Svelte Param Store',
		thumbnail: {
			path: '/assets/img/projects/svelte-param-store/docs-page.png',
			alt: 'Svelte-param-store documentation landing page'
		},
		images: [
			{
				path: '/assets/img/projects/svelte-param-store/docs-page.png',
				alt: 'Svelte-param-store documentation landing page'
			},
			{
				path: '/assets/img/projects/svelte-param-store/demo.png',
				alt: 'Svelte-param-store demo page'
			}
		],
		status: Status.FINISHED,
		stack: ['SvelteKit', 'NPM', 'Vercel'],
		contributers: [
			{
				name: 'Joakim Edvardsen',
				githubLink: 'https://github.com/jKm00'
			}
		],
		features: [
			'Synchronized app and URL state',
			'Debouncing',
			'Multiple URL params',
			'Programmatically managing',
			'Documentation page',
			'Full usage demo'
		],
		resources: [
			{
				label: 'Npm registry:',
				link: 'https://www.npmjs.com/package/svelte-param-store'
			},
			{
				label: 'Documentation page:',
				link: 'https://svelte-param-store.vercel.app/'
			},
			{
				label: 'Demo page:',
				link: 'https://svelte-param-store.vercel.app/demo'
			},
			{
				label: 'Demo source code:',
				link: 'https://github.com/jKm00/svelte-param-store/tree/main/src/routes/demo'
			},
			{
				label: 'GitHub repository:',
				link: 'https://github.com/jKm00/svelte-param-store'
			}
		],
		desc: 'Svelte-param-store is a npm package I wrote to help manage and synchronize the application and URL state in your SvelteKit applications.',
		content: [
			{
				title: 'What is Svelte-param-store?',
				text: [
					'Svelte-param-store is a npm package I wrote to help manage and synchronize the application and URL state in your SvelteKit applications.',
					'For applications with search functions, you most often want the search filters to be reflected in the URL. This package helps by providing a custom stores that automatically updates the URL when the value of the store changes. The store re-triggers the load function with the new URL params, allowing you to fetch new and filtered data.'
				]
			},
			{
				title: 'Additional features',
				text: [
					'Together with the NPM package, a full documentation page was developed. The documentation page contains usage examples with source code and interactive displays for all the different options provided by the package. Additionally, the documentation page provides tables showcasing the package interface, explaining how to use it.',
					"To get a better understand of the package and it's use case, a full demo was develop showcasing the use of the package. Link to the demo and the demo source code can be found belov."
				]
			},
			{
				title: 'My Relections',
				text: [
					"During the development of this project I learn't a lot about how SvelteKit handles loading of data and how to write generic functions that can be used with different types of inputs. I also learn't a lot about how to make and publish packages with stuff like releases and versioning. Another thing I had to think about was how to communicate the purpose and how to use the package which ended up with the documentation and demo page."
				]
			}
		]
	},
	{
		id: 6,
		active: true,
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
		desc: 'TF2DLE is a Wordle like game for the online game TF2. With daily challenges that reset every day, the players are tasked to find the correct answer for the different game modes in as few guesses as possible.',
		content: [
			{
				title: 'What is TF2DLE?',
				text: [
					'Wordle is a game that has been around for quite some time and different variations of the game have been made like Loldle. TF2DLE is heavily inspired by these games with different game modes and challenges that reset every day.',
					'TF2DLE currently has three different game modes; weapon, map, and cosmetic. In each category the player has to guess todays selected item in as few guesses as possible. The different game modes provide different hints to help the player guess the correct answer. The weapon game mode is more like the traditional Wordle game with color-coded hints. Because of the color hints, a color blind mode is available to help people with impeared vision. The map game mode provides a zoomed in image of the map that zooms out a small amount for each guess. The cosmetic game mode provides three levels of hints (rotation, color, and class) each unlocking after a certain number of guesses.',
					'TF2DLE is meant to be a fun little game that you can use to take a break from your daily tasks. Additionally, you can show your knowledge of the game, bragging to Twitter when you make a good run by utilizing the social media sharing feature.'
				]
			},
			{
				title: 'Built with',
				text: [
					'The application is built with Sveltekit and uses Prisma as an ORM to interact with the Postgres database. The UI is built with Shadcn and Tailwind. Finally it all comes together by being hosted on Vercel for a fast and reliable development experience with CI/CD pipelines.'
				]
			}
		]
	}
];
