<template>
  <div>
    <select v-model="month" @change="updateDays()">
      <option v-for="(item, index) in months" :value="item.id" :key="index">{{item.name}}</option>
    </select>
    <input type="number" v-model="year">

    <div>
      <table>
        <tr>
          <th>Jour</th>
          <th v-for="(c, cIdx) in childs" :key="cIdx">{{c.name}}</th>
        </tr>
        <tr v-for="(d, dIdx) in days" :key="dIdx">
          <td class="right">{{ d.name }}</td>
          <td v-for="(cd, cdIdx) in d.childsData" :key="cdIdx">
            <input type="checkbox" v-model="cd['present']">Présent |
            <input type="checkbox" v-model="cd['repas_1']">Repas 1 |
            <input type="checkbox" v-model="cd['repas_2']">Repas 2
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      months: [
        { id: "01", name: "Janvier" },
        { id: "02", name: "Février" },
        { id: "03", name: "Mars" },
        { id: "04", name: "Avril" },
        { id: "05", name: "Mai" },
        { id: "06", name: "Juin" },
        { id: "07", name: "Juillet" },
        { id: "08", name: "Aout" },
        { id: "09", name: "Septembre" },
        { id: "10", name: "Octobre" },
        { id: "11", name: "Novembre" },
        { id: "12", name: "Décembre" }
      ],
      month: "01",
      year: "2019",
      days: []
    };
  },
  computed: {
    ...mapState(["childs"])
  },
  mounted() {
    Moment.locale("fr");
    this.month = Moment()
      .subtract(1, "month")
      .format("MM");
    this.year = Moment()
      .subtract(1, "month")
      .format("YYYY");

    this.updateDays();
  },
  methods: {
    updateDays() {
      let start = 1;
      let end =
        Moment(`${this.year}-${this.month}-01`)
          .subtract(1, "day")
          .format("DD") * 1;

      for (let i = start; i <= end; i++) {
        let day = (i < 10 ? "0" : "") + i;
        let dayDate = `${this.year}-${this.month}-${day}`;
        let weekDay = Moment(dayDate).format("e");

        let childsData = [];
        for (let c of this.childs) {
          childsData.push(JSON.parse(JSON.stringify(c.vars[weekDay])));
        }

        this.days.push({
          name: Moment(dayDate).format("dddd DD MMMM"),
          childsData
        });
      }
    }
  }
};
</script>

<style>
.right {
  text-align: right;
}
</style>