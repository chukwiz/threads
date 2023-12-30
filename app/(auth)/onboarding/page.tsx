import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
    const user = await currentUser()
    if(!user) return null

    const userInfo = await fetchUser(user.id)
    if(userInfo?.onboarded) redirect("/")

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName,
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl
    }
  return (
    <main className=" mx-auto flex flex-col max-w-3xl justify-start px-10 py-20">
      <h2 className=" head-text">Onboarding Page</h2>
      <p className=" mt-2 text-base-regular text-light-2">
        Complete your profile now to use threads
      </p>

      <section className=" mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle = "Continue" />
      </section>
    </main>
  );
};

export default Page;
