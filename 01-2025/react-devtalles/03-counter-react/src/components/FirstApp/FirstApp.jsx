// import "./FirstApp.css";
import PropTypes from "prop-types";

export const FirstApp = ({
  title = "Fernando Herrera",
  subTitle = "No hay subtítulo",
  name,
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};
