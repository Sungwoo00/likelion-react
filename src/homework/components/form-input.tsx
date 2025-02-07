import S from './form-input.module.css';

import { type ComponentProps, useId, useState } from 'react';
import { IconEyeOff, IconEyeOn } from './icon-eye';
import ToggleButton from './toggle-button';

type FormInputProps = ComponentProps<'input'> & {
  label: string;
  hasToggleButton?: boolean;
  hasError?: Error | null;
};

function FormInput({
  label,
  hasToggleButton = false,
  hasError,
  type = 'text',
  ...inputProps
}: FormInputProps) {
  const id = useId();

  const [isOff, setIsOff] = useState(true);

  const handleToggle = () => {
    setIsOff((isOff) => !isOff);
  };

  if (type === 'password' && !isOff) {
    type = 'text';
  }

  const buttonLabel = `패스워드 ${isOff ? '표시' : '감춤'}`;

  return (
    <>
      <div className={S.formInput}>
        <label htmlFor={id}>{label}</label>
        <div className={S.group}>
          <input type={type} id={id} {...inputProps} />
          {hasToggleButton && (
            <ToggleButton
              type="button"
              label={buttonLabel}
              title={buttonLabel}
              offRender={<IconEyeOff />}
              onRender={<IconEyeOn />}
              isOff={isOff}
              onClick={handleToggle}
            />
          )}
        </div>
      </div>
      {hasError && (
        <p role="alert" className="text-red-700 font-medium text-[13px] pl-4">
          {hasError.message}
        </p>
      )}
    </>
  );
}

export default FormInput;