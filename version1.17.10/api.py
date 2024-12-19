# import os
import requests

base_url = 'https://encryptease.pythonanywhere.com'
key='6806b7339da3da26ec9ab56891ba642af0d6dfbbd5a9f9e4'

# key gen --> form data
# headers = {"Content-Type": "application/x-www-form-urlencoded"}
# its default
res = requests.post(url=f'{base_url}/generate-key', data={'gen_key':'24'}, timeout=10)
# print(res.status_code)
# print(res.content)
# print(res.text)
print(res.json())
key = res.json()['generatedKey']

# if, headers = {"Content-Type": "application/json"}
# import json
# then data = json.dumps(data)

# encrypt msg
msg = 'hello boy!'
res = requests.post(url=f'{base_url}/encrypt/string', data={'message':msg, 'key':key}, timeout=10)
# print(res.status_code)
# print(res.content)
print(res.json())
encrypted_msg = res.json().get('encrypted_msg')


# decrypt msg
res = requests.post(url=f'{base_url}/decrypt/string', data={'encrypted_msg':encrypted_msg, 'key':key}, timeout=10)
# print(res.status_code)
# print(res.content)
print(res.text)

# -----------------------------------------------------------
# if, headers={'Content-Type':'multipart/form-data'}
# using files is bettter option
# files = {"file": open("example.txt", "rb")}
# response = requests.post(url, files=files)

# encrypt file
file = open('src/sg.png', 'rb')
# headers={'Content-Type':'multipart/form-data'}
# res = requests.post(url=f'{base_url}/encrypt/file', data={'file':file, 'key':key}, headers=headers, timeout=10)
res = requests.post(url=f'{base_url}/encrypt/file', files={'file':file}, data={'key':key}, timeout=10)
# print(res.status_code)
print(res.content)
# print(res.json())
# encrypted_file = res.json().get('encrypted_file')
