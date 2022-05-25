from flask import Flask, render_template, request
from random import choice

app = Flask(__name__)

number_list = [
    100, 101, 200, 201, 202, 204, 206, 207, 300, 301, 302, 303, 304, 305, 307,
    400, 401, 402, 403, 404, 405, 406, 408, 409, 410, 411, 412, 413, 414, 415,
    416, 417, 418, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 500,
    502, 503, 504, 506, 507, 508, 509, 510, 511, 599
]


@app.route('/')
def Home():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

app.run(host='0.0.0.0', port=8080, debug=True)


# #! for deployment
# if __name__ == "__main__":
#     from waitress import serve
#     serve(app, host="0.0.0.0", port=8080)
#     print("Server is running")

