<template>
  <div class="q-pa-md">
    <div class="row text-center">
      <div class="col-12 q-mb-md">
        <div class="text-custom">
          <div><strong>Conta:</strong></div>
          <div>{{ currencySymbol }} {{ billAmount }}</div>
        </div>
      </div>
      <div class="col-12 q-mb-md">
        <div class="text-custom">
          <div><strong>Gorjeta:</strong></div>
          <div>{{ currencySymbol }} {{ tipAmount }}</div>
        </div>
      </div>
      <div class="col-12 q-mb-md">
        <div class="text-custom">
          <div><strong>Total:</strong></div>
          <div>{{ currencySymbol }} {{ totalAmount }}</div>
        </div>
      </div>
      <div class="col-12 q-mb-md">
        <div class="text-custom">
          <div><strong>Por Pessoa:</strong></div>
          <div>{{ currencySymbol }} {{ amountPerPerson }}</div>
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