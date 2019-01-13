const projectCornerToAxis = (corner, axis) => {
  const projectedX = (corner.x * axis.x + corner.y * axis.y) / ((axis.x ** 2) + (axis.y ** 2)) * axis.x;
  const projectedY = (corner.x * axis.x + corner.y * axis.y) / ((axis.x ** 2) + (axis.y ** 2)) * axis.y;

  return { projectedX, projectedY };
};

const scalarValues = (projectedCorners, axis) => projectedCorners.map((corner) => {
  const { projectedX, projectedY } = corner;
  return projectedX * axis.x + projectedY * axis.y;
});

const checkScalarForColision = (scalar1, scalar2) => {
  const min1 = Math.min(...scalar1);
  const max1 = Math.max(...scalar1);

  const min2 = Math.min(...scalar2);
  const max2 = Math.max(...scalar2);

  if (min2 <= max1 && min1 <= max2) {
    return true;
  }
  return false;
};

const isCollided = (rect1, rect2) => {
  const axis1 = {
    x: rect1.corners[1].x - rect1.corners[0].x,
    y: rect1.corners[1].y - rect1.corners[0].y,
  };
  const axis2 = {
    x: rect1.corners[1].x - rect1.corners[3].x,
    y: rect1.corners[1].y - rect1.corners[3].y,
  };
  const axis3 = {
    x: rect2.corners[0].x - rect2.corners[2].x,
    y: rect2.corners[0].y - rect2.corners[2].y,
  };
  const axis4 = {
    x: rect2.corners[0].x - rect2.corners[1].x,
    y: rect2.corners[0].y - rect2.corners[1].y,
  };

  const corners1 = [rect1.corners[1], rect1.corners[0], rect1.corners[3], rect1.corners[2]];
  const corners2 = [rect2.corners[1], rect2.corners[0], rect2.corners[3], rect2.corners[2]];

  const axes = [axis1, axis2, axis3, axis4];

  for (let i = 0; i < axes.length; i += 1) {
    const corners1ToAxis = corners1.map(corner => projectCornerToAxis(corner, axes[i]));
    const corners2ToAxis = corners2.map(corner => projectCornerToAxis(corner, axes[i]));

    const scalar1 = scalarValues(corners1ToAxis, axes[i]);
    const scalar2 = scalarValues(corners2ToAxis, axes[i]);

    if (checkScalarForColision(scalar1, scalar2) === false) {
      return false;
    }
  }
  return true;
};

export default isCollided;