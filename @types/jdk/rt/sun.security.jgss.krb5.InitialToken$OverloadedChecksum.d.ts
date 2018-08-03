declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class InitialToken$OverloadedChecksum {
                    public constructor(arg0: sun.security.jgss.krb5.InitialToken | sun.security.jgss.krb5.InitialToken$$Lambda, arg1: sun.security.jgss.krb5.Krb5Context, arg2: sun.security.krb5.Credentials, arg3: sun.security.krb5.Credentials)
                    public constructor(arg0: sun.security.jgss.krb5.InitialToken | sun.security.jgss.krb5.InitialToken$$Lambda, arg1: sun.security.jgss.krb5.Krb5Context, arg2: sun.security.krb5.Checksum, arg3: sun.security.krb5.EncryptionKey, arg4: sun.security.krb5.EncryptionKey)
                    public getChecksum(): sun.security.krb5.Checksum
                    public getDelegatedCreds(): sun.security.krb5.Credentials
                    public setContextFlags(arg0: sun.security.jgss.krb5.Krb5Context): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}