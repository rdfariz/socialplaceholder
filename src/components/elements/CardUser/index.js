import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function Component (props) {
  const { title, id, body, isDetail, className } = props;
  const history = useHistory();

  const handleClick = () => {
    if (isDetail) return;
    history.push(`/users/${id}`);
  };

  return (
    <div className={`${className} flex`}>
      <div className={`w-full p-5 rounded-lg border ${!isDetail ? 'cursor-pointer hover:shadow-md' : 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 ...'}`} onClick={handleClick}>
        <div className={`${isDetail ? 'text-white' : 'text-gray-800'}`}>
          <h2 className={`text-lg ${!isDetail ? 'font-medium truncate ...' : 'font-bold'}`}>{title}</h2>
          <p className="text-sm">{body}</p>
        </div>
      </div>
    </div>
  )
}

Component.defaultProps = {
  isDetail: false,
  title: '',
  id: '',
  body: '',
  className: ''
};

Component.propTypes = {
  isDetail: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  body: PropTypes.string,
  className: PropTypes.string
};

export default Component;
