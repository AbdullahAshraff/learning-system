import EditIconButton from './EditIconButton';

const LinksSection = ({ user }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px] gap-2 md:gap-5">
        <div className="field-link-name">Github</div>
        <div className="field-link-value">
          <div className="break-words w-full">{user.links.github.url}</div>
          <EditIconButton />{' '}
        </div>
        <div className="field-link-name">LinkedIn</div>
        <div className="field-link-value">
          <div className="break-words w-full">{user.links.linkedin.url}</div>
          <EditIconButton />
        </div>
        <div className="field-link-name">Website</div>
        <div className="field-link-value">
          <div>{user.links.website.url}</div>
          <EditIconButton />
        </div>
      </div>
    </>
  );
};

export default LinksSection;
