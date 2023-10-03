import char from './char';
import Team from './Team';

const arrayChar = [{ ...char }, { ...char }, { ...char }, { ...char }];
const team = new Team(arrayChar);

const generatorTeam = team[Symbol.iterator]();

/* eslint-disable-next-line */
for (let item of generatorTeam) {
  console.log(item);
}
