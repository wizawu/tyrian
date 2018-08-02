declare namespace sun {
    namespace security {
        namespace provider {
            class PolicyParser {
                public constructor()
                public constructor(arg0: boolean)
                public read(arg0: java.io.Reader): void
                public add(arg0: sun.security.provider.PolicyParser$GrantEntry): void
                public replace(arg0: sun.security.provider.PolicyParser$GrantEntry, arg1: sun.security.provider.PolicyParser$GrantEntry): void
                public remove(arg0: sun.security.provider.PolicyParser$GrantEntry): boolean
                public getKeyStoreUrl(): string
                public setKeyStoreUrl(arg0: java.lang.String | string): void
                public getKeyStoreType(): string
                public setKeyStoreType(arg0: java.lang.String | string): void
                public getKeyStoreProvider(): string
                public setKeyStoreProvider(arg0: java.lang.String | string): void
                public getStorePassURL(): string
                public setStorePassURL(arg0: java.lang.String | string): void
                public grantElements(): java.util.Enumeration<sun.security.provider.PolicyParser$GrantEntry>
                public getDomainEntries(): java.util.Collection<sun.security.provider.PolicyParser$DomainEntry>
                public write(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}