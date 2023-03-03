const Engineer = require ('../lib/Engineer');

test('CREATE engineer card', () => {
    const engineer = new Engineer ('Tyler', 70, 'tylersmith@gmail.com');
    expect(engineer.github).toEqual(expect.any(String));
});

test('GET engineer repo', () => {
    const engineer = new Engineer ('Tyler', 70, 'tylersmith@gmail.com');
    expect(engineer.github()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('GET employee role', () => {
    const engineer = new Engineer ('Tyler', 70, 'tylersmith@gmail.com');
    expect(engineer.getRole()).toEqual('Engineer');
});