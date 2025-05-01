import GitHub from "@auth/core/providers/github";
import NextAuth from "next-auth";

export const { auth, handlers } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
});
