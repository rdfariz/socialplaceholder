import { Link } from 'react-router-dom';

function Component () {
  return (
    <header className="border fixed w-full z-20 bg-white">
      <div className="h-20 flex items-center justify-center mx-auto lg:max-w-screen-lg font-medium">
        <Link to="/">Social Dashboard</Link>
      </div>
    </header>
  )
};

export default Component;
