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
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  // During local development, remove service workers/caches so Live Server always serves fresh files.
  if (isLocalhost) {
    window.addEventListener("load", async () => {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        const hadRegistrations = registrations.length > 0;

        await Promise.all(registrations.map((registration) => registration.unregister()));

        if ("caches" in window) {
          const keys = await caches.keys();
          await Promise.all(keys.map((key) => caches.delete(key)));
        }

        // One forced reload helps the browser release old SW control in local debugging sessions.
        if (hadRegistrations && !sessionStorage.getItem("sw-cleanup-reloaded")) {
          sessionStorage.setItem("sw-cleanup-reloaded", "1");
          window.location.reload();
          return;
        }

        sessionStorage.removeItem("sw-cleanup-reloaded");
      } catch (error) {
        console.error("Service worker cleanup failed:", error);
      }
    });
  } else {
    // Wait for the full page load so registration does not compete with initial rendering.
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch((error) => {
        console.error("Service worker registration failed:", error);
      });
    });
  }
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

// async function fetchContributorCount(url) {
//   const puppeteer = require('puppeteer');
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto(url);

//   contributionElement = await page.getElementByClassName("js-yearly-contributions");
//   //const imgSrc = await page.$eval('img', img => img.src);

//   console.log(contributionElement);
//   await browser.close();
// }

//   url = "https://github.com/MarcusACWilliams";
  
//   fetchContributorCount(url);


