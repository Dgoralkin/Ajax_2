
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session


# Configure application
app = Flask(__name__)

Session(app)



# --------------------------------------------------------------------------------- /
@app.route("/index")

def index():
    
    return render_template("index.html")