import axios from 'axios';

const API_URL = process.env.VUE_APP_API_BASE_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

export const convertCurrency = async (baseCurrency, quoteCurrency = 'BRL') => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                access_key: API_KEY,
                source: baseCurrency,
                currencies: quoteCurrency,
            }
        });
        const quoteKey = Object.keys(response.data.quotes)[0];
        const exchangeRate = response.data.quotes[quoteKey]
        return exchangeRate;
    } catch (error) {
        console.error('Erro in conversion:', error);
        throw error;
    }
};
