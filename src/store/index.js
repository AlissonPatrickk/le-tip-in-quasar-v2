import Vue from 'vue';
import Vuex from 'vuex';
import { convertCurrency } from '../services/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        billAmount: 0,
        tipPercentage: 10,
        numberOfPeople: 2,
        currency: 'EUR',
        currencySymbol: '€',
        exchangeRate: 1,
        realAmount: 0,
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
        setRealAmount(state, amount) {
            state.realAmount = amount;
        },
    },
    actions: {
        async fetchConversion({ commit, state }) {
            try {
                const result = await convertCurrency(state.currency, 'BRL', state.billAmount);
                commit('setRealAmount', result);
            } catch (error) {
                console.error('Erro ao converter moeda:', error);
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
            return (billAmount + tipAmount).toFixed(2);
        },
        amountPerPerson(state, getters) {
            const totalAmount = parseFloat(getters.totalAmount) || 0;
            return (totalAmount / state.numberOfPeople).toFixed(2);
        },
        convertedRealAmount(state) {
            const amount = parseFloat(state.realAmount);
            if (isNaN(amount) || amount === 0) {
                return '0.00';
            }
            return amount.toFixed(2);
        },
    },
});
