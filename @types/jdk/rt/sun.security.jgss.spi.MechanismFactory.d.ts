declare namespace sun {
    namespace security {
        namespace jgss {
            namespace spi {
                interface MechanismFactory {
                    getMechanismOid(): org.ietf.jgss.Oid
                    getProvider(): java.security.Provider
                    getNameTypes(): org.ietf.jgss.Oid[]
                    getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: int): sun.security.jgss.spi.GSSCredentialSpi
                    getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    getMechanismContext(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: sun.security.jgss.spi.GSSCredentialSpi, arg2: int): sun.security.jgss.spi.GSSContextSpi
                    getMechanismContext(arg0: sun.security.jgss.spi.GSSCredentialSpi): sun.security.jgss.spi.GSSContextSpi
                    getMechanismContext(arg0: byte[]): sun.security.jgss.spi.GSSContextSpi
                }
            }
        }
    }
}