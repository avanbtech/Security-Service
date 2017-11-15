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
import time

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

import os
import datetime
from datetime import timedelta

from faker import Faker
fake = Faker()

# FUTURE DATE IN FORMAT YYYY-MM-DD
def getFutureDateStr():
    today = datetime.datetime.now()
    diff = datetime.timedelta(days = randint(2,10))
    future = today + diff

    return future.strftime("%Y-%m-%d")

def getRandomLocation():
    locations = ["Burnaby", "Surrey", "Vancouver"]
    index = randint(0,2)

    return locations[index]

# FAKE PHONE NUMBER IN FORMAT DDD-DDD-DDDD
def getFakePhn():
    one = randint(500, 778)
    two = randint(100, 999)
    three = randint(1000, 9999)

    return str(one) + "-" + str(two) + "-" + str(three)

# FAKE RANDOM TIME IN FORMAT HH:MM
def getRandTime():
    hr = randint(1, 24)
    if(hr == 24):
        min = 0
    else:
        min = randint(0, 59)

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

def selectDate(driver):
    actions = ActionChains(driver)
    actions.send_keys(Keys.ARROW_RIGHT)
    actions.send_keys(Keys.RETURN)
    actions.perform()

def main():
    if os.name == 'nt':
        driver = webdriver.Chrome("./chromedriver.exe")
    else:
        driver = webdriver.Chrome("./chromedriver")


    driver.get("http://192.168.0.32/Customer")

    date = driver.find_element_by_name("date")
    date.click()
    selectDate(driver)

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
    location.send_keys(getRandomLocation())

    numAtt = driver.find_element_by_name("numberOfAttendees")
    numAtt.send_keys(randint(100, 999))

    eventDate = driver.find_element_by_name("eventDate")
    eventDate.click()
    selectDate(driver)

    time.sleep(0.5)

    eventTime = driver.find_element_by_name("time")
    actions = ActionChains(driver)
    actions.move_to_element(eventTime)
    actions.click()
    actions.send_keys(Keys.RETURN)
    actions.perform()

    detail = driver.find_element_by_name("detail")
    detail.send_keys(fake.sentence(nb_words=6, variable_nb_words=True, ext_word_list=None))

    accountCode = driver.find_element_by_name("accountCode")
    accountCode.send_keys(getAccCode())

    authorizedBy = driver.find_element_by_name("authorizedBy")
    authorizedBy.send_keys(fake.name())

    authorizedID = driver.find_element_by_name("authorizedID")
    authorizedID.send_keys(getSFUID())

    authorizedDate = driver.find_element_by_name("authorizedDate")
    authorizedDate.click()
    selectDate(driver)

    authorizedSignature = driver.find_element_by_name("authorizedSignature")
    authorizedSignature.send_keys(fake.name())

    authorizedPhone = driver.find_element_by_name("authorizedPhone")
    authorizedPhone.send_keys(getFakePhn())

    # Intentional error to keep the browser window open
    sys.exit(0)

main()
