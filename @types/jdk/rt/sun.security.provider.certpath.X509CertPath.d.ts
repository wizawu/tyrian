declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class X509CertPath extends java.security.cert.CertPath {
    public constructor(arg0: java.util.List<java.security.cert.Certificate>)
    public constructor(arg0: java.io.InputStream)
    public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string)
    public getEncoded(): byte[]
    public getEncoded(arg0: java.lang.String | string): byte[]
    public static getEncodingsStatic(): java.util.Iterator<java.lang.String>
    public getEncodings(): java.util.Iterator<java.lang.String>
    public getCertificates(): java.util.List<java.security.cert.X509Certificate>
    public static class: java.lang.Class<any>
}

            }
        }
    }
}