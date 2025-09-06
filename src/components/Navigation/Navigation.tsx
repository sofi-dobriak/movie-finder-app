import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  isActive: boolean;
}

const Navigation = () => {
  const setActiveClass = ({ isActive }: NavigationProps) => {
    return clsx(
      'duration-300 ease-in-out hover:text-[var(--hover-color)] focus:text-[var(--hover-color)] pt-5 pb-5',
      isActive && 'text-[var(--active-color)]'
    );
  };
  return (
    <nav className='flex items-center gap-7.5 m-0'>
      <NavLink to='/' className={setActiveClass}>
        Home
      </NavLink>
      <NavLink to='/movies' className={setActiveClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
