<template>
  <q-page class="q-pa-md">
    <div class="row justify-center align-center">
      <div class="col-12">
        <h5 class="text-center">Le / Tip</h5>
      </div>
      <div class="row col-xs-10 col-sm-10 col-md-6 col-lg-5 q-py-lg justify-center">
        <div class="col-10 flex justify-center">
          <q-btn-toggle v-model="currency" toggle-color="primary" :options="[
            { label: 'EUR', value: 'EUR' },
            { label: 'USD', value: 'USD' }
          ]" />
        </div>
        <div class="col-8 ">
          <div class="text-custom">Valor:</div>
          <q-input v-model="billAmount" type="number" inputmode="numeric" :min="0" outlined dense />
        </div>
        <div class="col-8  q-mt-lg">
          <div class=" text-custom">Gorjeta: {{ tipPercentage }}%</div>
          <q-slider class="q-pa-sm" v-model="tipPercentage" :min="10" :max="20" :value="1"
            caption="Percentual de Gorjeta" color="primary" track-color="grey-3" />
        </div>
        <div class="col-8 q-mt-lg">
          <div class=" text-custom">Pessoas: {{ numberOfPeople }}</div>
          <q-slider class="q-pa-sm" v-model="numberOfPeople" :min="2" :max="16" value="1" caption="Número de Pessoas"
            color="primary" track-color="grey-3" />
        </div>
      </div>

    </div>
    <div class="potion-btn">
      <q-btn @click="goToResultPage" :disable="billAmount <= 0" icon="chevron_right" round color="primary" size="lg" />
    </div>

  </q-page>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'EnteredPage',
  data() {
    return {
      billAmount: 0,
      tipPercentage: 10,
      numberOfPeople: 2,
      currency: 'EUR',
      tipOptions: [10, 15, 20],
    };
  },
  methods: {
    ...mapMutations(['setBillAmount', 'setTipPercentage', 'setNumberOfPeople', 'setCurrency']),
    async goToResultPage() {
      this.setBillAmount(this.billAmount);
      this.setTipPercentage(this.tipPercentage);
      this.setNumberOfPeople(this.numberOfPeople);
      this.setCurrency(this.currency);
      await this.$store.dispatch('fetchConversion');
      this.$router.push('/resultado');
    },
  },
};
</script>

<style scoped>
.potion-btn {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
