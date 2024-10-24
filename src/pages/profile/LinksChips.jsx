import { Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

function LinksChips({ links }) {
  return (
    <>
      {links && (links.github || links.linkedin || links.website) ? (
        <div direction="row" className="flex flex-row flex-wrap mt-5 gap-2">
          {links.github && (
            <Link to={links.github} key="github" target="_blank">
              <Chip label="Github" icon={<GitHubIcon />} />{' '}
            </Link>
          )}
          {links.linkedin && (
            <Link to={links.linkedin} key="linkedin" target="_blank">
              <Chip label="Linkedin" icon={<LinkedInIcon />} />{' '}
            </Link>
          )}
          {links.website && (
            <Link to={links.website} key="website" target="_blank">
              <Chip label="Website" icon={<LanguageIcon />} />{' '}
            </Link>
          )}
        </div>
      ) : null}
    </>
  );
}

export default LinksChips;
