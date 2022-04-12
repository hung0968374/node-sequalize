function findAllHobbyists(hobby, hobbies) {
  const result = [];
  Object.keys(hobbies).forEach((key) => {
    if (hobbies[key].includes(hobby)) {
      result.push(key);
    }
  });
  return result;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));
