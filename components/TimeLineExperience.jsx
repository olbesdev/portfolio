import React from 'react'
import Link from 'next/link'
import TextShine from './TextChine'
import ButtonAnimated from './Buttons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { experienceData } from '@/lib/data';



/* 
id, company, title, startDate, endDate, description, linkweb

        <div className="bg-transparent mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-2 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"></div>

                <div className="mb-8 flex justify-between items-center w-full right-0">
                    <div className="order-1 w-1/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">
                            {id}
                        </h1>
                    </div>

                    <div className="order-1 bg-gray-800 rounded-lg shadow-xl  w-6/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-50 text-xl">
                            {company}
                        </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-100 text-opacity-100 px-2 py-2">
                            {startDate} - {endDate}.
                        </p>
                        <p className="text-sm leading-snug tracking-wide text-gray-100 text-opacity-100 px-2 py-2">
                            {title}.
                        </p>
                        <p className="text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">
                            {description}.
                        </p>
                        <Link
                            href={linkweb}
                            target="_blank"
                            className='flex justify-center py-4'
                            >
                            
                            <ButtonAnimated >Link to the website</ButtonAnimated>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
*/
const TimeLineExperience = ({id, company, title, startDate, endDate, description, linkweb}) => {
    return (
        <VerticalTimeline>
            <React.Fragment key={id}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work sm:absolute"
                    contentStyle={{ background: '#111827', color: '#fff' }}
                    contentArrowStyle={{ borderRigth: '17px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: '#111827', color: '#fff' }}
                    visible={true}
                    date={endDate}
                    icon={<MdWork />}
                    iconClassName="text-white"
                    iconSize="1.2rem"
                    layout={'1-columns-right'}
                    animate={true}
                >
                    <h3 className="vertical-timeline-element-title text-">{title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                    <p>{startDate} - {endDate}</p>
                    <p className='text-sm'>{description}</p>
                </VerticalTimelineElement>
            </React.Fragment>
                
            
        </VerticalTimeline>
    );
}

export default TimeLineExperience
