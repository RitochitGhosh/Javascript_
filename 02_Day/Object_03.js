//Object destructure
const course = {
    courseName: 'We Build Devs',
    coursePrice: '1299',
    courseInstructor: 'Ritochit Ghosh'
};
const {courseName: name} = course;
console.log(name);

const {coursePrice: cost} = course;
console.log(cost);

/*

What is API?
-> An API, or Application Programming Interface, is a set of protocols, tools, and definitions that allows different software
applications to communicate with each other. It defines how software components should interact, making it possible for
developers to access the functionality of another software component or service.

API calls:-API calls are fundamental to modern software development, enabling seamless communication between different 
applications and services. This overview provides a concise understanding of API calls, covering key concepts, types, and the 
essential steps involved in making and handling API requests.

*/