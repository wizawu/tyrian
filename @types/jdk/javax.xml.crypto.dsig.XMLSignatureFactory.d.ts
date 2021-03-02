declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        abstract class XMLSignatureFactory {
          protected constructor()
          public static getInstance(arg0: java.lang.String | string): javax.xml.crypto.dsig.XMLSignatureFactory
          public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.xml.crypto.dsig.XMLSignatureFactory
          public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.crypto.dsig.XMLSignatureFactory
          public static getInstance(): javax.xml.crypto.dsig.XMLSignatureFactory
          public getMechanismType(): java.lang.String
          public getProvider(): java.security.Provider
          public abstract newXMLSignature(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo): javax.xml.crypto.dsig.XMLSignature
          public abstract newXMLSignature(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg2: java.util.List<javax.xml.crypto.dsig.XMLObject>, arg3: java.lang.String | string, arg4: java.lang.String | string): javax.xml.crypto.dsig.XMLSignature
          public abstract newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod): javax.xml.crypto.dsig.Reference
          public abstract newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List<javax.xml.crypto.dsig.Transform>, arg3: java.lang.String | string, arg4: java.lang.String | string): javax.xml.crypto.dsig.Reference
          public abstract newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List<javax.xml.crypto.dsig.Transform>, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: byte[]): javax.xml.crypto.dsig.Reference
          public abstract newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List<javax.xml.crypto.dsig.Transform>, arg3: javax.xml.crypto.Data, arg4: java.util.List<javax.xml.crypto.dsig.Transform>, arg5: java.lang.String | string, arg6: java.lang.String | string): javax.xml.crypto.dsig.Reference
          public abstract newSignedInfo(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List<javax.xml.crypto.dsig.Reference>): javax.xml.crypto.dsig.SignedInfo
          public abstract newSignedInfo(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List<javax.xml.crypto.dsig.Reference>, arg3: java.lang.String | string): javax.xml.crypto.dsig.SignedInfo
          public abstract newXMLObject(arg0: java.util.List<javax.xml.crypto.XMLStructure>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.crypto.dsig.XMLObject
          public abstract newManifest(arg0: java.util.List<javax.xml.crypto.dsig.Reference>): javax.xml.crypto.dsig.Manifest
          public abstract newManifest(arg0: java.util.List<javax.xml.crypto.dsig.Reference>, arg1: java.lang.String | string): javax.xml.crypto.dsig.Manifest
          public abstract newSignatureProperty(arg0: java.util.List<javax.xml.crypto.XMLStructure>, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.crypto.dsig.SignatureProperty
          public abstract newSignatureProperties(arg0: java.util.List<javax.xml.crypto.dsig.SignatureProperty>, arg1: java.lang.String | string): javax.xml.crypto.dsig.SignatureProperties
          public abstract newDigestMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.DigestMethodParameterSpec): javax.xml.crypto.dsig.DigestMethod
          public abstract newSignatureMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): javax.xml.crypto.dsig.SignatureMethod
          public abstract newTransform(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.TransformParameterSpec): javax.xml.crypto.dsig.Transform
          public abstract newTransform(arg0: java.lang.String | string, arg1: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$lambda): javax.xml.crypto.dsig.Transform
          public abstract newCanonicalizationMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec): javax.xml.crypto.dsig.CanonicalizationMethod
          public abstract newCanonicalizationMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$lambda): javax.xml.crypto.dsig.CanonicalizationMethod
          public getKeyInfoFactory(): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
          public abstract unmarshalXMLSignature(arg0: javax.xml.crypto.dsig.XMLValidateContext): javax.xml.crypto.dsig.XMLSignature
          public abstract unmarshalXMLSignature(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$lambda): javax.xml.crypto.dsig.XMLSignature
          public abstract isFeatureSupported(arg0: java.lang.String | string): boolean
          public abstract getURIDereferencer(): javax.xml.crypto.URIDereferencer
        }

      }
    }
  }
}
