from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route("/test",methods=["GET","POST"])
def test():
    return jsonify(67)

if __name__ == "__main__":
    app.run()