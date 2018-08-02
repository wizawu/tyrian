declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ktab {
                    class KeyTab implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public static getInstance(arg0: java.lang.String | string): sun.security.krb5.internal.ktab.KeyTab
                        public static getInstance(arg0: java.io.File): sun.security.krb5.internal.ktab.KeyTab
                        public static getInstance(): sun.security.krb5.internal.ktab.KeyTab
                        public isMissing(): boolean
                        public isValid(): boolean
                        public static normalize(arg0: java.lang.String | string): string
                        public getOneName(): sun.security.krb5.PrincipalName
                        public readServiceKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
                        public findServiceEntry(arg0: sun.security.krb5.PrincipalName): boolean
                        public tabName(): string
                        public addEntry(arg0: sun.security.krb5.PrincipalName, arg1: char[], arg2: int, arg3: boolean): void
                        public addEntry(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string, arg2: char[], arg3: int, arg4: boolean): void
                        public getEntries(): sun.security.krb5.internal.ktab.KeyTabEntry[]
                        public static create(): sun.security.krb5.internal.ktab.KeyTab
                        public static create(arg0: java.lang.String | string): sun.security.krb5.internal.ktab.KeyTab
                        public save(): void
                        public deleteEntries(arg0: sun.security.krb5.PrincipalName, arg1: int, arg2: int): int
                        public createVersion(arg0: java.io.File): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}