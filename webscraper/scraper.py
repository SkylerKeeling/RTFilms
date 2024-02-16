import json
from bs4 import BeautifulSoup
from selenium import webdriver

productArray = [
    "https://retrocamerashop.com/products/copy-of-olympus-trip-af-s-3",
    "https://retrocamerashop.com/products/olympus-shoot-go-r-11",
    "https://retrocamerashop.com/products/olympus-af-10-super-18",
    "https://retrocamerashop.com/products/olympus-af-10-super-17",
    "https://retrocamerashop.com/products/nikon-one-touch-zoom-90-af-quartz-date-1",
    "https://retrocamerashop.com/products/olympus-trip-md3-2",
    "https://retrocamerashop.com/products/olympus-af-8",
    "https://retrocamerashop.com/products/olympus-af-7",
    "https://retrocamerashop.com/products/olympus-shoot-go-r-10",
    "https://retrocamerashop.com/products/olympus-trip-af-s-24",
    "https://retrocamerashop.com/products/olympus-trip-af-s-23",
    "https://retrocamerashop.com/products/olympus-trip-af-s-22",
    "https://retrocamerashop.com/products/minolta-freedom-holiday-ii-qd",
    "https://retrocamerashop.com/products/olympus-trip-md3-black-31",
    "https://retrocamerashop.com/products/olympus-trip-af-s-21",
    "https://retrocamerashop.com/products/minolta-fs-e-ii",
    "https://retrocamerashop.com/products/olympus-trip-md3-black-30",
    "https://retrocamerashop.com/products/olympus-trip-af-s-20",
    "https://retrocamerashop.com/products/minolta-riva-f10-1",
    "https://retrocamerashop.com/products/olympus-af-10-super-16",
    "https://retrocamerashop.com/products/olympus-af-10-super-15",
    "https://retrocamerashop.com/products/olympus-superzoom-70g-8",
    "https://retrocamerashop.com/products/olympus-af-10-super-14",
    "https://retrocamerashop.com/products/olympus-superzoom-76s-12",
    "https://retrocamerashop.com/products/olympus-shoot-go-r-9",
    "https://retrocamerashop.com/products/olympus-af-10-super-13",
    "https://retrocamerashop.com/products/olympus-af-10-super-12",
    "https://retrocamerashop.com/products/olympus-trip-md3-black-29",
    "https://retrocamerashop.com/products/olympus-trip-xb3-black-16",
    "https://retrocamerashop.com/products/olympus-trip-md3-black-28",
    "https://retrocamerashop.com/products/olympus-trip-af-s-19",
    "https://retrocamerashop.com/products/olympus-trip-af-s-18",
    "https://retrocamerashop.com/products/olympus-af-6",
    "https://retrocamerashop.com/products/olympus-af-5",
    "https://retrocamerashop.com/products/olympus-mju-zoom-150",
    "https://retrocamerashop.com/products/olympus-trip-512",
    "https://retrocamerashop.com/products/olympus-mju-ii-zoom-96",
    "https://retrocamerashop.com/products/olympus-superzoom-70g-7",
    "https://retrocamerashop.com/products/olympus-trip-xb400-9",
    "https://retrocamerashop.com/products/olympus-trip-xb400-5",
    "https://retrocamerashop.com/products/olympus-trip-xb400-4",
    "https://retrocamerashop.com/products/olympus-trip-xb3-black-15",
    "https://retrocamerashop.com/products/olympus-trip-md3-black-27",
    "https://retrocamerashop.com/products/canon-sure-shot-af-7-s-18",
    "https://retrocamerashop.com/products/olympus-mju-zoom-140-quartzdate-6",
    "https://retrocamerashop.com/products/olympus-mju-zoom-140-quartzdate-5",
    "https://retrocamerashop.com/products/olympus-mju-zoom-140-quartzdate-4",
    "https://retrocamerashop.com/products/olympus-mju-zoom-140-quartzdate-3",
    "https://retrocamerashop.com/products/minolta"]

def clean_text(text):
    return text.strip().replace('\n', '') 



def clean_number(text):
    return text.strip().replace('\u00a3', '')

def clean_null(value):
    return value.strip() if value else None

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
            'category': "pas"
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