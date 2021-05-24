from flask import Flask,render_template, request
from flask.json.tag import PassDict
from flask_cors import CORS
from twilio.rest import Client

sid= "AC1b78496729c3286010c035478a8f9468"
auth ="49f345e631b0fa427a4941e8edf1ce4a"


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
    name=req["name"]
    phone=req["phone"]
    aadhar = req["aadhar"]
    address=req["address"]
    source = req["source"]
    destination=req["destination"]
    city = req["city"]
    zip = req['zip']
    x ={}
    x["source"] = source
    x["destination"] = destination
    x["name"] = name
    x["phone"] = phone
    

    body = "Thanks for booking "+name+" ! \n "+source+" ->  "+destination
    passes.append(x)
    msg = client.messages.create(to="whatsapp:+917993068401",from_="whatsapp:+14155238886",body=body)
    print("hi")





    return {"data":req}

@app.route("/mypass",methods=['GET','POST'])
def mypass():
    
    return {"data":passes}


if __name__ == 'main':
    app.run()