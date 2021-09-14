import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

function Component (props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col">
        <Field className="rounded-md border py-2 px-2" autoComplete="off" required name="title" placeholder="Title" component="input" type="text" />
        <Field className="rounded-md border py-2 px-2 mt-2" autoComplete="off" required name="body" placeholder="Content" component="input" type="text" />
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
};

Component.defaultProps = {
  handleSubmit: () => {}
};

Component.propTypes = {
  handleSubmit: PropTypes.func
};

export default Component;
