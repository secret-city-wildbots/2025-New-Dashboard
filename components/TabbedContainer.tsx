import { h } from "npm:preact";
import { useState } from "npm:preact/hooks";
import type { ComponentChildren } from "npm:preact";

export type Tab = {
  title: string;
  content: ComponentChildren;
};

type TabbedContainerProps = {
  tabs: Tab[];
};

export default function TabbedContainer({ tabs }: TabbedContainerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

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