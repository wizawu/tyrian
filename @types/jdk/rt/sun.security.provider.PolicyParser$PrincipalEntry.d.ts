declare namespace sun {
    namespace security {
        namespace provider {
            class PolicyParser$PrincipalEntry implements java.security.Principal {
                public static readonly WILDCARD_CLASS: string
                public static readonly WILDCARD_NAME: string
                public static readonly REPLACE_NAME: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public getPrincipalClass(): string
                public getPrincipalName(): string
                public getDisplayClass(): string
                public getDisplayName(): string
                public getDisplayName(arg0: boolean): string
                public getName(): string
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public write(arg0: java.io.PrintWriter): void
                public static class: java.lang.Class<any>
            }
        }
    }
}