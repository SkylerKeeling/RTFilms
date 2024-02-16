import requests
from bs4 import BeautifulSoup

def get_all_hrefs(url):
    try:
        # Send a GET request to the URL
        response = requests.get(url)
        response.raise_for_status()  # Raise an HTTPError for bad responses

        # Parse the HTML content
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find all anchor tags and get the href attribute
        hrefs = [a.get('href') for a in soup.find_all('a')]

        return hrefs

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

# Example usage:
url_to_scrape = 'https://retrocamerashop.com/collections/batteries'
href_list = get_all_hrefs(url_to_scrape)

filtered_href_list = [href for href in href_list if href.startswith('/products/')]

if filtered_href_list:
    for href in filtered_href_list:
        print("https://retrocamerashop.com" + href)
else:
    print("No matching hrefs found.")

