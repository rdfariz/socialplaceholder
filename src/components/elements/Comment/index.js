import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditCommentForm from '../../form/editComment';

function Component (props) {
  const { id, email, name, body, handleUpdateComment, handleDeleteComment } = props;

  const [isEditLayout, setIsEditLayout] = useState(false);

  const onSubmit = async (values) => {
    await handleUpdateComment(values, id);
  };

  const renderComment = (
    <div>
      <h2>by: <span className="font-semibold">{name}</span></h2>
      <p className="mt-1 text-sm">{body}</p>
      <div className="w-full flex flex-wrap mt-4">
        <button onClick={() => setIsEditLayout(true)} className="btn-edit text-sm border text-blue-600 rounded py-1 px-2 mr-2">Edit</button>
        <button onClick={() => handleDeleteComment(id)} className="btn-delete text-sm border text-red-600 rounded py-1 px-2 mr-2">Delete</button>
      </div>
    </div>
  );
  
  const renderFormEdit = (
    <div>
      <EditCommentForm initialValues={{ email, name, body }} onSubmit={onSubmit} />
    </div>
  );

  return (
    <div className="mb-3 pb-4 border-b">
      {isEditLayout ? renderFormEdit : renderComment}
    </div>
  );
};

Component.defaultProps = {
  name: '',
  id: '',
  postId: '',
  email: '',
  body: '',
  className: '',
  handleUpdateComment: () => {},
  handleDeleteComment: () => {}
};

Component.propTypes = {
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  email: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
  handleUpdateComment: PropTypes.func,
  handleDeleteComment: PropTypes.func
};

export default Component;
