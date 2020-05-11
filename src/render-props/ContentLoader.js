import React from "react";

export default ({ render, getContent }) => {

  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    async function load(){
      setLoading(true);
      const result = await getContent();
      setContent(result);
      setLoading(false);
    }
    load();
  }, [getContent]);

  if (loading || !content) {
    return <p>Loading ...</p>;
  }

  return render(content);
};
