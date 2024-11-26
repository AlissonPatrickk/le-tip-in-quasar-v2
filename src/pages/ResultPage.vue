<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-10">
        <h5 class="text-center">Le / Tip</h5>
      </div>
      <div class="col-xs-10 col-sm-10 col-md-6 col-lg-5 q-py-lg ">
        <div class="row text-center">
          <div class="col-12 q-mb-md">
            <div class="text-custom">
              <div><strong>Conta:</strong></div>
              <div>{{ billAmount }} {{ currencySymbol }}</div>
            </div>
          </div>
          <div class="col-12 q-mb-md">
            <div class="text-custom">
              <div><strong>Gorjeta:</strong></div>
              <div>{{ tipAmount }} {{ currencySymbol }}</div>
            </div>
          </div>
          <div class="col-12 q-mb-md">
            <div class="text-custom">
              <div><strong>Total:</strong></div>
              <div>{{ totalAmount }} {{ currencySymbol }}</div>
            </div>
          </div>
          <div class="col-12 q-mb-md">
            <div class="text-custom">
              <div><strong>Por Pessoa:</strong></div>
              <div>{{ amountPerPerson }} {{ currencySymbol }}</div>
            </div>
          </div>
          <div class="col-12 q-mt-md">
            <div class="text-custom">
              <div><strong>Em Reais (R$):</strong></div>
              <div>{{ convertedRealAmount }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="potion-btn">
      <q-btn round @click="goBack" icon="chevron_left" color="primary" size="lg" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'ResultPage',
  computed: {
    ...mapState(['currencySymbol', 'billAmount', 'exchangeRate', 'realAmount']),
    ...mapGetters(['tipAmount', 'totalAmount', 'amountPerPerson']),

    convertedRealAmount() {
      const totalAmountInCurrency = parseFloat(this.totalAmount) || 0;
      return (totalAmountInCurrency * this.realAmount).toFixed(2);
    },
  },
  created() {
    this.$store.dispatch('fetchConversion');
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.potion-btn {
  position: absolute;
  left: 15px;
  bottom: 15px;
}
</style>
