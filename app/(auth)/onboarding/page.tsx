import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import AccountProfile from "@/components/forms/AccountProfile";
// import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
	const user = await currentUser();
	if (!user) return null;

	console.log(user);

	// const userInfo = await fetchUser(user.id);
	// if (userInfo?.onboarded) redirect("/");

	// const userData = {
	// 	id: user.id,
	// 	objectId: userInfo?._id,
	// 	username: userInfo ? userInfo?.username : user.username,
	// 	name: userInfo ? userInfo?.name : user.firstName ?? "",
	// 	bio: userInfo ? userInfo?.bio : "",
	// 	image: userInfo ? userInfo?.image : user.imageUrl,
	// };

	return (
		<main className='flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto'>
			<h1 className='head-text'>Onboarding</h1>
			<p className='mt-3 text-base-regular text-light-2'>
				Complete your profile now, to use Threds.
			</p>

			<section className='p-10 mt-9 bg-dark-2'>
				<AccountProfile btnTitle='Continue' user={{
					id: "",
					objectId: "",
					username: "",
					name: "",
					bio: "",
					image: ""
				}} />
			</section>
		</main>
	);
}

export default Page;