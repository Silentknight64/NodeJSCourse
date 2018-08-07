const users = [{
    id: 1,
    name: 'Brandon',
    schoolId: 101
},
{
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    value: 86
},
{
    id: 2,
    schoolId: 999,
    value: 100
},
{
    id: 3,
    schoolId: 101,
    value: 80
}];

// const getUser = (id) => {
//     return new Promise((resolve, reject) => {
//         const user = users.find((user) => user.id === id);

//         if (user) {
//             resolve(user);
//         } else {
//             reject(`Unable to find user with id of ${id}.`);
//         }
//     });
// };

const getUser = async (id) => {
    const user = users.find((user) => user.id === id);

    if (user) {
        return user;
    } else {
        throw new Error(`Unable to find user with id of ${id}.`);
    }
};

const getGrades = async (schoolId) => {
    return await (grades.filter((grade) => grade.schoolId === schoolId));
};

const getStatus = async (userId) => {
    const user = await getUser(userId);

    const grades = await getGrades(user.schoolId);

    const average = grades.map((grade) => grade.value).reduce((a, b) => a + b) / grades.length;

    return `${user.name} has a ${average}% in the class.`
}

getStatus(1).then(status => console.log(status))
    .catch(err => console.log(err));

// getStatus(1).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });