import webapp2
import jinja2
import os
from google.appengine.api import mail

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainPage(webapp2.RequestHandler):

  def get(self, idioma="en"):
    thx = len(self.request.get("thx")) > 0
    template_values = {
      "thx": thx,
    }

    template = ""
    if idioma == "en" :
      template = jinja_environment.get_template("index_en.html")
    elif idioma == "es" :
      template = jinja_environment.get_template("index_es.html")
    elif idioma == "cat" :
      template = jinja_environment.get_template("index_cat.html")
    else :
      template = jinja_environment.get_template("index.html")
    self.response.out.write(template.render(template_values))
    return

  def post(self, idioma="en"):
    text1 = self.request.get("text1")
    text2 = self.request.get("text2")
    text3 = self.request.get("textarea1")
    mail.send_mail(sender="cesar@cesarjoaniquet.com",
                   to="cesar@cesarjoaniquet.com",
                   subject="Form de contacte del site",
                   body="nom= " + text1 + " e-mail= " + text2 + " idioma= " + idioma + " comentari= " + text3)
    return self.redirect("/" + idioma + "?thx='1'")

app = webapp2.WSGIApplication([("/", MainPage),
                               (r"/([^/]+)", MainPage)],
                              debug=True)
