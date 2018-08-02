declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMXMLSignatureFactory extends javax.xml.crypto.dsig.XMLSignatureFactory {
    public constructor()
    public newXMLSignature(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo): javax.xml.crypto.dsig.XMLSignature
    public newXMLSignature(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg2: java.util.List, arg3: java.lang.String | string, arg4: java.lang.String | string): javax.xml.crypto.dsig.XMLSignature
    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod): javax.xml.crypto.dsig.Reference
    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List, arg3: java.lang.String | string, arg4: java.lang.String | string): javax.xml.crypto.dsig.Reference
    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List, arg3: javax.xml.crypto.Data, arg4: java.util.List, arg5: java.lang.String | string, arg6: java.lang.String | string): javax.xml.crypto.dsig.Reference
    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: byte[]): javax.xml.crypto.dsig.Reference
    public newSignedInfo(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List): javax.xml.crypto.dsig.SignedInfo
    public newSignedInfo(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List, arg3: java.lang.String | string): javax.xml.crypto.dsig.SignedInfo
    public newXMLObject(arg0: java.util.List, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.crypto.dsig.XMLObject
    public newManifest(arg0: java.util.List): javax.xml.crypto.dsig.Manifest
    public newManifest(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.Manifest
    public newSignatureProperties(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.SignatureProperties
    public newSignatureProperty(arg0: java.util.List, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.crypto.dsig.SignatureProperty
    public unmarshalXMLSignature(arg0: javax.xml.crypto.dsig.XMLValidateContext): javax.xml.crypto.dsig.XMLSignature
    public unmarshalXMLSignature(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.XMLSignature
    public isFeatureSupported(arg0: java.lang.String | string): boolean
    public newDigestMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.DigestMethodParameterSpec): javax.xml.crypto.dsig.DigestMethod
    public newSignatureMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): javax.xml.crypto.dsig.SignatureMethod
    public newTransform(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.TransformParameterSpec): javax.xml.crypto.dsig.Transform
    public newTransform(arg0: java.lang.String | string, arg1: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.Transform
    public newCanonicalizationMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec): javax.xml.crypto.dsig.CanonicalizationMethod
    public newCanonicalizationMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.CanonicalizationMethod
    public getURIDereferencer(): javax.xml.crypto.URIDereferencer
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}