function getFullName({firstName, lastName, ...restObject}) {
    console.log(restObject)
  return `${firstName} ${lastName}`;
}

const user2 = {
  firstName: "John",
  lastName: "Doe",
  age: 42,
  geolocation: "42.234423423 56.1123142154",
  browser: "Chrome",
};

console.log(getFullName(user2));
