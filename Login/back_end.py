from flask import Flask, request, redirect, url_for


back = Flask(__name__)
@back.route('/login', methods = ['POST', 'GET'])
def login():
	if(request.method == 'POST'):
		user = request.form['nm']
		f = open('wordFile.txt','a')
		f.write(user)
		f.close()
		return redirect(url_for('success',name = user))
	else:
		user = request.args.get('nm')
		return redirect(url_for('success',name = user))
@back.route('/success/<name>')
def success(name):
	f = open('wordFile.txt','a')
	f.write(name)
	f.close()
	return "welcome %s" % name
if(__name__ == "__main__"):
    back.run(debug=True)