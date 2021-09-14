import React from 'react';
import PropTypes from 'prop-types';

function Component (props) {
  const { label, title, subtitle, className } = props;
  
  return (
    <div className={`w-full p-5 rounded-lg border ${className}`}>
      {label && <p className="text-sm">{label}</p>}
      {title && <h2 className="text-lg font-bold">{title}</h2>}
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  );
};

Component.defaultProps = {
  label: '',
  title: '',
  subtitle: '',
  className: ''
};

Component.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string 
};

export default Component;
