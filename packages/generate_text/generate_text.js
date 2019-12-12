import {uniqueId} from 'lodash/uniqueId';

export const generateText = () => {
    return uniqueId() + 'unique';
};