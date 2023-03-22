const Intern = require('../lib/Intern');

test('CREATE intern Card', () => {
    const intern = new Intern ('Nancy', 1234, 'nancyTruman@gmail.com','UW');
    expect(intern.school).toEqual(expect.any(String));
});


test('GET intern school', () => {
    const intern = new Intern ('Nancy', 1234, 'nancyTruman@gmail.com','UW');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('GET employee role', () => {
    const intern = new Intern ('Nancy', 1234, 'nancyTruman@gmail.com', 'UW');
    expect(intern.getRole()).toEqual('Intern');
});