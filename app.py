from flask import Flask,render_template, request
from flask.json.tag import PassDict
from flask_cors import CORS
from twilio.rest import Client

sid= ""
auth =""


client = Client(sid,auth)

passes = []


app = Flask(__name__)
cors = CORS(app,resources={r"/*":{"origins":"*"}})
@app.route("/")
def fun():
    return "hi"

@app.route("/bookpass",methods=['GET','POST'])
def bookpass():
    

    req=request.get_json(); 
    email=req["email"]
    fullname=req["name"]
    phone=req["phone"]
    aadhar = req["aadhar"]
    address=req["address"]
    source = req["source"]
    destinatio=req["destination"]
    city = req["city"]
    zip = req['zip']
    x ={}
    x["source"] = source
    x["destination"] = destinatio
    x["name"] = fullname
    

    body = "Thanks for booking "+fullname+" ! \n "+source+" ->  "+destinatio
    passes.append(x)
    msg = client.messages.create(to="whatsapp:+917993068401",from_="whatsapp:+14155238886",body=body)
    print("hi")





    return {"data":req}

@app.route("/mypass",methods=['GET','POST'])
def mypass():
    
    return {"data":passes}


if __name__ == 'main':
    app.run()