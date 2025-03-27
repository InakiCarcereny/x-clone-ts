import { zodResolver } from '@hookform/resolvers/zod';
import { FieldError, Path, SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, ZodSchema } from 'zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/Button';
import { useUserProfile } from '@/context/user-profile';
import { useModalStore } from '@/store/modal-store';

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
  const { setData } = useUserProfile();
  const { closeModal } = useModalStore();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TypeOf<TSchema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TypeOf<TSchema>> = (data) => {
    setData(data);
    closeModal();
  };

  return (
    <form
      className='flex flex-col gap-y-4 px-4'
      onSubmit={handleSubmit(onSubmit)}
    >
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
    </form>
  );
}
