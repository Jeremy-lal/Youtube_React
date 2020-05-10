import React from 'react';
import PrincipaleVideo from '../../briques/PrincipaleVideo/PrincipaleVideo';
import ASuivre from '../../briques/ASuivre/Asuivre';

export default function VideoPage(props) {
    const id = props.match.params.id;
    
    return (
        <>
            <PrincipaleVideo videos= {props.videos} id={id}/>
            <ASuivre />
        </>
    )
}