<template>
  <div>
    <h1>Enfants</h1>

    <button type="button" @click="form_open()">Nouveau</button>

    <div v-for="(c,index) in childs" :key="index">
      {{c.name}}
      <button type="button" @click="form_open(index)">Edit.</button>
      <button type="button" @click="item_remove(index)">Supp.</button>
    </div>

    <form v-show="show_form">
      Nom:
      <input type="text" v-model="form.name">
      <table>
        <tr>
          <th>Jour</th>
          <th>Present</th>
          <th>Repas</th>
          <th>Gouter</th>
        </tr>
        <tr v-for="(v,index) in form.vars" :key="index">
          <td>{{ jours[index] }}</td>
          <td>
            <input type="checkbox" v-model="v.present">
          </td>
          <td>
            <input type="checkbox" v-model="v.repas_1">
          </td>
          <td>
            <input type="checkbox" v-model="v.repas_2">
          </td>
        </tr>
      </table>
      <button type="button" @click="form_save()">Enregistrer</button>
      <button type="button" @click="form_close()">Annuler</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      show_form: false,
      jours: ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."],
      default: {
        name: "",
        index: null,
        vars: [
          { present: true, repas_1: true, repas_2: true },
          { present: true, repas_1: true, repas_2: true },
          { present: true, repas_1: true, repas_2: true },
          { present: true, repas_1: true, repas_2: true },
          { present: true, repas_1: true, repas_2: true },
          { present: false, repas_1: false, repas_2: false },
          { present: false, repas_1: false, repas_2: false }
        ]
      },
      form: {}
    };
  },
  computed: {
    ...mapState(["childs"])
  },
  methods: {
    form_open(index = null) {
      this.show_form = true;

      if (index != null) {
        this.form = this.childs[index];
        this.form.index = index;
      } else {
        this.form = JSON.parse(JSON.stringify(this.default));
      }
    },
    form_close() {
      this.show_form = false;
      this.form = {};
    },
    form_save() {
      this.$store.dispatch("child_save", this.form);
      this.show_form = false;
    },
    item_remove(index) {
      this.$store.dispatch("child_rem", index);
    }
  }
};
</script>