
import "./ProjectContentStyle.css";

//import images
import design1 from "../assets/gallery/Design1.png";
import design2 from "../assets/gallery/Design2.jpg";
import dev1 from "../assets/gallery/Development1.jpg";
import dev2 from "../assets/gallery/Development2.jpg";
import marketing1 from "../assets/gallery/marketing1.png";
import marketing2 from "../assets/gallery/marketing2.jpg";
import seo1 from "../assets/gallery/Seo-design1.png";
import seo2 from "../assets/gallery/Seo-design2.jpg";
import uiux1 from "../assets/gallery/Uiux-design1.jpg";
import uiux2 from "../assets/gallery/Uiux-design2.jpg";


// Sample project data
const projects = [
  {
    category: "Designing",
    name: "Design Project 1",
    description: "Logo Design",
    image: design1,
  },
  {
    category: "Designing",
    name: "Design Project 2",
    description: "Logo Design",
    image: design2,
  },
  {
    category: "Development",
    name: "Development Project 1",
    description: "Application and Web Development",
    image: dev1,
  },
  {
    category: "Development",
    name: "Development Project 2",
    description: "Application and Web Development",
    image: dev2,
  },
  {
    category: "Marketing",
    name: "Marketing Project 1",
    description: "Marketing Analysis",
    image: marketing1,
  },
  {
    category: "Marketing",
    name: "Marketing Project 2",
    description: "content analysis",
    image: marketing2,
  },
  {
    category: "SEO",
    name: "SEO Project 1",
    description: "Seo Analysis",
    image: seo1,
  },
  {
    category: "SEO",
    name: "SEO Project 2",
    description: "Seo Analysis",
    image: seo2,
  },
  {
    category: "UI/UX",
    name: "UI/UX Project 1",
    description: "Application desigm",
    image: uiux1,
  },
  {
    category: "UI/UX",
    name: "UI/UX Project 2",
    description: "Application desigm",
    image: uiux2,
  },
];

function ProjectContent() {
  return (
    <div className="projects-container">
      <div className="projects">
        {["Designing", "Development", "Marketing", "SEO", "UI/UX"].map(
          (category) => (
            <div key={category} className="project-category">
              <h3>{category}</h3>
              <ul>
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <li key={project.name}>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                      />
                    </li>
                  ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectContent;
