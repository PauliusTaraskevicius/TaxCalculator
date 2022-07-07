export const NPD = {
  standardNPD: 0,
  noNPD: 0,
  individualUpTo25NPD: 870,
  individualUpTo55NPD: 810,
};

export const contractType = {
  indefiniteContract: {
    group1: {
      employer: 1.77,
      budgetInstitution: 1.45,
      ltBank: 1.45,
      politicalUnion: 1.61,
      proffUnion: 1.61,
      religious: 1.61,
    },
    group2: {
      employer: 2.1,
      budgetInstitution: 1.78,
      ltBank: 1.78,
      politicalUnion: 1.94,
      proffUnion: 1.94,
      religious: 1.94,
    },
    group3: {
      employer: 2.33,
      budgetInstitution: 2.01,
      ltBank: 2.01,
      politicalUnion: 2.17,
      proffUnion: 2.17,
      religious: 2.17,
    },
    group4: {
      employer: 3.03,
      budgetInstitution: 2.71,
      ltBank: 2.71,
      politicalUnion: 2.87,
      proffUnion: 2.87,
      religious: 2.87,
    },
  },

  timedContract: {
    group1: {
      employer: 2.49,
      budgetInstitution: 2.17,
      ltBank: 2.17,
      politicalUnion: 2.33,
      proffUnion: 2.33,
      religious: 2.33,
    },
    group2: {
      employer: 2.82,
      budgetInstitution: 2.5,
      ltBank: 2.5,
      politicalUnion: 2.66,
      proffUnion: 2.66,
      religious: 2.66,
    },
    group3: {
      employer: 3.05,
      budgetInstitution: 2.73,
      ltBank: 2.73,
      politicalUnion: 2.89,
      proffUnion: 2.89,
      religious: 2.89,
    },
    group4: {
      employer: 3.75,
      budgetInstitution: 3.43,
      ltBank: 3.43,
      politicalUnion: 3.59,
      proffUnion: 3.59,
      religious: 3.59,
    },
  },
};

export const employerSodra = {
  doNotAccumulate: 19.5,
  collectsConstantly: 22.2,
  collectsAdditional: 22.5,
};

// Standartinis NPD = 460 - 0,26 x (1000,00(alga ant popieriaus) - 730) = 389,80€
// NPD netaikomas: NPD = 0 €
// NPD (iki 25% darbingumo lygis), todėl šiuo atveju: NPD = 740 €
// NPD (nuo 30% iki 55% darbingumo lygis), todėl šiuo atveju NPD = 690 €.

// GPM(Standartinis NPD) = (1000,00 - 389,80) x 20% = 122,04 €
// GPM(Netaikomas NPD) = (1000,00 - 0) x 20% = 200 €
// GPM(iki 25% darbingumo lygis NPD) = (1000,00 - 740,00) x 20% = 52,00 €
// GPM = (1000,00 - 690,00) x 20% = 62,00 €

// Darbuotojo Sodra = 1000,00 x 19,50% = 195,00 €

// Darbdavio Sodra = 1000,00 x 1,77% = 17,70 € - PRIVATUS DARBDAVYS
// Darbdavio Sodra = 1000,00 x 1,45% = 14,50 € - BIUDŽETINĖ ĮSTAIGA
// Darbdavio Sodra = 1000,00 x 1,45% = 14,50 € - LIETUVOS BANKAS
// Darbdavio Sodra = 1000,00 x 1,61% = 16,10 € - POLITINĖ PARTIJA
// Darbdavio Sodra = 1000,00 x 1,61% = 16,10 € - PROFESINĖ SAJUNGA
// Darbdavio Sodra = 1000,00 x 1,61% = 16,10 € - RELIGINĖ BENDRUOMENĖ AR BENDRIJA

//   ************Standartinis NPD************
// Standartinis NPD = 460 - 0,26 x (1000,00(alga ant popieriaus) - 730) = 389,80€
// PRIVATUS DARBDAVYS Darbdavio Sodra = 1000,00 x 1,77% = 17,70 €
// NEKAUPIA Darbuotojo Sodra = 1000,00 x 19,50% = 195,00 €
