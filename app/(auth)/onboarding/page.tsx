import { currentUser } from "@clerk/nextjs";

async function Page() {
	// const user = await currentUser();
	// console.log(user);

	const userInfo = {};

	// const userData = {
	//     id: user?.id,
	//     objectId: userInfo?._id,
	//     username: userInfo?.username || user?.username,
	//     name: userInfo?.name || user?.firstName || '',
	//     bio: userInfo?.bio || "",
	//     Image: userInfo?.image || user?.imageUrl
	// };
	return (
		<main className="flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto">
			<h1 className="head-text">onboarding</h1>
			<p className="mt-3 text-base-regular text-light-1">
				complete yur profile now to use threads
			</p>

			<section className="p-10 mt-9 bg-dark-2">
				{/* <AccountProfile
                    // user={userData}
                    btnTitle="continues"
                /> */}
			</section>
		</main>
	);
}

export default Page;