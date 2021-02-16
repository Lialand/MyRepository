import { reactorInst, reactorBeh, reactorYout } from './Reactor'

reactorInst();
reactorBeh();
reactorYout();

addEventListener('resize', () => {reactorInst(), reactorBeh(), reactorYout()});   