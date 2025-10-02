<script>
import FavouriteCharacters from './components/FavouriteCharacters.vue'
import Statistics from './components/Statistics.vue'
import NewCharacter from './components/NewCharacter.vue'
import Characters from './components/Characters.vue'
import BaseLayout from './components/BaseLayout.vue'
export default {
  components: {
    Statistics,
    FavouriteCharacters,
    NewCharacter,
    Characters,
    BaseLayout,
  },
  data: () => ({
    characterList: [
      {
        name: 'Aang',
        typeOfMagic: ['Airbending', 'Waterbending', 'Earthbending', 'Firebending'],
        winRate: 85,
        weakness: 'Firebending',
      },
      {
        name: 'Zuko',
        typeOfMagic: ['Firebending'],
        winRate: 70,
        weakness: 'Waterbending',
      },
      {
        name: 'Toph',
        typeOfMagic: ['Earthbending'],
        winRate: 90,
        weakness: 'Waterbending',
      },
      {
        name: 'Katara',
        typeOfMagic: ['Waterbending'],
        winRate: 75,
        weakness: 'Earthbending',
      },
    ],
    favoriteList: [],
    fightList: {
      blueTeam: [],
      redTeam: [],
    },
  }),
  methods: {
    favoriteCharacter(character) {
      this.favoriteList.push(character)
    },
    fight(character, team) {
      this.fightList[team].push(character)
    },
    startFight() {
      const calcPower = (teamA, teamB) => {
        return teamA.reduce((total, char) => {
          let power = char.winRate
          // penalty if opponent has their weakness
          if (teamB.some((opponent) => opponent.typeOfMagic.includes(char.weakness))) {
            power -= 15
          }
          return total + power
        }, 0)
      }

      const blueScore = calcPower(this.fightList.blueTeam, this.fightList.redTeam)
      const redScore = calcPower(this.fightList.redTeam, this.fightList.blueTeam)

      alert(
        blueScore > redScore
          ? 'Blue team wins!'
          : redScore > blueScore
            ? 'Red team wins!'
            : "It's a tie!",
      )
      this.fightList.blueTeam = []
      this.fightList.redTeam = []
    },
  },
}
</script>

<template>
  <BaseLayout>
    <template #sidebar>
      <Statistics :characterList="characterList" />
    </template>
    <template #main>
      <Characters :characterList="characterList" @favouriteCharacter="favoriteCharacter" />
    </template>
    <template #footer>
      <FavouriteCharacters :favoriteList="favoriteList" />
    </template>
  </BaseLayout>
  <NewCharacter :characterList="characterList" />
  <h2>Who wins who?</h2>
  <p>Select your characters:</p>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type of Magic</th>
        <th>Win Rate</th>
        <th>Weakness</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="character in characterList" :key="character.name">
        <td>{{ character.name }}</td>
        <td>{{ character.typeOfMagic }}</td>
        <td>{{ character.winRate }}%</td>
        <td>{{ character.weakness }}</td>
        <td><button @click="fight(character, 'blueTeam')">🔷🥷 Fight</button></td>
        <td><button @click="fight(character, 'redTeam')">🔴🥷 Fight</button></td>
      </tr>
    </tbody>
  </table>

  <h2>Fight List</h2>
  <p v-if="fightList.length === 0">No one is fighting</p>
  <p>Blue team</p>
  <ul>
    <li v-for="character in fightList.blueTeam" :key="character.name">
      <p>{{ character.name }}</p>
      <p>{{ character.winRate }}%</p>
      <p>{{ character.weakness }}</p>
    </li>
  </ul>
  <p>Red team</p>
  <ul>
    <li v-for="character in fightList.redTeam" :key="character.name">
      <p>{{ character.name }}</p>
      <p>{{ character.winRate }}%</p>
      <p>{{ character.weakness }}</p>
    </li>
  </ul>
  <button @click="startFight">Start Fight</button>
</template>
