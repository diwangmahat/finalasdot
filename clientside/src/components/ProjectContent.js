
import "./ProjectContentStyle.css";

//import images
import design1 from "../assets/gallery/Design1.png";
import design2 from "../assets/gallery/Design2.jpg";
import design3 from "../assets/gallery/Design3.jpg";
import design4 from "../assets/gallery/Design4.jpg";
import design5 from "../assets/gallery/Design5.jpg";
import design6 from "../assets/gallery/Design6.jpg";

// Sample project data
const projects = [
  {
    category: "Design 1",
    image: design1,
  },
  {
    category: "Design 2",
    image: design2,
  },
  {
    category: "Design 3",
    image: design3,
  },
  {
    category: "Design 4",
    image: design4,
  },
  {
    category: "Design 5",
    image: design5,
  },
  {
    category: "Design 6",
    image: design6,
  },
];

function ProjectContent() {
  return (
    <div className="projects-container">
      <div className="projects">
        {["Design 1", "Design 2", "Design 3", "Design 4", "Design 5", "Design 6"].map(
          (category) => (
            <div key={category} className="project-category">
              <h3>{category}</h3>
              <ul>
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <li key={project.name}>
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
