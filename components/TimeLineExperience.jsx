import React from 'react'
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { experienceData } from '@/lib/data';
import Buttons from '@/components/Buttons';


const TimeLineExperience = ({id, company, title, startDate, endDate, description, linkweb}) => {
    return (
        <VerticalTimeline>
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
                    iconSize="1.2rem"
                    layout={'1-columns-right'}
                    animate={true}
                >
                    <h3 className="vertical-timeline-element-title text-">{title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                    <p>{startDate} - {endDate}</p>
                    <p className='text-sm'>{description}</p>
                    <Link href={linkweb}><Buttons>Visit site</Buttons>
                        
                    </Link>
                </VerticalTimelineElement>
            </React.Fragment>
                
            
        </VerticalTimeline>
    );
}

export default TimeLineExperience
