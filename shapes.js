"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describeShape = (shape) => {
    if ('circumference' in shape) {
        // We know shape is a Circle
        console.log('Shape is a circle');
    }
    else {
        console.log('Shape is a rectangle');
    }
};
const circle = { radius: 1, circumference: () => 6.28 };
const rectangle = { width: 50, height: 12 };
console.log(describeShape(circle));
//# sourceMappingURL=shapes.js.map