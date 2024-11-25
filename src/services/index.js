import axios from 'axios';

const API_URL = process.env.VUE_APP_API_BASE_URL;
const API_KEY = process.env.VUE_APP_SWOP_API_KEY;

export const fetchExchangeRate = async (baseCurrency = 'EUR', quoteCurrency = 'BRL') => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `ApiKey ${API_KEY}`,
            },
        });
        const rate = response.data.find(rate => rate.base_currency === baseCurrency && rate.quote_currency === quoteCurrency);
        if (rate) {
            return rate.quote;
        } else {
            throw new Error('Taxa de câmbio não encontrada!');
        }
    } catch (error) {
        console.error('Erro ao buscar taxa de câmbio:', error);
        throw error;
    }
};
