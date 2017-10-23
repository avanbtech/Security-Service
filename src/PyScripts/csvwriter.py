# Dependencies
# pandas: pip3 install pandas

import pandas, time
import csv, requests, sys, json
from pandas.io.json import json_normalize


requestString = '{request {accessID status statusDate date details accountCode invoice authorizedBy authorizedID authorizedDate authorizedPhone user{sfuBCID department requestBy phone fax email licensed} event{nameOfEvent location numberOfattendees eventDates times}}}'
r = requests.post('http://localhost:3001/graphql', data = {'query': requestString})

try:
    jsonData = json.loads(r.text)['data']['request']
except:
    sys.exit(0)

# jsonData is an array of request objects
# print(jsonData)

df = json_normalize(jsonData)

currTime = time.localtime()

outPath = 'ExportedCSVs/' + str(currTime.tm_year) + '_' + str(currTime.tm_mon) + '_' + str(currTime.tm_mday) + '_' + 'dataexport.csv'

f = open(outPath, 'w')
w = csv.writer(f)
w.writerow(df)

for x in df.values:
    w.writerow(x)

print("Data exported")
sys.exit(0)
