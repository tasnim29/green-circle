import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const DashNav = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex items-center gap-3 px-5">
      {user ? (
        <div className="space-x-4 ">
          <div
            className="avatar tooltip tooltip-left cursor-pointer relative"
            data-tip={user.displayName}
          >
            <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashNav;
