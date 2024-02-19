import axios from "axios";

function addVisitedPage(page) {
  const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || [];
  const pageString = JSON.stringify(page);
  const isPageVisited = visitedPages.some((visitedPage) => JSON.stringify(visitedPage) === pageString);
  if (!isPageVisited) {
    visitedPages.unshift(page);
    if (visitedPages.length > 4) {
      visitedPages.splice(4);
    }

    localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
  }
}


const fetchDataFromLinks = async (suffix) => {
  const links = [
    process.env.REACT_APP_RENDER_URL,
    process.env.REACT_APP_AWS_URL,
    // Add more links here
  ];

  let jsonData = null;

  for (let i = 1; i < links.length; i++) {
    try {
      const response = await axios.get(links[i] + suffix, {
        timeout: 5000, // Timeout in milliseconds (e.g., 5000 for 5 seconds)
      });
      jsonData = response.data;
      console.log("Successfully receive data from " + links[i] + suffix);
      return jsonData; // Return jsonData if successful
    } catch (error) {
      console.error("Error fetching URL:", links[i] + suffix);
      console.error(error);
    }
  }

  console.error("No successful response received.");
  return null; // Return null if no successful response received
};

export default fetchDataFromLinks;

export { addVisitedPage, fetchDataFromLinks };
