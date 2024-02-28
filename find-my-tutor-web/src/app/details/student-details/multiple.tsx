import { useState } from "react";

const MultipleInputDropdown = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddItem = () => {
    if (searchTerm.trim() !== "" && !selectedItems.includes(searchTerm)) {
      setSelectedItems([searchTerm, ...selectedItems]);
      setSearchTerm("");
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 p-2 mb-2"
      />
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
      <div className="mt-4">
        {selectedItems.map((item, index) => (
          <div key={index} className="border border-gray-300 p-2 mb-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleInputDropdown;
