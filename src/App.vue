<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.button-around {
  border-radius: 50px;
  width: 50px;
  height: 50px;
}

.border-custom {
  border: solid 1px;
  border-radius: 15px;
}

.text-custom {
  font-size: 15px;
  font-weight: bold;
}
</style>
