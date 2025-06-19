import { h } from "npm:preact";
import { Dispatch, StateUpdater, useState } from "npm:preact/hooks";

interface DropdownProps {
    label?: string;
    items: string[];
    valSetter: (newVal:string) => void;
}

const Dropdown = ({ label, items, valSetter }: DropdownProps) => {
    if (!label) {
        label = items[0];
    }
    valSetter(label);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(label);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("dropdown-toggle")) {
            setIsOpen(false);
        }
    });

    const handleItemClick = (item: string) => {
        setSelectedLabel(item);
        valSetter(item);
    };

    return (
        <div class="dropdown">
            <button
                class="btn dropdown-toggle"
                type="button"
                onClick={toggleMenu}
                aria-expanded={isOpen}
            >
                {selectedLabel}
            </button>
            <ul class={`dropdown-menu${isOpen ? " show" : ""}`}>
                {items.map((item, index) => (
                    <li key={index}>
                        <button
                            class={
                                "dropdown-item" +
                                (item == selectedLabel ? " active" : "")
                            }
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
