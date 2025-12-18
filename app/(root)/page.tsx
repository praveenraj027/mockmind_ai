import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import react from 'react';

const Page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview ready with AI-powered practise and Feedback</h2>
        <p className='text-lg'>Practise on real interview quetions and get instant feedback</p>
        <Button asChild className='btn-primary max-sm:w-full'>
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt='Robot' height={400} width={400} className='max-sm:hidden' />
    </section>
    </>
  )
}
export default Page