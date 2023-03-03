const Manager = require('../lib/Manager');

test('CREATE manager card', () => {
    const manager = new Manager ('Georgia', 99, 'georgiawilder@gmail.com', 789);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('GET employee role', () => {
    const manager = new Manager ('Georgia', 99, 'georgiawilder@gmail.com', 789);
    expect(manager.getRole()).toEqual('Manager');
});