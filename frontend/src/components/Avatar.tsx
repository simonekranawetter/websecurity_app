import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const Avatar = ({user}: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="avatar-dropdown">
      <div className="avatar" onClick={() => setDropdownOpen(state => !state)}>
        <img
          src={user.picture}
          alt={user.name}
        />
      </div>
      {
        dropdownOpen && <Dropdown />
      }
    </div>
  );
};
