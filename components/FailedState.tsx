import React from 'react';

const FailedState = ({text} : {text: string}) => {
  return (
    <>
      <tr>
        <td colSpan={4} className="text-center text-gray-500 py-4">
          {text}
        </td>
      </tr>
    </>
  );
};

export default FailedState;
