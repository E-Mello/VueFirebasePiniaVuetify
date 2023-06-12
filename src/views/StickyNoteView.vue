<template>
  <v-container fluid class="myApp bg-white">
    <v-row fluid align="center">
      <v-col cols="4">
        <v-select v-model="selectedQuantity" :items="quantities" label="Select Quantity"></v-select>
      </v-col>
      <v-col cols="4">
        <v-btn color="primary" @click="createStickyNotes()">Create Sticky Notes</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn color="primary" @click="showHiddenStickyNotes()">Show Hidden Sticky Notes</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <template v-if="stickyNotes.length > 0">
        <v-col v-for="note in stickyNotes" :key="note.id" cols="3">
          <v-card class="sticky-note" :color="note.color" elevation="12" v-show="note.visible">
            <v-card-text>
              {{ note.text }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="hideStickyNote(note)">Hide</v-btn>
              <v-btn color="primary" @click="deleteStickyNote(note)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12">
          <p>No sticky notes to show.</p>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      selectedQuantity: null,
      quantities: [1, 2, 3, 4, 5],
      stickyNotes: [],
      colors: [
        "red lighten-2",
        "pink lighten-2",
        "purple lighten-2",
        "deep-purple lighten-2",
        "indigo lighten-2",
        "blue lighten-2",
        "light-blue lighten-2",
        "cyan lighten-2",
        "teal lighten-2",
        "green lighten-2",
        "light-green lighten-2",
        "lime lighten-2",
        "yellow lighten-2",
        "amber lighten-2",
        "orange lighten-2",
        "deep-orange lighten-2"
      ]
    };
  },
  methods: {
    createStickyNotes() {
      if (this.selectedQuantity) {
        for (let i = 0; i < this.selectedQuantity; i++) {
          const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
          const newStickyNote = {
            id: this.stickyNotes.length + 1,
            text: `Sticky Note ${this.stickyNotes.length + 1}`,
            color: randomColor,
            visible: true
          };
          this.stickyNotes.push(newStickyNote);
        }
      }
    },
    hideStickyNote(note) {
      note.visible = false;
    },
    deleteStickyNote(note) {
      const index = this.stickyNotes.indexOf(note);
      if (index > -1) {
        this.stickyNotes.splice(index, 1);
      }
    },
    showHiddenStickyNotes() {
      this.stickyNotes.forEach(note => {
        note.visible = true;
      });
    },
  }
};
</script>

<style scoped>
.sticky-note {
  margin-top: 20px;
  padding: 10px;
  cursor: move;
}

.login-container {
  display: flex;
  justify-content: center;
  place-items: center;
  justify-items: center;
  align-items: center;
}
</style>
