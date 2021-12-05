db.trips.aggregate([
  { $addFields: { dia: { $dayOfWeek: "$startTime" } } },
  { $match: {
    dia: { $eq: 5 },
  } },
  { $group: {
    _id: "$startStationName",
    total: { $sum: 1 },
  } },
  { $project: {
    nomeEstacao: "$_id",
    total: "$total",
    _id: false,
  } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
