from flask import Flask,render_template
app = Flask(__name__,template_folder='template')


@app.route('/')
def home():
    return render_template("index.html")
@app.route('/page1')
def page1():
    return render_template("page1.html")
@app.route('/list')
def list():
    return render_template("list.html")
@app.route('/card')
def card():
    return render_template("card.html")


if __name__ == "__main__":
    app.run()