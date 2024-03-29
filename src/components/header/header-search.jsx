import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { SearchIcon } from "@/graphics/SearchIcon";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { useDisclosure } from "@nextui-org/react";
import AdvanceSearch from "@/components/header/advance-search";

export default function HeaderSearch({
  searchBarVisible,
  showSearchBar,
  hideSearchBar,
  inputRef,
  searchBoxRef,
}) {
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <div
        onClick={showSearchBar}
        // onBlur={hideSearchBar}
      >
        {searchBarVisible ? (
          <div
            className={
              "bg-[rgba(0,0,0,.6)] border w-[270px] h-8 float-right flex flex-row justify-between items-center"
            }
            ref={searchBoxRef}
          >
            <BiSearch
              className="text-white cursor-pointer w-[40px]"
              size={22}
              onClick={hideSearchBar}
            />
            <input
              type="text"
              className={
                "bg-transparent text-white w-5/6 h-3/5 outline-0 text-sm"
              }
              placeholder={"Titles, people, genres"}
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className={"w-[40px]"}>
              {inputValue.length > 0 ? (
                <IoMdClose
                  className="text-white cursor-pointer w-[40px]"
                  size={22}
                  onClick={() => {
                    setInputValue("");
                  }}
                />
              ) : (
                <BsStars
                  className="text-white cursor-pointer w-[40px]"
                  size={18}
                  onClick={onOpen}
                />
              )}
            </div>
          </div>
        ) : (
          <div className={"float-right"}>
            <SearchIcon className="cursor-pointer" />
          </div>
        )}
      </div>
      <AdvanceSearch
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
