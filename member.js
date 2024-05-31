function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'React', 'Node'],
        details: {
            address: '123 Main St',
            city: 'New York'
        }
    };
    return member;
}

function GetUserDetails() {
    var member = skillsMember();
    var skills = member.skills;
    var details = member.details;
    return `Hello, I am ${member.name} and I am ${member.age} years old. My skills are ${skills[0]}, ${skills[1]}, ${skills[2]}. I live at ${details.address} in ${details.city}.`;
}