import React from 'react'
import Video from '../../Videos/video.mp4'
import {
    SectionVideoContainer,
    SectionVideoBG,
    VideoBG
} from './SectionVideoElements'

const SectionVideo = () => {
    return (
        <div>
            <SectionVideoContainer>
                <SectionVideoBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </SectionVideoBG>
            </SectionVideoContainer>
        </div>
    )
}

export default SectionVideo
