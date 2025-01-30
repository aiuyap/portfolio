import PropTypes from "prop-types";

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export function ProjectCard({ title, image, description }) {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
