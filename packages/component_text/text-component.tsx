import React from 'react';
import {generateText} from 'generate_text';

export const TextComponent = ({text}) => <div>
    {text}
    {generateText()}
</div>;