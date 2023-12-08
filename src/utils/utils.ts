export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
export function checkRtl(character: string) {
  console.log('checkRtl', character)

  var RTL = [
    'ا',
    'ب',
    'پ',
    'ت',
    'س',
    'ج',
    'چ',
    'ح',
    'خ',
    'د',
    'ذ',
    'ر',
    'ز',
    'ژ',
    'س',
    'ش',
    'ص',
    'ض',
    'ط',
    'ظ',
    'ع',
    'غ',
    'ف',
    'ق',
    'ک',
    'گ',
    'ل',
    'م',
    'ن',
    'و',
    'ه',
    'ی',
  ]
  return RTL.indexOf(character[0]) > -1
}

export enum Question {
  FirstSchool = 'what is your FirstSchool ?',
  BestFriendName = 'what is your best friend name ?',
  FootballClub = 'What is your favorite football club ?',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum Role {
  Admin = 'admin',
  User = 'user',
}
