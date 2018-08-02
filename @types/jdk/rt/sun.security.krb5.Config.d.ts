declare namespace sun {
    namespace security {
        namespace krb5 {
            class Config {
                public static getInstance(): sun.security.krb5.Config
                public static refresh(): void
                public get(...arg0: java.lang.String[]): string
                public getAll(...arg0: java.lang.String[]): string
                public exists(...arg0: java.lang.String[]): boolean
                public getIntValue(...arg0: java.lang.String[]): int
                public getBooleanValue(...arg0: java.lang.String[]): boolean
                public listTable(): void
                public defaultEtype(arg0: java.lang.String | string): int[]
                public static getType(arg0: java.lang.String | string): int
                public resetDefaultRealm(arg0: java.lang.String | string): void
                public useAddresses(): boolean
                public getDefaultRealm(): string
                public getKDCList(arg0: java.lang.String | string): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}