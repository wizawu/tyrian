declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class OCSP {
    public static check(arg0: java.security.cert.X509Certificate, arg1: java.security.cert.X509Certificate, arg2: java.net.URI, arg3: java.security.cert.X509Certificate, arg4: java.util.Date): sun.security.provider.certpath.OCSP$RevocationStatus
    public static check(arg0: java.security.cert.X509Certificate, arg1: java.security.cert.X509Certificate, arg2: java.net.URI, arg3: java.security.cert.X509Certificate, arg4: java.util.Date, arg5: java.util.List<java.security.cert.Extension>, arg6: java.lang.String | string): sun.security.provider.certpath.OCSP$RevocationStatus
    public static check(arg0: java.security.cert.X509Certificate, arg1: java.net.URI, arg2: java.security.cert.TrustAnchor, arg3: java.security.cert.X509Certificate, arg4: java.security.cert.X509Certificate, arg5: java.util.Date, arg6: java.util.List<java.security.cert.Extension>, arg7: java.lang.String | string): sun.security.provider.certpath.OCSP$RevocationStatus
    public static getOCSPBytes(arg0: java.util.List<sun.security.provider.certpath.CertId>, arg1: java.net.URI, arg2: java.util.List<java.security.cert.Extension>): byte[]
    public static getResponderURI(arg0: java.security.cert.X509Certificate): java.net.URI
    public static class: java.lang.Class<any>
}

            }
        }
    }
}