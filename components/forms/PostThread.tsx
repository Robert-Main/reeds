"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThreadValidation } from "@/lib/validations/threadValidation";
import { CreateThread } from "@/lib/actions/thread.action";

interface Props {
	userId: string;
}


function PostThread({ userId }: { userId: string; }) {
	const router = useRouter();
	const pathname = usePathname();


	const form = useForm({
		resolver: zodResolver(ThreadValidation),
		defaultValues: {
			thread: "",
			accountId: userId
		},
	});

	const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
		await CreateThread({
			text: values.thread,
			author: userId,
			communityId: null,
			path: pathname

		});
		router.push("/");
	};

	return (
		<Form {...form}>
			<form
				className='flex flex-col justify-start gap-10 mt-10'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='thread'
					render={({ field }) => (
						<FormItem className='flex flex-col w-full gap-3'>
							<FormLabel className='text-base-semibold text-light-2'>
								Content
							</FormLabel>
							<FormControl className="border no-focus border-e-dark-4 bg-dark-3 text-light-1">
								<Textarea
									rows={10}
									className='account-form_input no-focus'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='bg-primary-500'>
					Post Thread
				</Button>
			</form>
		</Form>
	);
}

export default PostThread;