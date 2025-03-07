import { getMyProfile } from "@/actions/user.actions";
import Error from "@/components/uiComponents/component/Error";
import ProfileWrapper from "@/components/uiComponents/component/ProfileWrapper";
import React from "react";

export default async function page() {
  const user = await getMyProfile();

  return (
    <div>
      {user?.error ? (
        <div>
          <Error error="No Data has been found sorry" />
        </div>
      ) : (
        <>
          {/* @ts-expect-error because */}
          <ProfileWrapper user={user?.data} />
        </>
      )}
    </div>
  );
}
