import io
import requests
import bs4


def write_file(file_name, ndung):
  f = io.open(file_name, 'w', encoding='utf-8')
  f.write(ndung)
  f.close()


def get_list_price(coinname, dayStart, dayEnd):
  # coinname = 'bitcoin'
  # dayStart = '20180602'
  # dayEnd = '20190602'
  url = 'https://coinmarketcap.com/currencies/%s/historical-data/?start=%s&end=%s'%(coinname, dayStart,dayEnd)
  res = requests.get(url)

  # write_file('code.html', res.text)

  soup = bs4.BeautifulSoup(res.text, 'html.parser')
  el_rows = soup.select('.cmc-table-row')

  list_prices = []
  for el_row in el_rows:
    price = el_row.select('td')[4].get_text()
    list_prices.append(price)
  return list_prices
