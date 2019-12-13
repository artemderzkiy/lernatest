import React from 'react';
import {connect} from 'react-redux';
import {generateText} from 'generate_text';

export const TextComponent = ({text}) => <div>
    {text}l
    {generateText()}
    {1+1}
</div>;