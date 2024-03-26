// Importaciones necesarias
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
export const authOptions: AuthOptions = {
  providers: [
    // Proveedor de Google
    GoogleProvider({
      clientId: "490635578120-u9tp8nkpntiafp21ni6cqddq8lpuve4n.apps.googleusercontent.com" as string,
      clientSecret: "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" as string,
    }),
    // Proveedor de Azure AD
    AzureADProvider({
      clientId: "a6ec488f-237a-45bd-8a7b-15c450441267" as string,
      clientSecret: "Ftu8Q~4V3zQREvjFPvgdW1GORkueUn2qfO2vCatP" as string,
      tenantId: "aa8d4281-8fb7-4918-bb18-f85313ad7047" as string,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
