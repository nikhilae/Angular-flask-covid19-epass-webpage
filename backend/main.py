# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


import requests
from flask import Flask,render_template, request
from twilio.rest import Client



account_sid='ACb795ed6bff767a44051fe2cd490d1abb'
auth_token='e0e7334f8c6190cf3a23e09e7d7fbd0f'

Client=Client(account_sid,auth_token)
app = Flask(__name__,static_folder="Templates")

@app.route('/')
def registration_form():
    return render_template("test_page.html")
@app.route('/login_page', methods=['POST','GET'])
def login_registration_dtls():
    first_name=request.form['fname']
    last_name = request.form['lname']
    email_id= request.form['email']
    source_st = request.form['source_state']
    source_dt = request.form['source']
    destination_st = request.form['dest_state']
    destination_dt = request.form['destination']
    phoneNumber=request.form['phoneNumber']
    id_proof=request.form['idcard']
    date=request.form['trip']
    full_name=first_name+"."+last_name
    r=requests.get('https://api.covid19india.org/v4/data.json')
    json_data=r.json()
    cnt=json_data[destination_st]['districts'][destination_dt]['total']['confirmed']
    pop=json_data[destination_st]['districts'][destination_dt]['meta']['population']
    travel_pass=((cnt/pop)*100)
    if travel_pass < 30 and request.method=='POST':
        status='CONFIRMED'

        return render_template('user_registration_dtls.html', var=full_name, var1=email_id, var2=id_proof,
                               var3=source_st, var4=source_dt, var5=destination_st, var6=destination_dt,
                               var7=phoneNumber, var8=date, var9=status)
    else:

            status='Not Confirmed'
           
            return render_template('user_registration_dtls.html', var=full_name, var1=email_id, var2=id_proof,
                               var3=source_st, var4=source_dt, var5=destination_st, var6=destination_dt,

                               var7=phoneNumber, var8=date, var9=status)


# Press the green button in the gutter to run the script.
if __name__ == '_main_':
    app.run(port=9001,debug=True)


