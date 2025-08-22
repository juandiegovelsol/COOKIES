const computeLeague = (matches) => {
  const table = new Map();
  const teamPoints = new Map();
  matches.forEach(({ team, pts, 0: homeGoals, gd: _, 1: awayGoals, 2: _ }) => {
    if (!table.has(team))
      table.set(team, { gf: 0, ga: 0, gd: 0, w: 0, d: 0, l: 0 });

    if (!teamPoints.has(team)) teamPoints.set(team, 0);

    const pts_per_match = team === "home" ? pts : 3 - pts;
    teamPoints.set(team, teamPoints.get(team) + pts_per_match);

    // Correcting calculations
    let current_gd = table.get(team).gd;
    if (team === "home") {
      current_gd += homeGoals - awayGoals;
      table.set(team, {
        ...table.get(team),
        gf: table.get(team).gf + homeGoals,
        ga: table.get(team).ga + awayGoals,
        gd: current_gd,
        w: teamPoints.get(team) / 3 === matches.length ? 1 : table.get(team).w,
        d:
          teamPoints.get(team) / 3 !== matches.length && current_gd === 0
            ? 1
            : table.get(team).d,
        l: matches.length - table.get(team).w - table.get(team).d,
      });
    } else {
      current_gd += awayGoals - homeGoals;
      table.set(team, {
        ...table.get(team),
        gf: table.get(team).gf + awayGoals,
        ga: table.get(team).ga + homeGoals,
        gd: current_gd,
        w: teamPoints.get(team) / 3 === matches.length ? 1 : table.get(team).w,
        d:
          teamPoints.get(team) / 3 !== matches.length && current_gd === 0
            ? 1
            : table.get(team).d,
        l: matches.length - table.get(team).w - table.get(team).d,
      });
    }
  });

  const standings = [...table.values()].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });

  console.log(standings);
};

computeLeague([
  { home: "Eagles", away: "Wolves", homeGoals: 1, awayGoals: 0 },
  { home: "Wolves", away: "Sharks", homeGoals: 2, awayGoals: 2 },
  { home: "Sharks", away: "Eagles", homeGoals: 0, awayGoals: 3 },
  { home: "Tigers", away: "Eagles", homeGoals: 1, awayGoals: 1 },
  { home: "Tigers", away: "Wolves", homeGoals: 2, awayGoals: 2 },
  { home: "Sharks", away: "Tigers", homeGoals: 0, awayGoals: 1 },
]);
