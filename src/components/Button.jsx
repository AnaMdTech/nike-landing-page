import PropTypes from "prop-types";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 bg-coral-red border font-montserrat text-lg leading-none rounded-full border-coral-red text-white">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // Validates that 'label' is a required string
  iconURL: PropTypes.string, // Validates that 'iconURL' is an optional string
};

export default Button;
