const requestURL = "https://api-testnet.bybit.com/v5/market/kline",
    dataFromButtons = document.querySelector('button'),
    ctx = document.getElementById('priceChart').getContext('2d'),
    params = {
        category: 'linear',
        symbol: 'BTCUSDT',
        interval: '5',
        limit: 40
    };
    queryString = new URLSearchParams(params).toString(),
    fullUrl = `${requestURL}?${queryString}`;

dataFromButtons.addEventListener('click', 
candles);
async function candles() {
        const response = await fetch(fullUrl);
        if(!response.ok){
            console.log('error');
        }
        const data = await response.json(),
            candles = data.result.list;
            highPrices = candles.map( candle => parseFloat(candle[2]) ) //>list[2]: highPrice
            labels = candles.map((_, index) => `Candle ${index + 1}`);
        new Chart(ctx, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'BITCUSDT High Price',
                  data: highPrices,
                  backgroundColor: 'rgba(255, 140, 66, 0.2)',
                  borderColor: '#ff8c42',
                  borderWidth: 1,
                  pointBorderColor: '#000',
                  pointBackgroundColor: '#ff8c42'
                },
              ],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Candles',
                            color: '#e0e0e0'
                        },
                        grid: {
                            color: '#3a3a4e', 
                        },
                        ticks: {
                            color: '#e0e0e0', 
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Price',
                            color: '#e0e0e0'
                        },
                        grid: {
                            color: '#3a3a4e', 
                        },
                        ticks: {
                            color: '#e0e0e0',
                        },
                    }
                }
            }
          });
}
const copy =document.getElementById("copyrights");
let year = new Date();
copy.textContent= `© ${year.getFullYear()} Golovanov Kirill`;

