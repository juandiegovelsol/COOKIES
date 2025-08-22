const computeLeague = (matches) => {
  const table = new Map();
  const get = (t) =>
    table.get(t) ||
    table
      .set(t, { team: t, pts: 0, gf: 0, ga: 0, gd: 0, w: 0, d: 0, l: 0 })
      .get(t);
  for (const { home, away, homeGoals, awayGoals } of matches) {
    const H = get(home),
      A = get(away);
    H.gf += homeGoals;
    H.ga += awayGoals;
    A.gf += awayGoals;
    A.ga += homeGoals;
    H.gd = H.gf - H.ga;
    A.gd = A.gf - A.ga;
    if (homeGoals > awayGoals) {
      H.pts += 3;
      H.w++;
      A.l++;
    } else if (homeGoals < awayGoals) {
      A.pts += 3;
      A.w++;
      H.l++;
    } else {
      H.pts++;
      A.pts++;
      H.d++;
      A.d++;
    }
  }
  const standings = [...table.values()].sort(
    (a, b) =>
      b.pts - a.pts ||
      b.gd - a.gd ||
      b.gf - a.gf ||
      a.team.localeCompare(b.team)
  );
  return standings[0];
};

const matches = [
  { home: "Eagles", away: "Wolves", homeGoals: 1, awayGoals: 0 },
  { home: "Wolves", away: "Sharks", homeGoals: 2, awayGoals: 2 },
  { home: "Eagles", away: "Sharks", homeGoals: 0, awayGoals: 3 },
  { home: "Tigers", away: "Eagles", homeGoals: 1, awayGoals: 1 },
  { home: "Tigers", away: "Wolves", homeGoals: 0, awayGoals: 2 },
  { home: "Sharks", away: "Tigers", homeGoals: 1, awayGoals: 1 },
];

console.log(computeLeague(matches));
