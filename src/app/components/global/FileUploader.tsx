/* eslint-disable @next/next/no-img-element */
'use client';

import { Control, Controller } from 'react-hook-form';

interface FileUploaderProps {
  className?: string;
  imageStyle?: string;
  name: string;
  control: Control;
}

export function FileUploader({
  className,
  imageStyle,
  name,
  control,
}: FileUploaderProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          const handleFileChange = (
            event: React.ChangeEvent<HTMLInputElement>,
          ) => {
            const file = event.target.files?.[0] || null;
            onChange(file); // Se actualiza el valor en react-hook-form
          };

          return (
            <>
              <input
                type='file'
                onChange={handleFileChange}
                className='opacity-0 w-full h-full absolute'
              />
              {value && (
                <img
                  src={URL.createObjectURL(value)}
                  alt='file'
                  className={`w-full h-full object-cover ${imageStyle}`}
                />
              )}
            </>
          );
        }}
      />
    </div>
  );
}
