db.trips.aggregate([
  { $addFields: {
    diaDaSemana: { $dayOfWeek: "$startTime" },
  } },
  { $group: {
    _id: "$diaDaSemana",
    count: { $sum: 1 },
  } },
  { $sort: { count: -1 } },
  { $limit: 1 },
  { $project: {
    diaDaSemana: "$_id",
    total: "$count",
    _id: false,
  } },
]);
