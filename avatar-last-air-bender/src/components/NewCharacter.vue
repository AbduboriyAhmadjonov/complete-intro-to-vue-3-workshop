<script>
export default {
  props: ['characterList'],
  data: () => ({
    newCharacter: {
      name: '',
      typeOfMagic: '',
      winRate: null,
      weakness: '',
    },
  }),
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = { name: '', typeOfMagic: '', winRate: '', weakness: '' }
    },
  },
}
</script>

<template>
  <h2>New Character</h2>
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
</template>
