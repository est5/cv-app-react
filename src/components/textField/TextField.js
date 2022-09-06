import { useState } from 'react';
import './textStyle.css';

const TextField = ({ value, setValue, name, maxLength }) => {
  const [editingValue, setEditingValue] = useState(value);
  const [showEdit, setShowEdit] = useState(false);

  const onClick = () => {
    if (editingValue === '') {
      editingValue = value;
    }
    let out = editingValue.trim();
    setValue(editingValue, name);
    setShowEdit(false);
  };

  return (
    <div
      maxLength={maxLength}
      aria-label="Field name"
      name={name}
      className="text-field"
    >
      <p onClick={() => setShowEdit(true)}>{editingValue || '...'}</p>
      {showEdit ? (
        <>
          <input
            className="text-edit"
            type="text"
            name={name}
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
          <i
            className="input-icon icon-check"
            onClick={() => {
              setValue(editingValue, name);
              setShowEdit(false);
            }}
          ></i>
          <i
            className="input-icon icon-minus"
            onClick={() => setShowEdit(false)}
          ></i>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextField;
