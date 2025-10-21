import { useNavigate } from 'react-router-dom';
import autoservice24Logo from '@/assets/autoservice24-logo.png';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-shrink-0">
      <img 
        src={autoservice24Logo}
        alt="Autoservice24 Logo"
        className="h-12 w-auto object-contain transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
        loading="eager"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default Logo;