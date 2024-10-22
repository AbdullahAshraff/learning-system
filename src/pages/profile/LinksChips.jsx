import { Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

function LinksChips({ links }) {
  return (
    <div direction="row" className="flex flex-row flex-wrap mt-5 gap-2">
      {links.map((link, index) => {
        let icon;
        switch (link.platform) {
          case 'github':
            icon = <GitHubIcon />;
            break;
          case 'linkedin':
            icon = <LinkedInIcon />;
            break;
          case 'website':
            icon = <LanguageIcon />;
            break;
        }
        return (
          <Link to={link.url} key={index} target='_blank'>
            <Chip label={link.platform} icon={icon} />{' '}
          </Link>
        );
      })}
    </div>
  );
}

export default LinksChips;
