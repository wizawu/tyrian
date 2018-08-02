declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMReference extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.Reference , javax.xml.crypto.dom.DOMURIReference {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.xml.crypto.dsig.DigestMethod, arg3: java.util.List<javax.xml.crypto.dsig.Transform>, arg4: java.lang.String | string, arg5: java.security.Provider)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.xml.crypto.dsig.DigestMethod, arg3: java.util.List<javax.xml.crypto.dsig.Transform>, arg4: javax.xml.crypto.Data, arg5: java.util.List<javax.xml.crypto.dsig.Transform>, arg6: java.lang.String | string, arg7: java.security.Provider)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.xml.crypto.dsig.DigestMethod, arg3: java.util.List<javax.xml.crypto.dsig.Transform>, arg4: javax.xml.crypto.Data, arg5: java.util.List<javax.xml.crypto.dsig.Transform>, arg6: java.lang.String | string, arg7: byte[], arg8: java.security.Provider)
    public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
    public getDigestMethod(): javax.xml.crypto.dsig.DigestMethod
    public getId(): string
    public getURI(): string
    public getType(): string
    public getTransforms(): java.util.List
    public getDigestValue(): byte[]
    public getCalculatedDigestValue(): byte[]
    public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
    public digest(arg0: javax.xml.crypto.dsig.XMLSignContext): void
    public validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
    public getDereferencedData(): javax.xml.crypto.Data
    public getDigestInputStream(): java.io.InputStream
    public getHere(): org.w3c.dom.Node
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}