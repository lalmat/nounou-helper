<template>
  <div>
    Salaire mensuel :
    <input type="number" step="0.01" v-model="salaire"> &euro;
    <br>Indéminté journalière:
    <br>Repas:
    <input type="number" step="0.01" v-model="repas_1"> &euro;
    <br>Gouter:
    <input type="number" step="0.01" v-model="repas_2"> &euro;
    <br>
  </div>
</template>

<script>
export default {
  computed: {
    salaire: {
      get() {
        return this.$store.state.price.salaire;
      },
      set(value) {
        this.$store.commit("price_update", { key: "salaire", value });
      }
    },

    repas_1: {
      get() {
        return this.$store.state.price.repas_1;
      },
      set(value) {
        this.$store.commit("price_update", { key: "repas_1", value });
      }
    },

    repas_2: {
      get() {
        return this.$store.state.price.repas_2;
      },
      set(value) {
        this.$store.commit("price_update", { key: "repas_2", value });
      }
    }
  }
};
</script>