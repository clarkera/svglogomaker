const {Circle, Square, Triangle} = require("./shapes")


describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="90" height="120" width="120" y="40" fill="${color}"/>`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="${color}"/>`);
      });
    });