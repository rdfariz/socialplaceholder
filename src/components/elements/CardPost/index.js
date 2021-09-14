import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import EditPostForm from '../../form/editPost';

function Component (props) {
  const { title, id, body, isDetail, className, handleEditPost, handleDeletePost } = props;
  const history = useHistory();

  const [isEditLayout, setIsEditLayout] = useState(false);

  const handleClick = () => {
    if (isDetail) return;
    history.push(`/post/${id}`);
  };
  
  const onSubmit = async (values) => {
    await handleEditPost(values);
  };

  const renderCardPost = (
    <div>
      <h2 className={`text-gray-800 text-lg font-semibold ${!isDetail && 'truncate ...'}`}>
        {title}
      </h2>
      <p className="mt-2 text-sm text-gray-600">{body}</p>
      {isDetail && (
        <div className="mt-4">
          <button onClick={() => setIsEditLayout(true)} className="bg-blue-400 text-white font-bold py-2 px-4 rounded mr-2">
            Edit
          </button>
          <button onClick={handleDeletePost} className="bg-pink-500 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  );
  
  const renderFormEdit = (
    <div>
      <EditPostForm initialValues={{ title, body }} onSubmit={onSubmit} />
    </div>
  );

  return (
    <div className={`${className} flex`}>
      <div className={`w-full p-3 md:p-5 bg-white rounded-lg border ${!isDetail && 'cursor-pointer hover:shadow-md'}`} onClick={handleClick}>
        {isEditLayout ? renderFormEdit : renderCardPost}
      </div>
    </div>
  )
};

Component.defaultProps = {
  isDetail: false,
  title: '',
  id: '',
  body: '',
  className: '',
  handleEditPost: () => {},
  handleDeletePost: () => {}
};

Component.propTypes = {
  isDetail: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  body: PropTypes.string,
  className: PropTypes.string,
  handleEditPost: PropTypes.func,
  handleDeletePost: PropTypes.func
};

export default Component;
