import { useState } from 'react';
import './textStyle.css';

const TextField = ({ value, setValue, name, maxLength, uuid }) => {
  const [editingValue, setEditingValue] = useState(value);
  const [showEdit, setShowEdit] = useState(false);

  const onClick = () => {
    if (editingValue.trim() === '') {
      setEditingValue('...');
    }
    let out = editingValue.trim();
    setValue(out, uuid, name);
    setShowEdit(false);
  };

  const onClose = () => {
    setEditingValue(value);
    setShowEdit(false);
  };

  return (
    <div aria-label="Field name" name={name} className="text-field">
      <p onClick={() => setShowEdit(true)}>{editingValue || '...'}</p>
      {showEdit ? (
        <>
          <input
            maxLength={maxLength}
            className="text-edit"
            type="text"
            name={name}
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
          <i className="input-icon icon-check" onClick={onClick}></i>
          <i className="input-icon icon-minus" onClick={onClose}></i>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextField;
