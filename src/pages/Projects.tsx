import React from 'react';
import Slider from 'react-slick';
import '../styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { logEvent } from '../analytics';

const projects = [
  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro8Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro8Mobile.png`
    ],
    name: 'Movie App - Group Project',
    description: 'Developed a React/Next.js movie app with an Express backend. Features include movie listings, detailed movie pages, pagination, user authentication, a contact section with Google Maps, Stripe payment integration, and Google Analytics. The app is deployed on Vercel and uses TypeScript for type safety.',
    link: 'https://github.com/YonatanZewude/Movies_gruppuppgift-',
    
  },

  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro7Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro7Mobile.png`
    ],
    name: 'Webshop using PHP and supabase',
    description: 'Developed a PHP and MySQL webshop featuring popular products, categorized listings, detailed product pages, search and sort functionality, pagination, user authentication, and a shopping cart. Implemented using best practices for structure and design patterns',
    link: 'https://github.com/YonatanZewude/WebshoppenWithPhP',
    
  },

  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro6Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro6Mobile.png`
    ],
    name: 'Login and user registration Features ',
    description: 'Developed a user management system for "Stefans Supershop" using PHP and MySQL. Features include user registration, login, password recovery, and session tracking. Implemented secure database queries and data validation, demonstrating backend development skills and user data management.',
    link: 'https://github.com/YonatanZewude/-stefanssupershop-php',
    
  },

  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro5Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro5Mobile.png`
    ],
    name: 'The Restaurant',
    description: 'Create a restaurant webpage in a team of three to practice collaboration and communication. The main focus is to develop a booking functionality, along with creating a consistent design and user-friendly layout',
    link: 'https://github.com/YonatanZewude/the-restaurant',
    
  },
  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro4Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro4Mobile.png`
    ],
    name: 'The Zoo',
    description: 'Create a single-page application (SPA) for a zoo using React and TypeScript. The application will display a list of animals, allow users to view detailed information about each animal, and track the feeding status of the animals',
    link: 'https://github.com/YonatanZewude/the-zoo',
    
  },
 
  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro3Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro3Mobile.png`
    ],
    name: 'The Webshop',
    description: 'In this assignment, we developed a webshop using HTML, SCSS, and TypeScript with a Vite structure. The project includes a homepage, product page, checkout page, and shopping cart. Features include adding products to the cart, simulating purchases, calculating totals, and adjusting quantities. We will use agile methodologies like daily standups and sprint planning. The goal is to create a functional, visually appealing webshop ',
    link: 'https://github.com/YonatanZewude/Thewebshop',
    
  },
  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro2Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro2Mobile.png`
    ],
    name: 'Todo List',
    description: 'In this assignment, we create our own to-do list. The page will display a number of tasks to be done. These tasks will then appear on the screen in the form of a list. When a task is completed, the user should be able to mark the task as completed, and the task should then be removed from the list.',
    link: 'https://github.com/YonatanZewude/Todo-list',
    
  },
  {
    images: [
      `${process.env.PUBLIC_URL}/assets/images/projects/pro1Desktop.png`,
      `${process.env.PUBLIC_URL}/assets/images/projects/pro1Mobile.png`
    ],
    name: 'Given Design',
    description: 'This task involves creating a website that looks like the given template. We should aim to match the layout, appearance, and functionality as closely as possible. We are only allowed to use HTML and CSS for this task, no frameworks or libraries.',
    link: 'https://github.com/YonatanZewude/given-design',
    
  },

];

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleProjectLinkClick = (projectName: string) => {
    logEvent('Project Link', `Clicked on ${projectName}`);
  };

  return (
    <div className="projects">
      <div className="container">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <div className="slider-container">
                <Slider {...settings}>
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img src={image} alt={`Slide ${imgIndex + 1}`} onError={() => console.log('Image failed to load:', image)} />
                    </div>
                  ))}
                </Slider>
              </div>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleProjectLinkClick(project.name)}
              >
                <i className="bi bi-github"></i>
                <p className='GitHub'>GitHub</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
