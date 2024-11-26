<template>
  <q-page class="q-pa-md">
    <div class="text-center">
      <h5>
        Le / Tip
      </h5>
    </div>
    <div v-if="isMobile">
      <FormComponent :billAmount="billAmount" :tipPercentage="tipPercentage" :numberOfPeople="numberOfPeople"
        :currency="currency" @update:billAmount="billAmount = $event" @update:tipPercentage="tipPercentage = $event"
        @update:numberOfPeople="numberOfPeople = $event" @update:currency="currency = $event" />
      <div class="potion-btn">
        <q-btn @click="goToResultPage" :disable="billAmount <= 0" icon="chevron_right" round color="primary"
          size="lg" />
      </div>
    </div>
    <div v-else class="row items-center">
      <div class="col-5">
        <FormComponent :billAmount="billAmount" :tipPercentage="tipPercentage" :numberOfPeople="numberOfPeople"
          :currency="currency" @update:billAmount="billAmount = $event" @update:tipPercentage="tipPercentage = $event"
          @update:numberOfPeople="numberOfPeople = $event" @update:currency="currency = $event" />
      </div>
      <div class="col text-center">
        <q-btn @click="calculate" :disable="billAmount <= 0" icon="sync" color="primary" size="lg" />
      </div>
      <div class="col-5">
        <ResultComponent :billAmount="billAmount" :tipPercentage="tipPercentage" :numberOfPeople="numberOfPeople"
          :currency="currency" />
      </div>
    </div>
  </q-page>
</template>

<script>
import FormComponent from '../components/FormComponent';
import ResultComponent from '../components/ResultComponent';
import { mapMutations } from 'vuex';

export default {
  name: 'EnteredPage',
  components: {
    FormComponent,
    ResultComponent
  },
  data() {
    return {
      billAmount: 0,
      tipPercentage: 10,
      numberOfPeople: 2,
      currency: 'EUR',
      isMobile: false,
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

    async calculate() {
      this.setBillAmount(this.billAmount);
      this.setTipPercentage(this.tipPercentage);
      this.setNumberOfPeople(this.numberOfPeople);
      this.setCurrency(this.currency);
      await this.$store.dispatch('fetchConversion');
    },

    checkDevice() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  created() {
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);
  },
  destroyed() {
    window.removeEventListener('resize', this.checkDevice);
  }
};
</script>

<style scoped>
.potion-btn {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
