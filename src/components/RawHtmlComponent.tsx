const RawHtmlComponent = ({ htmlContent }: { htmlContent: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };
  
  export default RawHtmlComponent;