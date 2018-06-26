declare namespace com {
    namespace sun {
        namespace security {
            namespace auth {
                class LdapPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getName(): string
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class NTDomainPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public getName(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class NTNumericCredential {
                    public constructor(arg0: long)
                    public getToken(): long
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class NTSid implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public getName(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class NTSidDomainPrincipal extends com.sun.security.auth.NTSid {
                    public constructor(arg0: java.lang.String | string)
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class NTSidGroupPrincipal extends com.sun.security.auth.NTSid {
                    public constructor(arg0: java.lang.String | string)
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class NTSidPrimaryGroupPrincipal extends com.sun.security.auth.NTSid {
                    public constructor(arg0: java.lang.String | string)
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class NTSidUserPrincipal extends com.sun.security.auth.NTSid {
                    public constructor(arg0: java.lang.String | string)
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class NTUserPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public getName(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                interface PrincipalComparator {
                    implies(arg0: javax.security.auth.Subject): boolean
                }
                interface PrincipalComparator$$Lambda {
                    (arg0: javax.security.auth.Subject): boolean
                }
                class UnixNumericGroupPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string, arg1: boolean)
                    public constructor(arg0: long, arg1: boolean)
                    public getName(): string
                    public longValue(): long
                    public isPrimaryGroup(): boolean
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class UnixNumericUserPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: long)
                    public getName(): string
                    public longValue(): long
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class UnixPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public getName(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class UserPrincipal implements java.security.Principal , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getName(): string
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                namespace callback {
                    class TextCallbackHandler implements javax.security.auth.callback.CallbackHandler {
                        public constructor()
                        public handle(arg0: javax.security.auth.callback.Callback[]): void
                        public static class: java.lang.Class<any>
                    }
                    class TextCallbackHandler$$Lambda implements javax.security.auth.callback.CallbackHandler {
                        public constructor()
                    }
                }
                namespace login {
                    class ConfigFile extends javax.security.auth.login.Configuration {
                        public constructor()
                        public constructor(arg0: java.net.URI)
                        public getAppConfigurationEntry(arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                        public refresh(): void
                        public static class: java.lang.Class<any>
                    }
                }
                namespace module {
                    class Crypt {
                        public constructor()
                        public crypt(arg0: byte[], arg1: byte[]): byte[]
                        public static main(arg0: java.lang.String[]): void
                        public static class: java.lang.Class<any>
                    }
                    class JndiLoginModule implements javax.security.auth.spi.LoginModule {
                        public USER_PROVIDER: string
                        public GROUP_PROVIDER: string
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                    class KeyStoreLoginModule implements javax.security.auth.spi.LoginModule {
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                    class Krb5LoginModule implements javax.security.auth.spi.LoginModule {
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                    class LdapLoginModule implements javax.security.auth.spi.LoginModule {
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                    class UnixLoginModule implements javax.security.auth.spi.LoginModule {
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                    class UnixSystem {
                        protected username: string
                        protected uid: long
                        protected gid: long
                        protected groups: long[]
                        public constructor()
                        public getUsername(): string
                        public getUid(): long
                        public getGid(): long
                        public getGroups(): long[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
