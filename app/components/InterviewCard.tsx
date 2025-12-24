import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
    return (
        <div className='card-border w-[365px] max-sm:w-full min-h-96'>
            <div className='card-interview'>
                <div>
                    <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-400'>
                        <p className='badge-text'>{normalizedType}</p>
                    </div>
                    <Image src={getRandomInterviewCover()} alt='Interview Cover' width={90} height={90} className='rounded-full object-fit size-[]' />
                    <h3 className='mt-5 capitalize'>
                        {role || 'Unnamed Role'} Interview
                    </h3>
                    <div className='flex flex-row gap-5 mt-3'>
                        <div className='flex flex-row gap-2'>
                            <Image src="./calendar.svg" alt='Date' height={20} width={20} />
                            <p>{formattedDate}</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src="./star.svg" alt='star' height={20} width={20} />
                            <p>{feedback?.totalScore ||'---'} / 100</p>
                        </div>
                    </div>
                    <p className='line-clamp-2 mt-5'>
                        {feedback?.finalAssessment || "You haven't taken any interview yet. Take an interview today to test your skills!!"}
                    </p>
                </div>
                <div className='flex flex-row justify-between'>
                    <DisplayTechIcons techStack={techstack}/>
                    <Button className="btn-primary">
                        <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
                        {feedback ? 'Check feedback' : 'View interview'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InterviewCard;