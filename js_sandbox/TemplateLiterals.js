const name = 'Feel';
const age = 30;
const job = 'Web Developer';
const city = 'Busan'

// Without tempate strings(ex5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '
    + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>'

// With template strings(es6)

function hello(){
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML =  html;