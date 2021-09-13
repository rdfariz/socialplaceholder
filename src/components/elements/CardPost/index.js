import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function Component (props) {
  const { image, title, id, body, isDetail, className } = props;
  const history = useHistory();

  function handleClick () {
    if (isDetail) return;
    history.push(`/post/${id}`);
  }

  return (
    <div className={`${className} flex`}>
      <div className={`w-full p-5 bg-white rounded-lg border ${!isDetail && 'cursor-pointer hover:shadow-md'}`} onClick={handleClick}>
        {image && (
          <div className="flex justify-center md:justify-end -mt-16">
            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt="" src={image} />
          </div>
        )}
        <div>
          <h2 className={`text-gray-800 text-lg font-semibold ${!isDetail && 'truncate ...'}`}>{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{body}</p>
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
