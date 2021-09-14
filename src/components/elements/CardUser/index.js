import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function Component (props) {
  const { image, title, id, body, isDetail, className } = props;
  const history = useHistory();

  function handleClick () {
    if (isDetail) return;
    history.push(`/users/${id}`);
  }

  return (
    <div className={`${className} flex`}>
      <div className={`w-full p-5 rounded-lg border ${!isDetail ? 'cursor-pointer hover:shadow-md' : 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 ...'}`} onClick={handleClick}>
        {image && (
          <div className="flex justify-center md:justify-end -mt-16">
            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt="" src={image} />
          </div>
        )}
        <div className={`${isDetail ? 'text-white' : 'text-gray-800'}`}>
          <h2 className={`text-lg ${!isDetail ? 'font-medium truncate ...' : 'font-bold'}`}>{title}</h2>
          <p className="text-sm">{body}</p>
        </div>
      </div>
    </div>
  )
}

Component.defaultProps = {
  isDetail: false 
};

Component.propTypes = {
  isDetail: PropTypes.bool
};

export default Component;
