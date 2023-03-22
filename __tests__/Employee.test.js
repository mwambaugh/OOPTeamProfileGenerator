const Employee = require ('../lib/Employee');

test ('CREATE employee card', () => {
    const employee = new Employee ('Rigby', 4545, 'ribgywilson@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('GET employee by name', () => {
    const employee = new Employee ('Rigby', 4545, 'ribgywilson@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('GET employee by ID', () => {
    const employee = new Employee ('Rigby', 4545, 'ribgywilson@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('GET employee by email', () => {
    const employee = new Employee ('Rigby', 4545, 'ribgywilson@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('GET employee role', () => {
    const employee = new Employee ('Rigby', 4545, 'ribgywilson@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});