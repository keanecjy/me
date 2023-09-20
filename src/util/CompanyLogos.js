import carousellIcon from '../images/company/carousell.svg';
import metaIcon from '../images/company/meta.png';
import seeduIcon from '../images/company/SE-EDU.png';
import wiseIcon from '../images/company/wise.svg';
import okxIcon from '../images/company/OKX_logo.svg.png';

export const OKXLogo = () => (
  <a href="https://www.okx.com/" target="_blank" rel="noopener noreferrer">
    <img src={okxIcon} alt="loading..." height="30em" width="auto" />
  </a>
);
export const MetaLogo = () => (
  <a href="https://www.metacareers.com/" target="_blank" rel="noopener noreferrer">
    <img
      style={{ marginBottom: '4px' }}
      src={metaIcon}
      alt="loading..."
      height="26em"
      width="auto"
    />
  </a>
);
export const CarousellLogo = () => (
  <a href="https://careers.carousell.com/" target="_blank" rel="noopener noreferrer">
    <img src={carousellIcon} alt="loading..." height="32em" width="auto" />
  </a>
);
export const WiseLogo = () => (
  <a href="https://wise.com/" target="_blank" rel="noopener noreferrer">
    <img src={wiseIcon} alt="loading..." height="28em" width="auto" />
  </a>
);
export const SEEDULogo = () => (
  <a href="https://se-education.org/" target="_blank" rel="noopener noreferrer">
    <img src={seeduIcon} alt="loading..." height="36em" width="auto" />
  </a>
);
