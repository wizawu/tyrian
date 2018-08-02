declare namespace java {
    namespace security {
        namespace cert {
interface X509Extension {
    hasUnsupportedCriticalExtension(): boolean
    getCriticalExtensionOIDs(): java.util.Set<java.lang.String>
    getNonCriticalExtensionOIDs(): java.util.Set<java.lang.String>
    getExtensionValue(arg0: java.lang.String | string): byte[]
}

        }
    }
}