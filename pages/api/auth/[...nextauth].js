import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/db';

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
                port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
                    pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.NEXT_PUBLIC_EMAIL_FROM
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.email = user.email
            session.user.emailVerified = user.emailVerified
            session.user.image = user.image
            session.user.name = user.name
            session.user.role = user.role
            return session
        }
    }
}
export default NextAuth(authOptions)