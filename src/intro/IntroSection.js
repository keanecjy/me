import LinkedIconList from '../component/linkedIconList/LinkedIconList';
import '../projects/styles.css';
import { MetaLogo } from '../util/CompanyLogos';
import './styles.css';

const IntroSection = () => {
  const INTRO =
    "Hi there! I'm Keane, and I enjoy building software that is both beautiful and impactful.";
  const CURRENT_JOB = 'Currently interning';

  return (
    <div className="top">
      <p className="wave-icon">👋</p>
      <p className="intro">{INTRO}</p>
      <p className="job">
        {CURRENT_JOB}&nbsp;@&nbsp;&nbsp;
        <MetaLogo />
      </p>
      <LinkedIconList />
    </div>
  );
};

export default IntroSection;
