<template>
  <q-page>
    <q-card class="container">
      <q-card-section>
        <h3 class="text-center">Le / Tip</h3>
        <div class="row justify-center align-center">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div class="text-custom">
              <strong>Conta:</strong> {{ billAmount }} {{ currencySymbol }}
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div class="text-custom">
              <strong>Gorjeta:</strong> {{ tipAmount }} {{ currencySymbol }}
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div class="text-custom">
              <strong>Total:</strong> {{ totalAmount }} {{ currencySymbol }}
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div class="text-custom">
              <strong>Por Pessoa:</strong> {{ amountPerPerson }} {{ currencySymbol }}
            </div>
          </div>
        </div>
        <div class="text-left">
          <q-btn @click="goBack" icon="chevron_left" color="primary" class="q-mt-md" size="lg" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'ResultPage',
  computed: {
    ...mapState(['currencySymbol', 'billAmount']),
    ...mapGetters(['tipAmount', 'totalAmount', 'amountPerPerson']),
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
  height: 100vh;
}
.text-custom{
  font-size: 30px;
  padding: 30px;
}
</style>
