import { zodResolver } from '@hookform/resolvers/zod';
import { FieldError, Path, SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, ZodSchema } from 'zod';
import { Input } from '@/components/ui/Input';

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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TypeOf<TSchema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TypeOf<TSchema>> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
}
