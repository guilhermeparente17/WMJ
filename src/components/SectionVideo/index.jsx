import React from 'react'
import Video from '../../Videos/video.mp4'
import {
    SectionVideoContainer,
    SectionVideoBG,
    VideoBG,
    SideVideoContainer,
    SectionVideoH1,
    SideVideoP
} from './SectionVideoElements'

const SectionVideo = () => {
    return (
        <div>
            <SectionVideoContainer>
                <SectionVideoBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </SectionVideoBG>
                <SideVideoContainer>
                    <SectionVideoH1>Meet the Future of Engineering</SectionVideoH1>
                    <SideVideoP>
                        Find out more about my services
                        or consult a personalized 
                        quote you like.
                    </SideVideoP>
                </SideVideoContainer>
            </SectionVideoContainer>
        </div>
    )
}

export default SectionVideo
