const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = "\u00A9 " + new Date().getFullYear();
}

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  // Reveal sections once as they enter the viewport, then stop observing them.
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

if ("serviceWorker" in navigator) {
  // Wait for the full page load so registration does not compete with initial rendering.
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}

// Fetch public profile data from the GitHub REST API.
// Note: the yearly contribution count shown on github.com is not exposed by the
// REST API. Retrieving it requires the GitHub GraphQL API with an authenticated
// token, which should not be embedded in client-side code. The REST API provides
// all other public profile stats (repos, followers, etc.) without authentication.
async function fetchGitHubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with status ${response.status}`);
  }

  return response.json();
}

fetchGitHubProfile("MarcusACWilliams")
  .then((profile) => {
    console.log("GitHub profile:", profile);
    // profile.public_repos  — number of public repositories
    // profile.followers     — follower count
    // profile.following     — following count
    // Use these values to populate a DOM element, e.g.:
    // document.getElementById("gh-repos").textContent = profile.public_repos;
  })
  .catch((error) => {
    console.error("Failed to fetch GitHub profile:", error);
  });

  url = "https://github.com/MarcusACWilliams";
  fetchContributorCount(url);

async function fetchContributorCount(url) {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  contributionElement = await page.getElementByClassName("js-yearly-contributions");
  //const imgSrc = await page.$eval('img', img => img.src);

  console.log(contributionElement);
  await browser.close();
}
