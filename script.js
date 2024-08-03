const profile = {
    _id: "127.0.0.1",
    name: "Bharat Bhandari",
    developer: true,
    technologies: ["js", "react", "node", "express", "..."],
    interests: ["MERN", "AI", "DevOps", "Aws", "..."],
};

const profileCode = `
const HelloWorld = {
    _id: "${profile._id}",
    name: "${profile.name}",
    developer: ${profile.developer},
    technologies: ${JSON.stringify(profile.technologies)},
    interests: ${JSON.stringify(profile.interests)},
}
`;

document.getElementById('profile-code').textContent = profileCode;
