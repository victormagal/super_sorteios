import { useState } from 'react';
import { Field } from 'formik';

export default function Number({ handleChange, status, value }) {
  const [active, setActive] = useState(status);
  const checkActivation = () => {
    if (active === 'available') {
      setActive('active')
    } else {
      setActive(status);
    }
  }

  return (
    <>
      {status === 'available' &&
        <Field 
          className='absolute cursor-pointer h-full opacity-0 w-full z-10' 
          type='checkbox'
          name='numbers'
          value={value}
          onClick={checkActivation}
          onChange={handleChange}
        />
      }
      <span className={`absolute ${active} h-full left-0 rounded text-center lg:text-2xl text-base top-0 w-full z-0`}>{value}</span>
    </>
  );
}
