import { useRef, useState } from 'react';
import EditButton from './EditButton';
import ShowMoreText from 'react-show-more-text';
import EasyEdit, { Types } from "react-easy-edit";
import { Button } from '@mui/material';
import { input } from './../../../../node_modules/sucrase/dist/esm/parser/traverser/base';

function SaveButton() {
  return (
    <Button
      variant="contained"
      className="!bg-green-800 !rounded-full !text-sm sm:!text-base !py-1 sm:py-2"
      sx={{
        height: 'fit-content',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
      }}
    >
      Save
    </Button>
  );
}
function CancelButton() {
  return (
    <Button
      variant="outlined"
      className="!text-red-700 !border-red-700 !border-1 !rounded-full !text-sm sm:!text-base !py-1 sm:py-2"
      sx={{
        height: 'fit-content',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
      }}
    >
      Cancel
    </Button>
  );
}

function TextEasyEdit({ name }) {
  const handleEdit = value => {
    name = value;
    console.log(name);
  };

  return (
    <EasyEdit
      type="text"
      cssClassPrefix="flex items-center justify-center gap-1 h-full "
      inputClass="!w-full !text-lg !font-bold !text-indigo-950"
      editButtonLabel={<EditButton label="edit" />}
      saveButtonLabel={<SaveButton />}
      cancelButtonLabel={<CancelButton />}
      placeholder={name}
      value={name}
      attributes={{
        name: 'awesome-input',
        id: 1,
      }}
      hideEditButton={false}
      onSave={handleEdit}
      onCancel={() => {}}
    />
  );
}
function TextareaEasyEdit({ name }) {
  const handleEdit = value => {
    name = value;
    console.log(name);
  };

  return (
    <EasyEdit
      type={Types.TEXTAREA}
      disableAutoSubmit
      cssClassPrefix="flex items-center justify-center gap-1 h-full "
      inputClass="!w-full !text-lg !font-bold !text-indigo-950"
      editButtonLabel={<EditButton label="edit" />}
      saveButtonLabel={<SaveButton />}
      cancelButtonLabel={<CancelButton />}
      placeholder={name}
      value={name}
      attributes={{
        name: 'awesome-input',
        id: 1,
      }}
      hideEditButton={false}
      onSave={handleEdit}
      onCancel={() => {}}
    />
  );
}

const InfoSection = ({ user }) => {
  let name = user.name;
  let username = user.username;
  let bio = user.bio;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px] gap-2 md:gap-5 items-baseline">
        <div className="field-name">Name</div>
        <div className="field-value text-lg md:text-xl font-bold flex flex-wrap items-center">
          <TextEasyEdit name={name} />
        </div>

        <div className="field-name">Username</div>
        <div className="field-value text-lg md:text-xl font-bold flex flex-wrap items-center">
          @<TextEasyEdit name={username} />
        </div>

        <div className="field-name">Biography</div>
        <div className="field-value text-sm flex flex-wrap gap-4 items-center">
          <TextareaEasyEdit
            name={
              // <ShowMoreText
              //   className=""
              //   lines={4}
              //   more={
              //     <span className="text-indigo-700 font-bold cursor-pointer">
              //       Show More
              //     </span>
              //   }
              //   less={
              //     <span className="text-indigo-700 font-bold cursor-pointer">
              //       Show Less
              //     </span>
              //   }
              // >
                // {
                  bio
                // }
              // </ShowMoreText>
            }
          />
        </div>
      </div>
    </>
  );
};

export default InfoSection;
