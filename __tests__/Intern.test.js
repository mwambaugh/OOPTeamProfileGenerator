const Intern = require('../lib/Intern');

test('CREATE intern Card', () => {
    const intern = new Intern ('Nancy', 65, 'nancyTruman@gmail.com');
    expect(intern.school).toEqual(expect.any(String));
});


test('GET intern school', () => {
    const intern = new Intern ('Nancy', 65, 'nancyTruman@gmail.com');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('GET employee role', () => {
    const intern = new Intern ('Nancy', 65, 'nancyTruman@gmail.com', 'UW');
    expect(intern.getRole()).toEqual('Intern');
});