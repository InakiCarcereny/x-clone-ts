import { zodResolver } from '@hookform/resolvers/zod';
import { FieldError, Path, SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, ZodSchema } from 'zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/Button';
import { useUserProfile } from '@/context/user-profile';
import { useModalStore } from '@/store/modal-store';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect } from 'react';

interface FieldProps<TSchema extends ZodSchema> {
  name: Path<TypeOf<TSchema>>;
  type: string;
  placeholder: string;
}

interface FormProps<TSchema extends ZodSchema> {
  schema: TSchema;
  fields: FieldProps<TSchema>[];
}

export function Form<TSchema extends ZodSchema>({
  schema,
  fields,
}: FormProps<TSchema>) {
  const pathname = usePathname();

  const { setData, userProfile } = useUserProfile();
  const { closeModal } = useModalStore();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TypeOf<TSchema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TypeOf<TSchema>> = (data) => {
    if (pathname === '/home/profile') {
      setData(data);
      toast(
        <div className=' text-white font-semibold'>
          Your profile has been updated!
        </div>,
      );
    }

    closeModal();
  };

  useEffect(() => {
    if (userProfile) {
      setValue('name', userProfile.name);
      setValue('bio', userProfile.bio);
      setValue('location', userProfile.location);
      setValue('website', userProfile.website);
      // setValue('banner', userProfile.banner);
      // setValue('avatar', userProfile.avatar);
    }
  }, [setValue, userProfile]);

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-y-4 px-4'>
        {fields.map((field) => (
          <Input
            key={field.name}
            control={control}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            error={errors[field.name] as FieldError | undefined}
          />
        ))}

        <Button
          label='Save'
          textSize='text-sm'
          bgColor='bg-white'
          textColor='text-black'
          borderRadius='rounded-full'
          paddingX='px-4'
          paddingY='py-2'
          fontWeight='font-semibold'
          hoverBgColor='hover:bg-white/90'
          cursor='cursor-pointer'
        />
      </div>
    </form>
  );
}
