import TextareaEasyEdit from '../components/TextareaEasyEdit';
import TextEasyEdit from '../components/TextEasyEdit';
import './index.css';

const InfoSection = ({ user }) => {
  let name = user.name;
  let bio = user.bio;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px] gap-2 md:gap-5 items-baseline">
        <div className="field-name">Name</div>
        <div className="field-value text-lg md:text-xl font-bold flex flex-wrap items-center">
          <TextEasyEdit text={name} formKey="name" />
        </div>

        <div className="field-name">Biography</div>
        <div className="field-value text-sm flex flex-wrap gap-4 items-center">
          <TextareaEasyEdit text={bio} formKey="bio" />
        </div>
      </div>
    </>
  );
};

export default InfoSection;
