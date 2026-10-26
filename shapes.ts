type Circle = {
  radius: number
};

type Rectangle = {
  width: number,
  height: number
};

const describeShape = (shape: Circle | Rectangle) => {
  if ('radius' in shape) {
    // We know shape is a Circle
    console.log('Shape is a circle');
  } else {
    console.log('Shape is a rectangle');
  }
}

const circle = { radius: 1 }
const rectangle = { width: 50, height: 12 }

console.log(describeShape(circle));