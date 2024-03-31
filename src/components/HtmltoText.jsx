const HtmltoText = ({ htmlContent }) => {
  const description = {
    __html: htmlContent,
  };
  return <div dangerouslySetInnerHTML={description} />;
};

export default HtmltoText;
