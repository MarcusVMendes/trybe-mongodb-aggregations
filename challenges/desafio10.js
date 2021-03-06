db.trips.aggregate([
  { $group: {
    _id: "$usertype",
    duracaoMedia: { $avg: { $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 3600000] } },
  } },
  { $project: {
    tipo: "$_id",
    duracaoMedia: { $round: ["$duracaoMedia", 2] },
    _id: false,
  } },
  { $sort: { duracaoMedia: 1 } },
]);
