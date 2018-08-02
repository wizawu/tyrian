declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
abstract class CertPathHelper {
    protected static instance: sun.security.provider.certpath.CertPathHelper
    protected constructor()
    protected implSetPathToNames(arg0: java.security.cert.X509CertSelector, arg1: java.util.Set<sun.security.x509.GeneralNameInterface>): void
    protected implSetDateAndTime(arg0: java.security.cert.X509CRLSelector, arg1: java.util.Date, arg2: long): void
    public static setDateAndTime(arg0: java.security.cert.X509CRLSelector, arg1: java.util.Date, arg2: long): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}