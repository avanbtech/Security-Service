#! Python 3
from PyPDF2 import PdfFileWriter, PdfFileReader
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import cm
import io, requests, os
import sys
import json
packet = io.BytesIO()
# create a new PDF with Reportlab
can = canvas.Canvas(packet, pagesize=letter)
# fetch the request data from argv
reqNum = "\"" + sys.argv[1] + "\""
requestString = '{request(accessID: ' + reqNum + '){date details accountCode authorizedBy authorizedID authorizedDate authorizedPhone user { department requestBy sfuBCID phone fax email licensed } event { nameOfEvent location numberOfattendees eventDates }}}'
r = requests.post('http://localhost:3001/graphql', data = {'query': requestString})
if(len(json.loads(r.text)['data']['request']) >= 1):
    req = json.loads(r.text)['data']['request'][0]
else:
    sys.exit(0)
# GETTING X COORDINATE: SAME X AS IN GIMP
# GETTING Y COORDINATE: LENGTH OF IMAGE IN GIMP - Y COORDINATE OF DESIRED LOCATION IN GIMP
can.drawString(2.97 * cm, 23.16 * cm, req['user']['requestBy'])
can.drawString(1.60 * cm, 23.97 * cm, req['date'].split("T")[0])
can.drawString(6.73 * cm, 23.97 * cm, req['user']['department'])
can.drawString(17.04 * cm, 23.16 * cm, req['user']['sfuBCID'])
can.drawString(2.08 * cm, 22.40 * cm, req['user']['phone'])
can.drawString(7.19 * cm, 22.40 * cm, req['user']['fax'])
can.drawString(11.86 * cm, 22.40 * cm, req['user']['email'])
# LICENSED FIELD MISSING
# can.drawString(2.97 * cm, 23.16 * cm, req['user']['requestBy'])
can.drawString(4.45 * cm, 21.64 * cm, req['event']['nameOfEvent'])
can.drawString(3.94 * cm, 20.82 * cm, req['event']['location'])
can.drawString(15.72 * cm, 20.82 * cm, str(req['event']['numberOfattendees']))
can.drawString(3.00 * cm, 20.06 * cm, req['event']['eventDates'][0])
# can.drawString(15.65 * cm, 20.06 * cm, req['event']['times'])
can.drawString(1.27 * cm, 19.38 * cm, req['details'])
can.drawString(3.43 * cm, 15.54 * cm, req['accountCode'])
can.drawString(3.94 * cm, 11.07 * cm, req['authorizedBy'])
can.drawString(10.95 * cm, 11.07 * cm, req['authorizedID'])
can.drawString(16.61 * cm, 11.07 * cm, req['authorizedDate'].split("T")[0])
can.drawString(10.92 * cm, 10.38* cm, req['authorizedPhone'])
can.save()
#move to the beginning of the StringIO buffer
packet.seek(0)
new_pdf = PdfFileReader(packet)
# read your existing PDF
# TODO: REPLACE THIS PATH WITH SCRIPT FOLDER IN PROJECT DIRECTORY
existing_pdf = PdfFileReader(open("baseFrom.pdf", "rb"))
output = PdfFileWriter()
# add the "watermark" (which is the new pdf) on the existing page
page = existing_pdf.getPage(0)
page.mergePage(new_pdf.getPage(0))
output.addPage(page)
# finally, write "output" to a real file
# TODO: REPLACE THIS PATH WITH SCRIPT FOLDER IN PROJECT DIRECTORY
if not (os.path.exists("ExportedPDFs/")):
    os.makedirs("ExportedPDFs/")
outputPath = "ExportedPDFs/" + sys.argv[1] + "_destination.pdf"
outputStream = open(outputPath, "wb")
output.write(outputStream)
outputStream.close()
print(outputPath)
