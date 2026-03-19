"use strict";

var yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = "\xA9 " + new Date().getFullYear();
}

var revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  // Reveal sections once as they enter the viewport, then stop observing them.
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  revealEls.forEach(function (el) {
    return observer.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    return el.classList.add("visible");
  });
}

if ("serviceWorker" in navigator) {
  // Wait for the full page load so registration does not compete with initial rendering.
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js")["catch"](function (error) {
      console.error("Service worker registration failed:", error);
    });
  });
} // Fetch public profile data from the GitHub REST API.
// Note: the yearly contribution count shown on github.com is not exposed by the
// REST API. Retrieving it requires the GitHub GraphQL API with an authenticated
// token, which should not be embedded in client-side code. The REST API provides
// all other public profile stats (repos, followers, etc.) without authentication.


function fetchGitHubProfile(username) {
  var response;
  return regeneratorRuntime.async(function fetchGitHubProfile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/users/".concat(username), {
            headers: {
              Accept: "application/vnd.github+json"
            }
          }));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 5;
            break;
          }

          throw new Error("GitHub API responded with status ".concat(response.status));

        case 5:
          return _context.abrupt("return", response.json());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

fetchGitHubProfile("MarcusACWilliams").then(function (profile) {
  console.log("GitHub profile:", profile); // profile.public_repos  — number of public repositories
  // profile.followers     — follower count
  // profile.following     — following count
  // Use these values to populate a DOM element, e.g.:
  // document.getElementById("gh-repos").textContent = profile.public_repos;
})["catch"](function (error) {
  console.error("Failed to fetch GitHub profile:", error);
});
url = "https://github.com/MarcusACWilliams";
fetchContributorCount(url);

function fetchContributorCount(url) {
  var puppeteer, browser, page;
  return regeneratorRuntime.async(function fetchContributorCount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          puppeteer = require('puppeteer');
          _context2.next = 3;
          return regeneratorRuntime.awrap(puppeteer.launch());

        case 3:
          browser = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(browser.newPage());

        case 6:
          page = _context2.sent;
          _context2.next = 9;
          return regeneratorRuntime.awrap(page["goto"](url));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(page.getElementByClassName("js-yearly-contributions"));

        case 11:
          contributionElement = _context2.sent;
          //const imgSrc = await page.$eval('img', img => img.src);
          console.log(contributionElement);
          _context2.next = 15;
          return regeneratorRuntime.awrap(browser.close());

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
}