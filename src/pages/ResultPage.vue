<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-10">
        <h5 class="text-center">Resultado</h5>
      </div>
      <ResultComponent />
    </div>
    <div class="potion-btn">
      <q-btn round @click="goBack" icon="chevron_left" color="primary" size="lg" />
    </div>
  </q-page>
</template>

<script>
import ResultComponent from '../components/ResultComponent';

export default {
  name: 'ResultPage',
  components: {
    ResultComponent
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.potion-btn {
  position: absolute;
  left: 15px;
  bottom: 15px;
}
</style>
