declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class Krb5MechFactory implements sun.security.jgss.spi.MechanismFactory {
                    public constructor(arg0: sun.security.jgss.GSSCaller)
                    public getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: int): sun.security.jgss.spi.GSSCredentialSpi
                    public static checkInitCredPermission(arg0: sun.security.jgss.krb5.Krb5NameElement): void
                    public static checkAcceptCredPermission(arg0: sun.security.jgss.krb5.Krb5NameElement, arg1: sun.security.jgss.spi.GSSNameSpi): void
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: sun.security.jgss.spi.GSSCredentialSpi, arg2: int): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSCredentialSpi): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: byte[]): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismOid(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public getNameTypes(): org.ietf.jgss.Oid[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}