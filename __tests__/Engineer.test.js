const Engineer = require ('../lib/Engineer');

test('CREATE engineer card', () => {
    const engineer = new Engineer ('Tyler', 5678, 'tylersmith@gmail.com', 'twilson');
    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('GET engineer repo', () => {
    const engineer = new Engineer ('Tyler', 5678, 'tylersmith@gmail.com', 'twilson');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

test('GET employee role', () => {
    const engineer = new Engineer ('Tyler', 5678, 'tylersmith@gmail.com', 'twilson');
    expect(engineer.getRole()).toEqual('Engineer');
});