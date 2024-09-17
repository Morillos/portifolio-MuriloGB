function updateProfileData(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = "https://avatars.githubusercontent.com/u/4399259?v=4";
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateProfileSoftSkills(profileData) {
  const softSkils = document.getElementById("profile.skills.softSkills");
  softSkils.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateProfileHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}"/></li>`)
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileData(profileData);
  updateProfileSoftSkills(profileData);
  updateProfileHardSkills(profileData);
})();
