import Vue from 'vue';
import Vuex from 'vuex';
import { fetchExchangeRate } from '../services/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        billAmount: 0,
        tipPercentage: 10,
        numberOfPeople: 2,
        currency: 'EUR',
        exchangeRate: 1,
        currencySymbol: '€',
    },
    mutations: {
        setBillAmount(state, amount) {
            state.billAmount = amount;
        },
        setTipPercentage(state, percentage) {
            state.tipPercentage = percentage;
        },
        setNumberOfPeople(state, people) {
            state.numberOfPeople = people;
        },
        setCurrency(state, currency) {
            state.currency = currency;
            state.currencySymbol = currency === 'EUR' ? '€' : (currency === 'USD' ? '$' : 'R$');
        },
        setExchangeRate(state, rate) {
            state.exchangeRate = rate;
        },
    },
    actions: {
        async fetchExchangeRate({ commit, state }) {
            try {
                const rate = await fetchExchangeRate(state.currency, 'BRL');
                commit('setExchangeRate', rate);
            } catch (error) {
                console.error('Erro ao buscar taxa de câmbio:', error);
            }
        },
    },
    getters: {
        tipAmount(state) {
            return (state.billAmount * (state.tipPercentage / 100)).toFixed(2);
        },
        totalAmount(state, getters) {
            const billAmount = parseFloat(state.billAmount) || 0;
            const tipAmount = parseFloat(getters.tipAmount) || 0;
            const exchangeRate = parseFloat(state.exchangeRate) || 1;

            return (billAmount + (tipAmount * exchangeRate)).toFixed(2);
        },
        amountPerPerson(state, getters) {
            const totalAmount = parseFloat(getters.totalAmount) || 0;
            return (totalAmount / state.numberOfPeople).toFixed(2);
        },
    },
});
