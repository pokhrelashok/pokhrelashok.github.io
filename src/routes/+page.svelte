<script>
	import '../app.scss';
	let services = [
		{
			title: 'Frontend Development',
			tech: 'HTML5 | CSS3 | Bootstrap |Tailwind | Vue | React',
			description: `Design and Development of <strong>minimal</strong> and <strong>modern</strong> looking
            websites, using <strong>modern frontend technologies</strong>`,
			icon: 'fas fa-laptop'
		},
		{
			title: 'Backend Development',
			icon: 'fas fa-laptop-code',
			tech: 'PHP | Laravel | MySql | Digital Ocean',
			description: `Development of <strog>fast</strog> and <reliable>reliable</reliable> backend services`
		},
		{
			icon: 'fas fa-mobile',
			title: 'Mobile Development',
			tech: 'Flutter | React Native',
			description: `Development of <strong>cross platform</strong> mobile applications`
		}
	];
	let projects = [
		{
			image: 'images/project-ludo.webp',
			isPersonal: true,
			duration: 'Oct 5, 2019 - Nov 14, 2019',
			title: 'Multiplayer Ludo',
			subtitle: 'A Realtime Multiplayer Game',
			url: 'https://ludo-nodejs.herokuapp.com/',
			tags: ['Express JS', 'Socket', 'HTML, CSS & JS'],
			description:
				'<span>This is the project that set things in motion for me. This was the project that taught me about client/server architecture and introduced me to real-time socket programming. You can view the source code below.</span>',
			tasks: [
				'Game logic',
				'Using socket for real time gameplay and messaging',
				'Managing players and game rooms'
			],
			repo: 'https://github.com/pokhrelashok/pokhrelashok.github.io'
		},
		{
			image: 'images/project-otzivio.webp',
			duration: 'Feb 24, 2021 - Jun 25, 2021',
			title: 'Otzivio',
			subtitle: 'A Business Review Platform',
			url: 'https://otziv.io/en',
			tags: ['Laravel', 'Vue', 'Bootstrap', 'Stripe'],
			description: `<span>
                    This was my first freelance venture. I was hired to work on Otzivio as a Fullstack Developer. The
                    website functioned similar to <a href="https://www.trustpilot.com/"
                    target="_blank">Trustpilot</a>
                    in a sense that it collected reviews from people and listed them in one place. Furthermore businesses
                    can setup hooks to automatically send reviews to customers that shop on their websites or use their
                    services.
                </span>`,
			tasks: [
				'Facebook & Google Login Integration',
				'Website wide search integration and optimization',
				'Payment integration using stripe',
				'Email hooks setup for shopify, woo commerce',
				'Data import using excel',
				'Automatic review collection system',
				'Server setup and management along with cronjobs'
			],
			repo: 'https://www.upwork.com/freelancers/~018a401af87ac143b9?p=1404058023203397632'
		},
		{
			image: 'images/project-flyerroom.webp',
			duration: 'Jul 2, 2021 - Sep 29, 2021',
			title: 'Flyerroom',
			subtitle: 'A  Flyer Design Platform',
			url: 'https://flyerroom.com',
			tags: ['Laravel', 'Vue', 'Fabric JS', 'Bootstrap', 'Stripe'],
			description: `<span>
                The idea of the project was to create
                a website that would contain Flyer designs for Real Estate Agents. The admin would have to be able to
                build templates on the website, and the customers
                would select a design they like, and edit the template and create their Flyers from it.
                </span>`,
			tasks: [
				'Highly customizable Template Editor creation',
				'Admin dashboard and User Dashboard and Landing pages',
				'Payment integration using stripe',
				'Server setup and management along with cronjobs'
			],
			repo: 'https://www.upwork.com/freelancers/~018a401af87ac143b9?p=1404058023203397632'
		},
		{
			image: 'images/project-gec.webp',
			duration: 'Apr 8, 2021 - Feb 3, 2022',
			title: 'Global English Campus',
			subtitle: 'An Interactive English School',
			url: 'https://globalenglishcampus.com/',
			tags: ['Vue', 'Vuex'],
			description: `<span>
                I worked as a Frontend Developer in this project. The platform lets students learn english by making
                them solve interactive problems.
                </span>`,
			tasks: [
				'Facebook & Google Login Integration',
				'Interactive problems: Match the following, Fill in the blanks',
				'Student attention & performance tracking',
				'Problem template creation for teachers'
			],
			repo: 'https://www.upwork.com/freelancers/~018a401af87ac143b9?p=1404069909685145600'
		},
		{
			image: 'images/project-monopoly.webp',
			duration: 'Jan 29, 2022 - Mar 11, 2022',
			title: 'Playsmart Monopoly',
			subtitle: 'An educational mobile game',
			url: 'https://play.google.com/store/apps/details?id=com.reflex.playsmart',
			tags: ['React Native', 'Redux', 'Expo'],
			description: `<span>
					Hired by the folks at <strong><a target="_blank" href="https://reflexitsolution.com/">Reflex IT Solution</a></strong>, this is probably the biggest solo project
					i have worked on. Playsmart Monopoly aims to cultivate financial literacy in children through an interactive multiplayer game. 
                </span>`,
			tasks: ['UI Development', 'Game logic integration', 'Pass-Device multiplayer implementation'],
			repo: 'https://play.google.com/store/apps/details?id=com.reflex.playsmart'
		},
		{
			image: 'images/project-beercrawl.webp',
			duration: 'Mar 14, 2022 - June 22, 2022',
			title: 'Beercrawl',
			subtitle: 'A Beer listing & review management platform',
			url: 'https://bcfront.communicationinnovations.com.au/',
			tags: ['Laravel', 'Vue', 'Bootstrap'],
			description: `<span>
                I was hired as a solo Fullstack developer to rebuild (old beercrawl website was written in PHP) the
                website using Vue and Laravel. The system has multiple levels of users including Venue, Brewery and the
                Customers itself.
                </span>`,
			tasks: [
				'Facebook & Google Login Integration',
				'Roles & Permissions',
				'Database schema design',
				'Frontend application development'
			],
			repo: 'https://www.upwork.com/freelancers/~018a401af87ac143b9?p=1546304873584611328'
		},
		{
			image: 'images/project-timewise.webp',
			duration: 'Sept 30, 2022 - Jun 15, 2023',
			title: 'Timewise',
			subtitle: 'An Appointment & Class booking platform',
			url: 'https://timewise.com',
			tags: ['React', 'GraphQL', 'Redux'],
			description: `<span>
               Working on the Forntend of a pretty big application with a bunch of talanted developers.
                </span>`,
			tasks: [
				'Landing page development',
				'Dashboard UI redesign',
				'A bunch of feature implementations in the customer/staff app'
			],
			repo: ''
		},
		{
			isPersonal: true,
			image: 'images/project-share-sathi.webp',
			duration: 'Nov 27, 2023 - Nov 30, 2023',
			title: 'Share Sathi',
			subtitle: 'A Meroshare Helper',
			url: '',
			tags: ['Tauri', 'Next', 'Rust', 'Typescript'],
			description: `<span>
              A meroshare helper app built using tauri. Just a fun project to learn some new tech. Useful & rewarding																														
                </span>`,
			tasks: ['Application development in tauri using rust'],
			repo: 'https://github.com/pokhrelashok/share-sathi'
		}
	];
	let events = [
		{
			date: '2016',
			title: 'Started Learning Design',
			description: `I didnot get into programming until much later. Before that I played around with photoshop, illustrator and 3d rendering in blender. This helped me accumulate some frontend skills.`
		},
		{
			date: '2019',
			title: 'Started Web Development',
			description: `I started learning HTML & CSS but I wasn't much hooked until I learnt Javascript. The possibilities of things I could create while sitting on my desk blew my mind.`
		},
		{
			title: 'That One Big Project',
			date: '2019, October 1',
			description: `This one fine day, i decided to give myself a challange. I started working on a multiplayer ludo game.
            Until then I didnot have any experience with backend Programming and barely understood how it worked. This one project
						taught me all about the client/server architecture and how the web worked.`
		},
		{
			title: 'First Job',
			date: '2019, November 20',
			description: `With the help of a friend, I landed my first job. I started working for a firm named <em><a
                href="https://alphatech.com.np/">Alphatech</a></em>.
            I worked on multiple project, learned Laravel & Vue. I learned a lot about writing clean &
            maintainable code.`
		},
		{
			title: 'New Chapter',
			date: '2021, May',
			description: `I left the company and started working as a Freelancer. It has been a scary but very rewarding experience. I have been very fortunate
									to have gotten to work with amazing teams on some very cool projects.`
		}
	];
	const reviews = [
		'Great work ethic and excellent skill set',
		'Looking forward to working together again',
		"Can't over-state the value that Ashok brought",
		'Amazing technical skills and quality as a person',
		'Always on time for meetings and available at short notice',
		'Knowledge of Laravel was very helpful',
		'Suggestions for architecture and web page design were very helpful',
		'Proactively gave advice for improvements',
		'Another excellent project completed by Ashok',
		'Commitment to the job is outstanding',
		'Successfully analyzed and produced an identical front-end',
		'Impressive developer',
		'Thanks for the nice work done'
	];
</script>

<div>
	<!-- SCROLL TO TOP BUTTON -->
	<div class="scroll-top">
		<i class="fas fa-arrow-up" />
	</div>

	<!--  END SCROLL TO TOP BUTTON -->

	<!-- NAVIGATION SECTION STARTS-->
	<section id="navigation">
		<div class="logo">
			<h1 class="subheading typewriter">Ashok Pahadi</h1>
		</div>
		<div class="nav-icon">
			<i class="fas fa-bars" />
		</div>
	</section>
	<section id="nav-content">
		<div class="close-btn">
			<i class="fas fa-times" />
		</div>
		<div class="wrapper">
			<h2 class="section-heading" data-outline="Menu">Menu</h2>
			<nav>
				<ul>
					<li><a data-text="Home" href="#hero">Home</a></li>
					<li><a data-text="About" href="#about">About</a></li>
					<li>
						<a data-text="Services" href="#services">Services</a>
					</li>
					<li>
						<a data-text="Timleline" href="#timeline">Timleline</a>
					</li>
					<li>
						<a data-text="Projects" href="#projects">Projects</a>
					</li>
					<li><a data-text="Contact" href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</section>
	<!-- NAVIGATION SECTION STARTS-->
	<!-- HERO SECTION STARTS-->
	<section id="hero">
		<div class="container">
			<div class="left">
				<p class="subheading">I am based in Hetauda, Nepal</p>
				<h2 class="heading">
					<div class="wrapper">
						<span>Fullstack</span>
						<span>Developer</span>
					</div>
				</h2>
				<p class="desc">
					Hi, my name is Ashok Pahadi. I create <strong>beautiful</strong>, <strong>fast</strong>
					and
					<strong>functional</strong> web applications.
				</p>
				<div class="button">
					<a href="#projects" class="primary-btn">View Projects</a>
					<a href="#contact" class="primary-btn outline">Hire Me</a>
				</div>
			</div>
			<div class="right">
				<img src={`images/dp.jpg`} alt="ashok pahadi headshot" />
			</div>
		</div>
	</section>
	<!-- HERO SECTION ENDS -->

	{#each reviews as review, i}
		<a
			href="https://www.upwork.com/freelancers/~018a401af87ac143b9"
			rel="noreferrer"
			target="_blank"
			class="quote-section container"
			title="Client's Reviews"
		>
			<div class="quote">
				<div class="quote-shadow" />
				<blockquote>{review}</blockquote>
			</div>
		</a>
	{/each}

	<!-- ABOUT SECTION STARTS -->
	<section id="about">
		<div class="container">
			<h2 class="section-heading" data-outline="About">About</h2>
			<div class="wrapper">
				<a
					rel="noreferrer"
					href="https://www.upwork.com/freelancers/~018a401af87ac143b9"
					target="_blank"
					class="left"
				>
					<img
						id="upwork-achievements"
						alt="Ashok pahadi upwork top rated programmer"
						src={`images/upwork.webp`}
					/>
				</a>

				<div class="right">
					<p class="subheading">Programming is like magic. You create things out of thin air.</p>
					<h2 class="slogan">Here's a little about me</h2>
					<p class="right-text">
						I have been programming since i was 4. Just Kidding! As a kid i loved playing games
						<em>(who doesn't right)</em>
						. This one fine day, i looked up how to make games. It all started then and there. I did
						some 2D/3D design, and then moved started playing with code. And now here i am.
					</p>
					<div class="buttons">
						<a href="./cv.pdf" class="primary-btn">Download CV</a>
						<a href="#projects" class="primary-btn outline">See My Works</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ABOUT SECTION ENDS -->

	<!-- SERVICES SECTION STARTS -->
	<section id="services">
		<div class="container">
			<h2 class="section-heading" data-outline="Services">Services</h2>
			<div class="all-items">
				{#each services as service, i}
					<div class="item">
						<i class={service.icon} />
						<h3 class="item-heading">{service.title}</h3>
						<h3 class="item-list">{service.tech}</h3>
						<p class="item-desc">
							{@html service.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<!-- SERVICES SECTION ENDS -->

	<!-- TIMELINE SECTION STARTS -->
	<section id="timeline">
		<h2 class="section-heading" data-outline="Timeline">Timeline</h2>
		<div class="timeline-items">
			{#each events as event, i}
				<div class="timeline-item">
					<div class="timeline-dot" />
					<div class="timeline-date">{event.date}</div>
					<div class="timeline-content">
						<h3>{event.title}</h3>
						<p>
							{@html event.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- TIMELINE SECTION ENDS -->

	<!-- PROJECT SECTION STARTS -->
	<section id="projects">
		<div class="container">
			<h2 class="section-heading" data-outline="Projects">Projects</h2>
			<div class="all-items">
				{#each projects as project, i}
					<div class="item">
						<div class="left">
							<div class="img">
								<img src={`${project.image}`} alt={project.title} />
							</div>
						</div>
						<div class="right">
							<h3 class="project-time">{project.duration}</h3>
							<h2 class="project-title">
								<a target="_" href={project.url}>{project.title}</a>
							</h2>
							<h3 class="project-sub-title">{project.subtitle}</h3>
							<div class="tags">
								<ul>
									{#each project.tags as tag, i}
										<li>{tag}</li>
									{/each}
								</ul>
							</div>
							<div class="project-desc">
								<p>
									{@html project.description}
								</p>
								<br />
								<p><strong>Tasks Completed</strong></p>
								<ul class="tasks">
									{#each project.tasks as task, i}
										<li>
											<i class="fa-solid fa-arrow-right" />
											<span>{task}</span>
										</li>
									{/each}
								</ul>
							</div>
							<div class="buttons">
								{#if project.repo}
									<a href={project.repo} target="_" class="primary-btn external-link"
										><span>{project.repo.includes('git') ? 'View Code' : 'Know More'}</span>
										<i class="fas fa-external-link-alt" />
									</a>
								{/if}
								{#if project.url}
									<a href={project.url} target="_" class="primary-btn outline external-link"
										><span>Visit Website</span>
										<i class="fas fa-external-link-alt" />
									</a>
								{/if}
							</div>
							{#if project.isPersonal}
								<div class="personal">Personal Project</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<!-- PROJECTS SECTION ENDS -->

	<section id="contact">
		<div class="container">
			<h2 class="section-heading" data-outline="Contact">Contact</h2>
			<div class="wrapper">
				<div class="left">
					<h2 class="contact-heading">Hire/Inquiry</h2>
					<p class="contact-desc">Got some projects? Let's Chat</p>
					<div class="contact-info">
						<ul>
							<li>
								<a href="mailto:pokhrelashok2@gmail.com">
									<span class="icon">
										<i class="fas fa-envelope" />
									</span>
									<span class="email">pokhrelashok2@gmail.com</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="icon">
										<i class="fas fa-map-marker-alt" />
									</span>
									<span class="text">Hetauda, Nepal</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="social-info">
						<ul>
							<li>
								<a target="_" href="https://github.com/pokhrelashok"><i class="fab fa-github" /></a>
							</li>
							<li>
								<a target="_" href="https://www.facebook.com/Pokhrelashok2"
									><i class="fab fa-facebook" /></a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="right">
					<div class="form-wrapper">
						<form id="contact-form">
							<div class="form-group">
								<label for="contact-name">Your Name</label>
								<div class="input-wrapper">
									<span class="icon">
										<i class="fas fa-user" />
									</span>
									<input type="text" required id="contact-name" name="contact-name" />
								</div>
							</div>

							<div class="form-group">
								<label for="contact-email">Your Email</label>
								<div class="input-wrapper">
									<span class="icon">
										<i class="fas fa-envelope" />
									</span>
									<input type="email" required id="contact-email" name="contact-email" />
								</div>
							</div>
							<div class="form-group">
								<label for="contact-message">Message</label>
								<textarea name="contact-message" id="contact-message" required />
							</div>
							<div class="button-container">
								<button id="contact-submit" type="submit">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FOOTER SECTION STARTS -->
	<section id="footer">
		<div class="container">
			<footer>
				<div class="col-1">
					<h2 class="column-heading">Important <br />Links</h2>
					<ul>
						<li><a href="#hero">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="#timeline">Timeline</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#projects">Contact</a></li>
					</ul>
				</div>

				<div class="col-2">
					<h2 class="column-heading">Contact <br />Info</h2>
					<ul>
						<li>
							<a href="mailto:pokhrelashok2@gmail.com">pokhrelashok2@gmail.com</a>
						</li>
						<li>Hetauda, Nepal</li>
					</ul>
				</div>
				<div class="col-3">
					<h2 class="column-heading">Social <br />Links</h2>
					<ul>
						<li>
							<a target="_blank" rel="noreferrer" href="https://github.com/pokhrelashok"
								><i class="fab fa-github" /></a
							>
						</li>
						<li>
							<a target="_blank" rel="noreferrer" href="https://www.facebook.com/Pokhrelashok2"
								><i class="fab fa-facebook" /></a
							>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	</section>

	<section id="copyright">
		<div class="container">
			<p>&copy; Copyright {new Date().getFullYear()} ASHOK PAHADI. All right reserved</p>
		</div>
	</section>
</div>
