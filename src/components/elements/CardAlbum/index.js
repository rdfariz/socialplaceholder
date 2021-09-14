import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function Component (props) {
  const { title, id, userId, className } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/albums/${id}`);
  };
  
  return (
    <div className={`${className} flex`}>
      <div className="w-full p-3 md:p-5 bg-white rounded-lg border cursor-pointer hover:shadow-md" onClick={handleClick}>
        <div className="text-sm font-medium">
          <p>Author ID: {userId}</p>
          <hr className="my-2" />
        </div>
        <h2 className="text-gray-800 text-lg font-semibold truncate ...">
          {title}
        </h2>
      </div>
    </div>
  )
}

Component.defaultProps = {
  title: '',
  id: '',
  userId: '',
  className: ''
};

Component.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string 
};

export default Component;
