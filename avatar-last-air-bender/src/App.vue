<script>
export default {
  data: () => ({
    newCharacter: {
      name: '',
    },
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
  computed: {
    benderStatistics() {
      const elements = ['Airbending', 'Waterbending', 'Earthbending', 'Firebending']
      const statistics = {
        Airbending: 0,
        Waterbending: 0,
        Earthbending: 0,
        Firebending: 0,
      }

      this.characterList.forEach((character) => {
        elements.forEach((element) => {
          if (character.typeOfMagic.includes(element)) {
            statistics[element] += 1
          }
        })
      })

      return statistics
    },
  },
  watch: {},
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = { name: '', typeOfMagic: '', winRate: null, weakness: '' }
    },
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
  <h2>Statistics</h2>
  <ul>
    <li v-for="(stat, type) in benderStatistics" :key="type">{{ type }}: {{ stat }}</li>
  </ul>

  <p v-if="characterList.length === 0">There are no characters</p>
  <h2 v-else>Characters</h2>
  <ul>
    <li v-for="character in characterList">
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter(character)">⭐ Favorite</button>
    </li>
  </ul>
  <h2>Favorite Characters</h2>
  <ol v-if="favoriteList.length > 0">
    <li v-for="character in favoriteList">
      <p>{{ character.name }}</p>
      <p>{{ character.typeOfMagic }}</p>
      <p>{{ character.winRate }}%</p>
      <p>{{ character.weakness }}</p>
    </li>
  </ol>
  <p v-else>No favorite characters yet!</p>
  <h2>New Character</h2>
  <!-- <pre>{{ newCharacter }}</pre> -->
  <label for="character-name">Name</label>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
  <label for="character-type">Type of Magic</label>
  <select v-model="newCharacter.typeOfMagic">
    <option value="Airbending">Airbending</option>
    <option value="Waterbending">Waterbending</option>
    <option value="Earthbending">Earthbending</option>
    <option value="Firebending">Firebending</option>
  </select>
  <label for="character-win-rate">Win Rate</label>
  <input type="number" v-model="newCharacter.winRate" />
  <label for="character-weakness">Weakness</label>
  <select v-model="newCharacter.weakness">
    <option value="Airbending">Airbending</option>
    <option value="Waterbending">Waterbending</option>
    <option value="Earthbending">Earthbending</option>
    <option value="Firebending">Firebending</option>
  </select>
  <p>
    <span v-for="(character, index) in characterList"
      >{{ character.name }}{{ index === characterList.length - 1 ? '' : ', ' }}
    </span>
  </p>
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
