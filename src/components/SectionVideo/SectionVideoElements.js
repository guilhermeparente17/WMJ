import styled from 'styled-components'

export const SectionVideoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    color: #FFF;
    justify-content:center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index:1;

    :before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.4) 30%,
        rgba(0,0,0,0.8) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index:2;
    }
`

export const SectionVideoBG = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    background: #232a34;
`