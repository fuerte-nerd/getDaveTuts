import React from 'react'
import Disqus from 'disqus-react';

export default function Comments(props) {

    const { disqusShortname, disqusConfig } = props

    return (
        <div className="bg-primary">
           <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> 
        </div>
    )
}
