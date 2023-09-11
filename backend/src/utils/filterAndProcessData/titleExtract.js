const titleExtract = async (newPage) => {
  const title = await newPage.$("div.title.clearfix h1");
  if (title) {
    const titleText = await title.textContent();
    return titleText;
  }
};

export default titleExtract;
