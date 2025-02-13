import React, { useState } from "react";
import { X } from "lucide-react";

type TagListProps = {
  initialTags?: string[]; // Made optional with a default
};

const TagList: React.FC<TagListProps> = ({
  initialTags = ["John", "Jane", "Alice"],
}) => {
  const [tags, setTags] = useState(initialTags);

  const removeTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1 border border-gray-200"
        >
          <span className="text-sm text-gray-800">{tag}</span>
          <button
            onClick={() => removeTag(tag)}
            className="flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={`Remove ${tag}`}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TagList;
