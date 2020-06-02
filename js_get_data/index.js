// from 02/06/2019 => 1/6/2020 => 365 days
//https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20190602&end=20200602

// from 02/06/2018 => 1/6/2019 => 365 days
//https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20180602&end=20190602

kq = '[';
list_rows = document.querySelectorAll('.cmc-table-row')
list_rows.forEach(row => {
	close_price = row.querySelectorAll('td')[4]
	kq += '"' + close_price.innerText + '",';
});
kq +=']'
console.log(kq)