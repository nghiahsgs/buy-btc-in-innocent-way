// from 01/06/2019 => 31/05/2020 => 365 days

cells=document.querySelectorAll('.cmc-table__cell');
kq='[';
var index=26;
for(let i=0;i<365;i++){
	kq+='"'+cells[index].innerText+'",';
	index+=14;
}
console.log(kq)
