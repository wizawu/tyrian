declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace content {
class X509Data extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
    public constructor(arg0: org.w3c.dom.Document)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public addIssuerSerial(arg0: java.lang.String | string, arg1: java.math.BigInteger): void
    public addIssuerSerial(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addIssuerSerial(arg0: java.lang.String | string, arg1: int): void
    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509IssuerSerial): void
    public addSKI(arg0: byte[]): void
    public addSKI(arg0: java.security.cert.X509Certificate): void
    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509SKI): void
    public addSubjectName(arg0: java.lang.String | string): void
    public addSubjectName(arg0: java.security.cert.X509Certificate): void
    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509SubjectName): void
    public addCertificate(arg0: java.security.cert.X509Certificate): void
    public addCertificate(arg0: byte[]): void
    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509Certificate): void
    public addCRL(arg0: byte[]): void
    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509CRL): void
    public addDigest(arg0: java.security.cert.X509Certificate, arg1: java.lang.String | string): void
    public addDigest(arg0: byte[], arg1: java.lang.String | string): void
    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509Digest): void
    public addUnknownElement(arg0: org.w3c.dom.Element): void
    public lengthIssuerSerial(): int
    public lengthSKI(): int
    public lengthSubjectName(): int
    public lengthCertificate(): int
    public lengthCRL(): int
    public lengthDigest(): int
    public lengthUnknownElement(): int
    public itemIssuerSerial(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509IssuerSerial
    public itemSKI(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509SKI
    public itemSubjectName(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509SubjectName
    public itemCertificate(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509Certificate
    public itemCRL(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509CRL
    public itemDigest(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509Digest
    public itemUnknownElement(arg0: int): org.w3c.dom.Element
    public containsIssuerSerial(): boolean
    public containsSKI(): boolean
    public containsSubjectName(): boolean
    public containsCertificate(): boolean
    public containsDigest(): boolean
    public containsCRL(): boolean
    public containsUnknownElement(): boolean
    public getBaseLocalName(): string
    public static class: java.lang.Class<any>
}

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}