#!Python 3
# Script written by: Sankait Kumar

# Dependencies:
# chromedriver.exe file
# faker: pip3 install Faker
# selenium: pip3 install selenium

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from random import randint

import datetime
from datetime import timedelta

from faker import Faker
fake = Faker()

# FUTURE DATE IN FORMAT YYYY-MM-DD
def getFutureDateStr():
    today = datetime.datetime.now()
    diff = datetime.timedelta(days = randint(1,10))
    future = today + diff

    return future.strftime("%Y-%m-%d")

# FAKE PHONE NUMBER IN FORMAT DDD-DDD-DDDD
def getFakePhn():
    one = randint(500, 778)
    two = randint(100, 999)
    three = randint(1000, 9999)

    return str(one) + "-" + str(two) + "-" + str(three)

# FAKE RANDOM TIME IN FORMAT HH:MM
def getRandTime():
    hr = randint(1, 24)
    min = randint(0, 60)

    return str(hr).zfill(2) + ":" + str(min).zfill(2)

# FAKE ACCOUNT CODE GENERATOR
def getAccCode():
    one = str(randint(1000, 9999))
    two = str(randint(10, 99))
    three = str(randint(1000, 9999))
    four = str(randint(10000, 99999))
    return one + "-" + two + "-" + three + "-" + four

# FAKE SFU ID
def getSFUID():
    return str(randint(300000000, 399999999))

def main():
    driver = webdriver.Chrome("./chromedriver")
    driver.get("localhost:3001/Customer")

    date = driver.find_element_by_name("date");
    date.send_keys(getFutureDateStr())

    requestBy = driver.find_element_by_name("requestBy")
    requestBy.send_keys(fake.name())

    id = driver.find_element_by_name("id")
    id.send_keys(getSFUID())

    phone = driver.find_element_by_name("phone")
    phone.send_keys(getFakePhn())

    fax = driver.find_element_by_name("fax")
    fax.send_keys(getFakePhn())

    email = driver.find_element_by_name("email")
    email.send_keys(fake.email())

    nameOfEvent = driver.find_element_by_name("nameOfEvent")
    nameOfEvent.send_keys(fake.catch_phrase())

    location = driver.find_element_by_name("location")
    location.send_keys(fake.city())

    numAtt = driver.find_element_by_name("numberOfAttendees")
    numAtt.send_keys(randint(100, 999))

    eventDate = driver.find_element_by_name("eventDate")
    eventDate.send_keys(getFutureDateStr())

    time = driver.find_element_by_name("time")
    time.send_keys(getRandTime())

    detail = driver.find_element_by_name("detail")
    detail.send_keys(fake.sentence(nb_words=6, variable_nb_words=True, ext_word_list=None))

    accountCode = driver.find_element_by_name("accountCode")
    accountCode.send_keys(getAccCode())

    authorizedBy = driver.find_element_by_name("authorizedBy")
    authorizedBy.send_keys(fake.name())

    authorizedID = driver.find_element_by_name("authorizedID")
    authorizedID.send_keys(getSFUID())

    authorizedDate = driver.find_element_by_name("authorizedDate")
    authorizedDate.send_keys(getFutureDateStr())

    authorizedSignature = driver.find_element_by_name("authorizedSignature")
    authorizedSignature.send_keys(fake.name())

    authorizedPhone = driver.find_element_by_name("authorizedPhone")
    authorizedPhone.send_keys(getFakePhn())

    # Intentional error to keep the browser window open
    sys.exit(0)

main()
