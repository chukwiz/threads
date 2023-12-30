import { z } from "zod";

export const ThreadValidation = z.object({
    thread: z.string().min(3, {message: "Minimum of 3 characters"}),
    accountId: z.string()
})

export type ThreadForm = z.infer<typeof ThreadValidation>

export const CommentValidation = z.object({
    thread: z.string().min(3, {message: "Minimum of 3 characters"}),
})

export type CommentForm = z.infer<typeof CommentValidation>