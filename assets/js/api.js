async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Morillos/portifolio-MuriloGB/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
