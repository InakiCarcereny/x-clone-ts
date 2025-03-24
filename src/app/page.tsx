import { Button } from './components/Button';

export default function Home() {
  return (
    <div>
      <Button
        label='Follow'
        textSize='text-xl'
        bgColor='bg-white'
        textColor='text-black'
        borderRadius='rounded-full'
        borderSize='border'
        borderColor='border-cyan-500'
        paddingX='px-4'
        paddingY='py-2'
      />
    </div>
  );
}
