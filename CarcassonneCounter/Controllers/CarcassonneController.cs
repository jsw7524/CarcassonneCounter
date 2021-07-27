using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CarcassonneCounter.Controllers
{
    public class CarcassonneController : Controller
    {
        // GET: Carcassonne
        public ActionResult Index()
        {
            return View();
        }
    }
}