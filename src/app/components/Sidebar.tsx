import Logo from './Logo';
import Navigation from './Navigation';

const Sidebar = () => {
  return (
    <div className="bg-beige rounded-xl overflow-hidden">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Sidebar;
