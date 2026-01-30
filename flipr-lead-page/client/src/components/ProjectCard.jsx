const ProjectCard = ({ project }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", width: "250px" }}>
      <img src={project.image} width="100%" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button>Read More</button>
    </div>
  );
};

export default ProjectCard;
