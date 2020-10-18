using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace SpaceXLaunchApplication.Controllers
{
    public class SpaceXLaunchController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}