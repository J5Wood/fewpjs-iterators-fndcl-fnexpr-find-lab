function superbowlWin(record) {
    const winningSeason = record.find(year => year.result === "W")
    if (winningSeason) {
     return winningSeason.year
    }
};