"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { model } from "mongoose";
import User from "../models/user.models";

interface Props {
	userId: string;
	username: string;
	name: string;
	bio: string;
	image: string;
	path: string;
}

export async function updateUser({
	userId,
	bio,
	name,
	path,
	username,
	image,
}: Props): Promise<void> {
	try {
		connectToDB();

		await User.findOneAndUpdate(
			{ id: userId },
			{
				username: username.toLowerCase(),
				name,
				bio,
				image,
				onboarded: true,
			},
			{ upsert: true }
		);

		if (path === "/profile/edit") {
			revalidatePath(path);
		}
	} catch (error: any) {
		throw new Error(`Failed to create/update user: ${error.message}`);
	}
}

export async function fetchUser(userId: string) {
	if (!userId) {
		throw new Error("User ID is missing or undefined");
	}

	try {
		connectToDB();

		const user = await User.findOne({ id: userId });

		if (!user) {
			throw new Error(`User with ID ${userId} not found`);
		}

		return user;
	} catch (error: any) {
		throw new Error(`Failed to fetch user: ${error.message}`);
	}
}
