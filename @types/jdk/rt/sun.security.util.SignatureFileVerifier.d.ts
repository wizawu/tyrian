declare namespace sun {
    namespace security {
        namespace util {
class SignatureFileVerifier {
    public constructor(arg0: java.util.ArrayList<java.security.CodeSigner[]>, arg1: sun.security.util.ManifestDigester, arg2: java.lang.String | string, arg3: byte[])
    public needSignatureFileBytes(): boolean
    public needSignatureFile(arg0: java.lang.String | string): boolean
    public setSignatureFile(arg0: byte[]): void
    public static isBlockOrSF(arg0: java.lang.String | string): boolean
    public static isSigningRelated(arg0: java.lang.String | string): boolean
    public process(arg0: java.util.Hashtable<java.lang.String, java.security.CodeSigner[]>, arg1: java.util.List<java.lang.Object>): void
    public static class: java.lang.Class<any>
}

        }
    }
}