// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data
    .filter((user) => {
      if (user.name.length > 17) {
        return user;
      }
    })
    .map((user) => user.name);
};
getUsers().then((result) => console.log(result));
