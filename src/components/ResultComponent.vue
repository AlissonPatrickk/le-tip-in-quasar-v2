<template>
  <div class="q-pa-md">
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
          <div><strong>em Reais (R$):</strong></div>
          <div>{{ convertedRealAmount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ResultComponent',
  computed: {
    ...mapState(['currencySymbol', 'billAmount', 'realAmount']),
    ...mapGetters(['tipAmount', 'totalAmount', 'amountPerPerson']),
    convertedRealAmount() {
      const totalAmountInCurrency = parseFloat(this.totalAmount) || 0;
      return (totalAmountInCurrency * this.realAmount).toFixed(2);
    }
  },
};
</script>

<style scoped></style>