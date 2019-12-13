import React from 'react';
import {connect} from 'react-redux';
import {generateText} from 'generate_text';

export const TextComponent = ({text}) => <div>
    {text}
    {generateText()}
    {1+1}
    ffff   fdfddgfdddggdss
</div>;