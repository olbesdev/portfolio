import React from 'react'
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import Buttons from '@/components/Buttons';


const TimeLineExperience = ({id, company, title, startDate, endDate, description, linkweb}) => {
    return (
        
        <VerticalTimeline
        layout="1-column-left"
        animate={true}>
            <React.Fragment key={id}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work h-auto sm:absolute"
                    contentStyle={{ background: '#111827', color: '#fff' }}
                    contentArrowStyle={{ borderRigth: '17px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: '#111827', color: '#fff' }}
                    visible={true}
                    date={endDate}
                    icon={<MdWork />}
                    iconClassName="text-white"
                    iconSize="1.1rem"
                    animate={true}
                >
                    <h3 className="vertical-timeline-element-title text-">{title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                    <p>{startDate} - {endDate}</p>
                    <p className='text-md px-0 sm:px-10'>{description}</p>
                    <Link href={linkweb}>
                    <div className="flex gap-2 justify-center">
                        <Buttons className="flex mx-4" target={"_blank"}> Visit site </Buttons>
                    </div>    
                    </Link>
                </VerticalTimelineElement>
            </React.Fragment>
                
            
        </VerticalTimeline>
    );
}

export default TimeLineExperience
