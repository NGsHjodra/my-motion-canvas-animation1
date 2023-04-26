import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import test from './scenes/test?scene';

export default makeProject({
  scenes: [example, test],

});
