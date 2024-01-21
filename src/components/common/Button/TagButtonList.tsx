import { useEffect, useState } from "react";
import { TagButton } from "./TagButton";
import { GetDogTags } from "../../../apis/DogApi";
import { DogTag } from "../../../types/sign";

interface TagButtonListProps {
  onChange: (content: string) => void;
}
interface Tags {
  dogTags: DogTag[];
}
export const TagButtonList = (props: TagButtonListProps) => {
  const [tagList, setTagList] = useState<string[]>([]);
  useEffect(() => {
    GetDogTags()
      .then((res) => {
        const tags: Tags = res.data;
        const tagContents = tags.dogTags.map((tag) => tag.content);
        setTagList(tagContents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {tagList.map((tag) => (
        <TagButton key={tag} content={tag} onChange={props.onChange} />
      ))}
    </div>
  );
};
