import { h } from "npm:preact";
import { useState, useEffect } from "npm:preact/hooks";
import type { ComponentChildren } from "npm:preact";

export type Tab = {
  title: string;
  content: ComponentChildren;
};

type TabbedContainerProps = {
  tabs: Tab[];
};

export default function TabbedContainer({ tabs }: TabbedContainerProps) {
  const getInitialIndex = () => {
    const param = new URLSearchParams(window.location.search).get("tab");
    const index = tabs.findIndex(
      (tab) => tab.title.toLowerCase() === param?.toLowerCase()
    );
    return index >= 0 ? index : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getInitialIndex);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tabs[activeIndex].title.toLowerCase());
    window.history.replaceState(null, "", url.toString());
  }, [activeIndex]);

  return (
    <div class="container-fluid">
      <div class="tab-bar">
        {tabs.map((tab, index) => (
          <button
            class={"tab-selector "+((activeIndex === index ? "bubble":""))}
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            style={{
              fontWeight: activeIndex === index ? "500" : "400",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div style={{ paddingTop: "1rem" }}>
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}