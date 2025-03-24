export async function getUsers() {
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();

  return data;
}
