import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as CheckedStarIcon } from "@heroicons/react/24/solid";

type Props = {
  checked?: boolean;
  onChange?: (item: boolean) => void;
};

const Favorite = ({ checked = false, onChange }: Props) => {
  const handleClickItem = () => {
    onChange?.(!checked);
  };

  return (
    <div onClick={handleClickItem}>
      {checked ? (
        <CheckedStarIcon className="h-5 w-5" />
      ) : (
        <StarIcon className="h-5 w-5" />
      )}
    </div>
  );
};

export default Favorite;
