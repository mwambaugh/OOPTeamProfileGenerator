const Employee = require ('../lib/Employee');

test ('CREATE employee card', () => {
    const employee = new Employee ('Rigby', 45, 'ribgywilson@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any.(String));
});

test('GET employee by name', () => {
    const employee = new Employee ('Rigby', 45, 'ribgywilson@gmail.com');
    expect(emplyoee.getName()).toEqual(expect.any(String));
});

test('GET employee by ID', () => {
    const employee = new Employee ('Rigby', 45, 'ribgywilson@gmail.com');
    expect(emplyoee.getID()).toEqual(expect.any(Number));
});

test('GET employee by email', () => {
    const employee = new Employee ('Rigby', 45, 'ribgywilson@gmail.com');
    expect(emplyoee.getEmail()).toEqual(expect.stringContianing(employee.email.toString()));
});

test('GET employee role', () => {
    const employee = new Employee ('Rigby', 45, 'ribgywilson@gmail.com');
    expect(emplyoee.getRole()).toEqual('Employee');
});