import { useSelector, useDispatch } from 'react-redux';

import { toggleNavbar } from '../../redux/navbar/navbar_actions';

import './ToggleIcon.css';

const ToggleIcon = () => {
  const { navbarOpen } = useSelector((state) => state.navbarOpen);
  const dispatch = useDispatch();

  const toggleStyles = navbarOpen ? 'wrapper menu--is-revealed' : 'wrapper';

  return (
    <div className={`${toggleStyles} toggle`}>
      <button className="menu-toggle" onClick={() => dispatch(toggleNavbar())}>
        <span className="icon-bars"></span>
      </button>
    </div>
  );
};

export default ToggleIcon;
