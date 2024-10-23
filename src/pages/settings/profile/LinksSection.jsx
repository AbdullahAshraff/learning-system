import EditIconButton from '../components/buttons/EditIconButton';
import LinkEasyEdit from '../components/LinkEasyEdit';

const LinksSection = ({ user }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px] gap-2 md:gap-5 items-baseline">
        <div className="field-link-name">Github</div>
        <div className="field-link-value">
          {/* <div className="break-words max-w-full">{user.links.github.url}</div>
          <EditIconButton /> */}
          <LinkEasyEdit text={user.links.github} formKey="github" />
        </div>
        <div className="field-link-name">LinkedIn</div>
        <div className="field-link-value">
          <LinkEasyEdit text={user.links.linkedin} formKey="linkedin" />
        </div>
        <div className="field-link-name">Website</div>
        <div className="field-link-value">
          <LinkEasyEdit text={user.links.website} formKey="website" />
        </div>
      </div>
    </>
  );
};

export default LinksSection;
