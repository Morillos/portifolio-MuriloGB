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

function updateSoftSkills(profileData) {
  const softSkils = document.getElementById("profile.skills.softSkills");
  softSkils.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}"/></li>`)
    .join("");
}
function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language.name} [${language.level}]</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
        <li>
          <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
          <a
            href="${project.url}"
            target="_blank">
            ${project.url}
          </a>
        </li>
      `;
    })
    .join("");
}

function updateExperience(profileData) {
  const experience = document.getElementById("profile.experience");
  experience.innerHTML = profileData.experience.map((experience) => {
    return `
      <li>
        <p class="title">${experience.name} / ${experience.institute}</p>
        <p class="date">${experience.time
          .map((item) => `${item}`)
          .join("-")}</p>
        <p class="description">${experience.description}</p>
      </li>
    `;
  });
}


// MAIN
(async () => {
  const profileData = await fetchProfileData();
  updateProfileData(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateExperience(profileData);
})();
