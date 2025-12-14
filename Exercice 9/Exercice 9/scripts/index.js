// Create Object here
// =========================================
    let episode = {
        title : "EP 1 .begins",
        duration : 90,
        hasBeenWatched : true
    }
// =========================================

document.querySelector("#episode-info").innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
