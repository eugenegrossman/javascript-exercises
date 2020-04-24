let findTheOldest = function(array) {

    const getAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
        }

    const oldest = array.sort(function(a, b) {
        const first = getAge(a.yearOfBirth, a.yearOfDeath)
        const next = getAge(b.yearOfBirth, b.yearOfDeath)
        return first > next ? -1 : 1;
      })
      return oldest[0]
}

module.exports = findTheOldest


