import json
from bs4 import BeautifulSoup
from selenium import webdriver
import uuid

productArray = [   
  "https://retrocamerashop.com/products/panasonic-cr123a-lithium-battery",
  "https://retrocamerashop.com/products/duracell-ultra-power-aa-batteries",
  "https://retrocamerashop.com/products/panasonic-cr2-lithium-battery",
  "https://retrocamerashop.com/products/panasonic-cr2-lithium-battery-pack-of-2",
  "https://retrocamerashop.com/products/duracell-plus-power-aa-batteries",
  "https://retrocamerashop.com/products/duracell-ultra-power-aaa-batteries",
  "https://retrocamerashop.com/products/copy-of-panasonic-cr123a-lithium-battery",
  "https://retrocamerashop.com/products/duracell-plus-power-aaa-batteries"
]
   

def clean_text(text):
    return text.strip().replace('\n', '') 

def clean_number(text):
    return text.strip().replace('\u00a3', '')

def clean_null(value):
    return value.strip() if value else None

unique_id = str(uuid.uuid4())

def scrape_website(url):
    
    browser = webdriver.Chrome()
    browser.get(url)

    res = browser.page_source

  
    browser.quit()

  
    soup = BeautifulSoup(res, 'html.parser')

  
    img_elements = soup.find_all('img', src=True)

    data = {
            'name': [clean_text(h1.text) for h1 in soup.find_all('h1')],
            'price': [clean_number(div.text) for div in soup.find('div', class_='PriceList')],
            'description': [clean_text(div.text) for div in soup.find_all('div', class_='Product__Description')],
            'features': [clean_text(li.text) for div in soup.find_all('div', class_='rte') for ul in div.find_all('ul') for li in ul.find_all('li')],
            'batteries': [clean_text(span.text) for div in soup.find_all('div', class_='CollapsibleContent__Content') for span in div.find_all('span')],
            'imageUrl': [clean_null(img.get('src')) for img in soup.find_all('img', class_='block z-1 w-full h-full object-cover absolute inset-0') if img.get('src') is not None],
            'category': "batteries",
            'id': unique_id,
        },
       
    try:
        with open('output.json', 'r') as file:
            existing_data = json.load(file)
    except FileNotFoundError:
        existing_data = []

    existing_data.append(data)

    with open('output.json', 'w') as file:
        json.dump(existing_data, file, indent=2)

    print(f"Scraping successful for {url}. Data appended to 'output.json'.")


for url in productArray:
    scrape_website(url)