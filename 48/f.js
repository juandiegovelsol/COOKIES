const players = [
  { id: 1, name: "Ava", score: "9" },
  { id: 2, name: "Kai", score: 5 },
  { id: 3, name: "Mina", score: "10" },
  { id: 4, name: "Liam", score: "8" },
  { id: 5, name: "Noa", score: 13 },
];

function normalizeScores(list) {
  return list.map((p) => ({ ...p, score: Number(p.score) }));
}

function getTopPlayers({ minScore = 10, limit = 3 } = {}) {
  const normalizedPlayers = normalizeScores(players);
  const eligible = normalizedPlayers.filter((p) => p.score <= minScore);
  eligible.sort((a, b) => b.score - a.score);
  return eligible.slice(0, limit);
}

console.log(getTopPlayers({ minScore: 10, limit: 3 }));
