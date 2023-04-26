import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
import {Node} from '@motion-canvas/2d/lib/components';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const circleA = createRef<Circle>();

  view.add(
    <>
      <Circle
        ref={myCircle}
        // try changing these properties:
        x={-300}
        width={140}
        height={140}
        fill="#e13238"
      />,
      <Circle
        position={[-200, -400]}
        ref={circleA}
        width={200}
        height={200}
        fill="#e13238"
      />
    </>
  );

  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill('#e6a700', 1).to('#e13238', 1),
    circleA().position.x(200, 1).to(-200, 1),
    circleA().position.y(100, 1).to(-400, 1),
    circleA().fill('#e6a700', 1).to('#e13238', 1)
  );
});