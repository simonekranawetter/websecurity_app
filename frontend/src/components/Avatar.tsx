import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const Avatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="avatar-dropdown">
      <div className="avatar" onClick={() => setDropdownOpen(state => !state)}>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b1c5200-c965-433e-9505-d0a946d71ca2/d5nyupy-f6c4cefe-86d5-47a4-a022-dea220779b5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82YjFjNTIwMC1jOTY1LTQzM2UtOTUwNS1kMGE5NDZkNzFjYTIvZDVueXVweS1mNmM0Y2VmZS04NmQ1LTQ3YTQtYTAyMi1kZWEyMjA3NzliNWMucG5nIn1dXX0.ciENLGxfm-VTffvXj0d8_oBAI7AIgjW6trmhRXJHzbA"
          alt="default pfp"
        />
      </div>
      {
        dropdownOpen && <Dropdown />
      }
    </div>
  );
};
