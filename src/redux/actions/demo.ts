import { DEMO } from './types';

export const actDemo = (...args: any) => ({
    type: DEMO,
    args,
});
