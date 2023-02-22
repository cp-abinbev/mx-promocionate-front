import Generator from "react-router-sitemap-generator";
import Router from "./src/routes/SiteMapRoutes";

const generator = new Generator("https://www.promocionate.com.mx", Router(), {
  lastmod: new Date().toISOString().slice(0, 10),
});
generator.save("./public/sitemap.xml");
