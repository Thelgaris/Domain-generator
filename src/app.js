let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let combinations = "";
let extension = ".com";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      combinations = pronoun[i] + adj[j] + noun[k] + extension;
      console.log(combinations);
    }
  }
}
