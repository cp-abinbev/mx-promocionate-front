import useControllers from "../../controllers";
import { Helmet } from "react-helmet";
import useModels from "../../models";

const GetGlobalHoc = ({ children }) => {
  const { useGeneralHooks } = useControllers();
  const { useHocs } = useGeneralHooks();
  const { useSelectors } = useModels();
  const { useSelector, useHocsSelectors } = useSelectors();
  const { analitycsSelector } = useHocsSelectors();
  const dataAnalitycs = useSelector(analitycsSelector);
  const url = dataAnalitycs?.filter(({ key }) => key === "url");
  useHocs();

  return (
    <>
      <Helmet>
        <link rel="alternate" hreflang="es" href={`${url[0]?.data}`} />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "promociónate",
            "url": ${url[0]?.data},
            "logo": "https://www.promocionate.com.co/assets/iconLogo.8d940b3d.svg",
          }`}
        </script>
        <script type="application/ld+json">
          {`{
           "@context": "https://schema.org/",
           "@type": "WebSite",
           "name": "Promociónate",
           "url": ${url[0]?.data},
           "potentialAction": {
           "@type": "SearchAction",
           "target": "promocionate",
           "query-input": "required name=promocionate"
          }`}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default GetGlobalHoc;
