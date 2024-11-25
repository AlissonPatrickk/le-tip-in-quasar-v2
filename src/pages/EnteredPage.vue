<template>
    <q-page>
        <q-card class="container">
            <q-card-section>
                <h3 class="text-center">Le / Tip</h3>
                <div class="row justify-center align-center">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 q-mb-xl flex justify-center">
                        <q-btn-toggle v-model="currency" toggle-color="primary" :options="[
                            { label: 'EUR', value: 'EUR' },
                            { label: 'USD', value: 'USD' }
                        ]" />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 q-mb-xl flex justify-center">
                        <div class="text-custom">Valor da Conta:</div>
                        <q-input v-model="billAmount" type="number" :min="0" outlined dense />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 q-mb-xl ">
                        <div class="q-mb-xl text-custom">Gorjeta: {{ tipPercentage }}%</div>
                        <q-slider class="q-pa-sm" v-model="tipPercentage" :min="10" :max="20" step="1"
                            label="Percentual de Gorjeta" color="primary" track-color="grey-3" label-always filled />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div class="q-mb-xl text-custom">Pessoas: {{ numberOfPeople }}</div>
                        <q-slider class="q-pa-sm" v-model="numberOfPeople" :min="2" :max="16" step="1"
                            label="Número de Pessoas" color="primary" track-color="grey-3" label-always filled />
                    </div>
                </div>
                <div class="text-right q-mt-lg">
                    <q-btn @click="goToResultPage" icon="chevron_right"
                        style="border-radius: 50px; width: 50px; height: 50px;" color="primary" class="q-mt-md"
                        size="lg" />
                </div>
            </q-card-section>
        </q-card>
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
    async created() {
        await this.$store.dispatch('fetchExchangeRate');
    },
    methods: {
        ...mapMutations(['setBillAmount', 'setTipPercentage', 'setNumberOfPeople', 'setCurrency']),
        goToResultPage() {
            this.setBillAmount(this.billAmount);
            this.setTipPercentage(this.tipPercentage);
            this.setNumberOfPeople(this.numberOfPeople);
            this.setCurrency(this.currency);
            this.$router.push('/resultado');
        },
    },
};
</script>

<style scoped>
.container {
    background-color: #f7f7f7;
    height: 100vh;
}

.text-custom {
    font-size: 20px;
    font-weight: bold;
}
</style>