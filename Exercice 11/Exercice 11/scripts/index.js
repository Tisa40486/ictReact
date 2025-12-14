// Create a class here
// =====================================
  class Episode {
    constructor(title, duration, hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }

  const firstEpisode = new Episode("Test", 60, true);
  const secondEpisode = new Episode("Miaou", 40, false);
  const thirdEpisode = new Episode("Hello", 20, true);
// =====================================

document.querySelector("#first-episode-info").innerText = `Episode: ${
  firstEpisode.title
}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#second-episode-info").innerText = `Episode: ${
  secondEpisode.title
}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#third-episode-info").innerText = `Episode: ${
  thirdEpisode.title
}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
