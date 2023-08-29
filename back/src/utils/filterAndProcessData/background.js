const background = async (newPage) => {
  try {
    const background = await newPage.$("div.intro.clearfix p");
    let backgroundText = "";

    if (background) {
      backgroundText = await background.innerHTML();
    }
    return backgroundText;
  } catch (error) {
    console.log(`En background: ${error}`);
  }
};

export default background;
