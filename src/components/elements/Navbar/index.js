import { Link, useLocation  } from 'react-router-dom';

function Component () {
  const location = useLocation();
  const currentRoute = location.pathname;
  
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Users', link: '/users' },
  ];

  return (
    <header className="border fixed w-full z-20 bg-white">
      <div className="py-4 md:py-8 px-2 flex items-center justify-center md:justify-between flex-wrap mx-auto lg:max-w-screen-lg container font-medium">
        <Link to="/"><h1 className="mb-2 md:mb-0 text-xl">Social Dashboard</h1></Link>
        <div className="w-full overflow-auto md:w-auto flex flex-wrap justify-center border-t md:border-0 pt-2 md:pt-0">
          {links && links.map((l, index) => (
            <Link key={index} className={`mx-3 md:ml-4 ${currentRoute === l.link ? 'font-bold' : 'font-normal'}`} to={l.link}>{l.label}</Link>
          ))}
        </div>
      </div>
    </header>
  )
};

export default Component;
