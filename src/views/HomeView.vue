<template>
  <div>
    <div>
      <table class="tabela">
        <thead>
          <tr>
            <th @click="sortItems('date')">Date</th>
            <th @click="sortItems('origin')">Origin</th>
            <th class="d-none">Description</th>
            <th @click="sortItems('formpayment')">Form Payment</th>
            <th @click="sortItems('valor')">Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="item in $store.state.transactions" :key="item.date">
            <td class="">{{ item.date }}</td>
            <td>{{ item.origin }}</td>
            <td class="d-none">{{ item.description }}</td>
            <td>{{ item.formpayment }}</td>
            <td :class="(item.valor > 0) ? 'blue--text' : 'red--text'">{{ item.valor }}</td>
            <td>
              <v-btn color="primary" @click="deleteItem(item.id)"  :value="item.id">
                <svg-icon type="mdi" :path="path"></svg-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { getAllFinance, deleteFinance } from '../store/db.js';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDeleteOutline } from '@mdi/js'


export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      items: [],
      path: mdiDeleteOutline,
    };
  },
  async created() {
    await this.fetchItems();
  },
  methods: {
    async fetchItems() {
      let data = await getAllFinance();
      this.$store.commit('transactions', data )
    },
    async deleteItem(e) {
     
      await deleteFinance(e);
      await this.fetchItems();
    }
  },
};
</script>

<style>

.red--text{
  color: #ff5656;
  font-weight: 700;
}
.blue--text{
  font-weight: 700;
  color: #5661ff;
}

table { 
    font-size: 10px;
    color: antiquewhite;
    border-collapse: separate;
    font-size: small; 
    border-spacing: 0 10px; 
    margin-top: -10px; /* correct offset on first border spacing if desired */
    width: 100%;
}
td {
    border: none;
    /* border-style: solid none; */
    padding: 10px;
    background-color: rgba(0, 4, 255, 0.185);
}
td:first-child {
    /* border-left-style: solid; */
    border-top-left-radius: 10px; 
    border-bottom-left-radius: 10px;
}
td:last-child {
    /* border-right-style: solid; */
    border-bottom-right-radius: 10px; 
    border-top-right-radius: 10px; 
}

</style>

