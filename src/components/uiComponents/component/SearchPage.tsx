"use client";
import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomePageCard from "./HomePageCard";
import { mockCar } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";

export default function SearchPage() {
  const [toggled, setToggled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [collapse, setCollaps] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setCollaps(false);
    }
  }, [width]);

  useEffect(() => {
    // Function to handle width change
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ToggleOut = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };

  return (
    <div className="flex gap-2 overflow-hidden">
      <Sidebar
        className="h-screen"
        collapsed={collapse}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="md"
        backgroundColor="#f2f2f2"
      >
        <Menu>
          <p className="text-center mt-3 font-semibold">Price</p>
          <MenuItem>
            <div className="flex items-center space-x-2">
              <Checkbox id="3to5" />
              <label
                htmlFor="3to5"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                3 million - 5 million
              </label>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center space-x-2">
              <Checkbox id="6to8" />
              <label
                htmlFor="6to8"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                6 million - 8 million
              </label>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center space-x-2">
              <Checkbox id="9to10" />
              <label
                htmlFor="9to10"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                9 million - 10 million
              </label>
            </div>
          </MenuItem>
        </Menu>
      </Sidebar>
      <main className="flex h-fit my-2">
        <div className="flex items-start flex-col px-2">
          {width < 700 && (
            <button
              className="my-3 flex items-center gap-2 bg-gray-200 p-2 rounded-md"
              onClick={() => setToggled(!toggled)}
            >
              <ToggleOut />
              <p className="text-sm font-semibold">filter</p>
            </button>
          )}
          {/* {width > 700 && (
            <button className="sb-button" onClick={() => setCollaps(!collapse)}>
              collapse
            </button>
          )} */}
          <p className="text-lg font-semibold">Search results for volsewagen</p>

          <div className="grid mdMob:grid-cols-2 tablet:grid-cols-3 mdTab:grid-cols-4 gap-4 my-3">
            {mockCar.map((item, idx) => (
              <HomePageCard
                name={String(
                  item?.make +
                    " " +
                    item?.model +
                    " " +
                    item?.color +
                    " " +
                    item?.yearOfManufacture
                )}
                slug={item.slug}
                horsePower={item.horsePower}
                condition={item.condition}
                img={item.images[0]}
                location={String(item.sellerCity + " " + item.sellerStreet)}
                price={item.price}
                transmission={item.transmission}
                key={idx}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
