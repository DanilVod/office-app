import { Button } from '@repo/ui/button';

export default function Home() {
  console.log('2');
  console.log('1');
  return (
    <main className='h-screen bg-cyan-700'>
      <Button className='w-32 h-32' appName='das'>
        button
      </Button>
    </main>
  );
}
