import Constants from "../../constants";

function Tabs(props) {
  const { tab, setTab } = props;
  return (
    <section className="flex items-center justify-center mt-5">
      <span
        className={`text-lg subpixel-antialiased cursor-pointer mr-10 ${
          tab === Constants.MENU.TITLE.BLOG
            ? "text-primary underline-active font-semibold"
            : ""
        }`}
        onClick={() => setTab(Constants.MENU.TITLE.BLOG)}
      >
        Blog
      </span>
      <span
        className={`text-lg subpixel-antialiased cursor-pointer ${
          tab === Constants.MENU.TITLE.TEMPLATE
            ? "text-primary underline-active font-semibold"
            : ""
        }`}
        onClick={() => setTab(Constants.MENU.TITLE.TEMPLATE)}
      >
        Template
      </span>
    </section>
  );
}

export default Tabs;
