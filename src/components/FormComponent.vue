<template>
  <div class="q-pa-md">
    <div class="row col-xs-10 col-sm-10 col-md-6 col-lg-5 q-py-lg justify-center">
      <div class="col-10 flex justify-center">
        <q-btn-toggle v-model="localCurrency" toggle-color="primary" :options="[
          { label: 'EUR', value: 'EUR' },
          { label: 'USD', value: 'USD' }
        ]" @input="updateValues" />
      </div>
      <div class="col-8">
        <div class="text-custom">Valor:</div>
        <q-input v-model="localBillAmount" type="number" inputmode="numeric" :min="0" outlined dense
          @input="updateValues" />
      </div>
      <div class="col-8 q-mt-lg">
        <div class="text-custom">Gorjeta: {{ localTipPercentage }}%</div>
        <q-slider class="q-pa-sm" v-model="localTipPercentage" :min="10" :max="20" :value="1" @input="updateValues"
          caption="Percentual de Gorjeta" color="primary" track-color="grey-3" />
      </div>
      <div class="col-8 q-mt-lg">
        <div class="text-custom">Pessoas: {{ localNumberOfPeople }}</div>
        <q-slider class="q-pa-sm" v-model="localNumberOfPeople" :min="2" :max="16" value="1" @input="updateValues"
          caption="Número de Pessoas" color="primary" track-color="grey-3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    billAmount: {
      type: Number,
      required: true
    },
    tipPercentage: {
      type: Number,
      required: true
    },
    numberOfPeople: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localBillAmount: this.billAmount,
      localTipPercentage: this.tipPercentage,
      localNumberOfPeople: this.numberOfPeople,
      localCurrency: this.currency
    };
  },
  watch: {
    billAmount(newValue) {
      this.localBillAmount = newValue;
    },
    tipPercentage(newValue) {
      this.localTipPercentage = newValue;
    },
    numberOfPeople(newValue) {
      this.localNumberOfPeople = newValue;
    },
    currency(newValue) {
      this.localCurrency = newValue;
    }
  },
  methods: {
    updateValues() {
      this.$emit('update:billAmount', this.localBillAmount);
      this.$emit('update:tipPercentage', this.localTipPercentage);
      this.$emit('update:numberOfPeople', this.localNumberOfPeople);
      this.$emit('update:currency', this.localCurrency);
    }
  }
};
</script>

<style scoped></style>
