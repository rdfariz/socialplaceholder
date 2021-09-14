import React from 'react';
import PropTypes from 'prop-types';

function Component (props) {
  const { title, thumbnail, url, className } = props;

  const handleClick = () => {
    window.open(url, '_blank').focus();
  };
  
  return (
    <div className={`${className} flex`}>
      <div className="w-full bg-white overflow-hidden rounded-lg border cursor-pointer hover:shadow-md" onClick={handleClick}>
        <img className="w-full" alt={title} src={thumbnail} />
        <div className="p-3 md:p-5 ">
          <h2 className="text-gray-800 text-lg font-semibold">
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

Component.defaultProps = {
  thumbnail: '',
  title: '',
  url: '',
  id: '',
  className: '' 
};

Component.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string 
};

export default Component;
