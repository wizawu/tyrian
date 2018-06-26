declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            class Init {
                                public static CONF_NS: string
                                public constructor()
                                public static isInitialized(): boolean
                                public static init(): void
                                public static class: java.lang.Class<any>
                            }
                            namespace algorithms {
                                abstract class Algorithm extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public getAlgorithmURI(): string
                                    protected setAlgorithmURI(arg0: java.lang.String | string): void
                                    public static class: java.lang.Class<any>
                                }
                                class ClassLoaderUtils {
                                    public static class: java.lang.Class<any>
                                }
                                class JCEMapper {
                                    public constructor()
                                    public static register(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.algorithms.JCEMapper$Algorithm): void
                                    public static registerDefaultAlgorithms(): void
                                    public static translateURItoJCEID(arg0: java.lang.String | string): string
                                    public static getAlgorithmClassFromURI(arg0: java.lang.String | string): string
                                    public static getKeyLengthFromURI(arg0: java.lang.String | string): int
                                    public static getJCEKeyAlgorithmFromURI(arg0: java.lang.String | string): string
                                    public static getProviderId(): string
                                    public static setProviderId(arg0: java.lang.String | string): void
                                    public static class: java.lang.Class<any>
                                }
                                class MessageDigestAlgorithm extends com.sun.org.apache.xml.internal.security.algorithms.Algorithm {
                                    public static ALGO_ID_DIGEST_NOT_RECOMMENDED_MD5: string
                                    public static ALGO_ID_DIGEST_SHA1: string
                                    public static ALGO_ID_DIGEST_SHA256: string
                                    public static ALGO_ID_DIGEST_SHA384: string
                                    public static ALGO_ID_DIGEST_SHA512: string
                                    public static ALGO_ID_DIGEST_RIPEMD160: string
                                    public static getInstance(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.algorithms.MessageDigestAlgorithm
                                    public getAlgorithm(): java.security.MessageDigest
                                    public static isEqual(arg0: byte[], arg1: byte[]): boolean
                                    public digest(): byte[]
                                    public digest(arg0: byte[]): byte[]
                                    public digest(arg0: byte[], arg1: int, arg2: int): int
                                    public getJCEAlgorithmString(): string
                                    public getJCEProvider(): java.security.Provider
                                    public getDigestLength(): int
                                    public reset(): void
                                    public update(arg0: byte[]): void
                                    public update(arg0: byte): void
                                    public update(arg0: byte[], arg1: int, arg2: int): void
                                    public getBaseNamespace(): string
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class SignatureAlgorithm extends com.sun.org.apache.xml.internal.security.algorithms.Algorithm {
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: int)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
                                    public sign(): byte[]
                                    public getJCEAlgorithmString(): string
                                    public getJCEProviderName(): string
                                    public update(arg0: byte[]): void
                                    public update(arg0: byte): void
                                    public update(arg0: byte[], arg1: int, arg2: int): void
                                    public initSign(arg0: java.security.Key): void
                                    public initSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                    public initSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                    public setParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                    public initVerify(arg0: java.security.Key): void
                                    public verify(arg0: byte[]): boolean
                                    public getURI(): string
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi>): void
                                    public static registerDefaultAlgorithms(): void
                                    public getBaseNamespace(): string
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                abstract class SignatureAlgorithmSpi {
                                    public constructor()
                                    protected engineGetURI(): string
                                    protected engineGetJCEAlgorithmString(): string
                                    protected engineGetJCEProviderName(): string
                                    protected engineUpdate(arg0: byte[]): void
                                    protected engineUpdate(arg0: byte): void
                                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                    protected engineInitSign(arg0: java.security.Key): void
                                    protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                    protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                    protected engineSign(): byte[]
                                    protected engineInitVerify(arg0: java.security.Key): void
                                    protected engineVerify(arg0: byte[]): boolean
                                    protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                    protected engineGetContextFromElement(arg0: org.w3c.dom.Element): void
                                    protected engineSetHMACOutputLength(arg0: int): void
                                    public reset(): void
                                    public static class: java.lang.Class<any>
                                }
                                namespace implementations {
                                    abstract class IntegrityHmac extends com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi {
                                        public engineGetURI(): string
                                        public constructor()
                                        protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                        public reset(): void
                                        protected engineVerify(arg0: byte[]): boolean
                                        protected engineInitVerify(arg0: java.security.Key): void
                                        protected engineSign(): byte[]
                                        protected engineInitSign(arg0: java.security.Key): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                        protected engineUpdate(arg0: byte[]): void
                                        protected engineUpdate(arg0: byte): void
                                        protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                        protected engineGetJCEAlgorithmString(): string
                                        protected engineGetJCEProviderName(): string
                                        protected engineSetHMACOutputLength(arg0: int): void
                                        protected engineGetContextFromElement(arg0: org.w3c.dom.Element): void
                                        public engineAddContextToElement(arg0: org.w3c.dom.Element): void
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class SignatureBaseRSA extends com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi {
                                        public engineGetURI(): string
                                        public constructor()
                                        protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                        protected engineVerify(arg0: byte[]): boolean
                                        protected engineInitVerify(arg0: java.security.Key): void
                                        protected engineSign(): byte[]
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                        protected engineInitSign(arg0: java.security.Key): void
                                        protected engineUpdate(arg0: byte[]): void
                                        protected engineUpdate(arg0: byte): void
                                        protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                        protected engineGetJCEAlgorithmString(): string
                                        protected engineGetJCEProviderName(): string
                                        protected engineSetHMACOutputLength(arg0: int): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                        public static class: java.lang.Class<any>
                                    }
                                    class SignatureDSA extends com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi {
                                        protected engineGetURI(): string
                                        public constructor()
                                        protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                        protected engineVerify(arg0: byte[]): boolean
                                        protected engineInitVerify(arg0: java.security.Key): void
                                        protected engineSign(): byte[]
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                        protected engineInitSign(arg0: java.security.Key): void
                                        protected engineUpdate(arg0: byte[]): void
                                        protected engineUpdate(arg0: byte): void
                                        protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                        protected engineGetJCEAlgorithmString(): string
                                        protected engineGetJCEProviderName(): string
                                        protected engineSetHMACOutputLength(arg0: int): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class SignatureECDSA extends com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi {
                                        public engineGetURI(): string
                                        public static convertASN1toXMLDSIG(arg0: byte[]): byte[]
                                        public static convertXMLDSIGtoASN1(arg0: byte[]): byte[]
                                        public constructor()
                                        protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                        protected engineVerify(arg0: byte[]): boolean
                                        protected engineInitVerify(arg0: java.security.Key): void
                                        protected engineSign(): byte[]
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                        protected engineInitSign(arg0: java.security.Key): void
                                        protected engineUpdate(arg0: byte[]): void
                                        protected engineUpdate(arg0: byte): void
                                        protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                        protected engineGetJCEAlgorithmString(): string
                                        protected engineGetJCEProviderName(): string
                                        protected engineSetHMACOutputLength(arg0: int): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                            namespace c14n {
                                class CanonicalizationException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class Canonicalizer {
                                    public static ENCODING: string
                                    public static XPATH_C14N_WITH_COMMENTS_SINGLE_NODE: string
                                    public static ALGO_ID_C14N_OMIT_COMMENTS: string
                                    public static ALGO_ID_C14N_WITH_COMMENTS: string
                                    public static ALGO_ID_C14N_EXCL_OMIT_COMMENTS: string
                                    public static ALGO_ID_C14N_EXCL_WITH_COMMENTS: string
                                    public static ALGO_ID_C14N11_OMIT_COMMENTS: string
                                    public static ALGO_ID_C14N11_WITH_COMMENTS: string
                                    public static ALGO_ID_C14N_PHYSICAL: string
                                    public static getInstance(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.c14n.Canonicalizer
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.org.apache.xml.internal.security.c14n.CanonicalizerSpi>): void
                                    public static registerDefaultAlgorithms(): void
                                    public getURI(): string
                                    public getIncludeComments(): boolean
                                    public canonicalize(arg0: byte[]): byte[]
                                    public canonicalizeSubtree(arg0: org.w3c.dom.Node): byte[]
                                    public canonicalizeSubtree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                    public canonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList): byte[]
                                    public canonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList, arg1: java.lang.String | string): byte[]
                                    public canonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>): byte[]
                                    public canonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                    public setWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public getImplementingCanonicalizerClass(): string
                                    public notReset(): void
                                    public static class: java.lang.Class<any>
                                }
                                abstract class CanonicalizerSpi {
                                    protected reset: boolean
                                    public constructor()
                                    public engineCanonicalize(arg0: byte[]): byte[]
                                    public engineCanonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList): byte[]
                                    public engineCanonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList, arg1: java.lang.String | string): byte[]
                                    public engineGetURI(): string
                                    public engineGetIncludeComments(): boolean
                                    public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>): byte[]
                                    public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                    public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node): byte[]
                                    public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                    public setWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public static class: java.lang.Class<any>
                                }
                                class InvalidCanonicalizerException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                namespace helper {
                                    class AttrCompare implements java.util.Comparator<org.w3c.dom.Attr> , java.io.Serializable {
                                        public constructor()
                                        public compare(arg0: org.w3c.dom.Attr, arg1: org.w3c.dom.Attr): int
                                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                                        public static class: java.lang.Class<any>
                                    }
                                    class C14nHelper {
                                        public static namespaceIsRelative(arg0: org.w3c.dom.Attr): boolean
                                        public static namespaceIsRelative(arg0: java.lang.String | string): boolean
                                        public static namespaceIsAbsolute(arg0: org.w3c.dom.Attr): boolean
                                        public static namespaceIsAbsolute(arg0: java.lang.String | string): boolean
                                        public static assertNotRelativeNS(arg0: org.w3c.dom.Attr): void
                                        public static checkTraversability(arg0: org.w3c.dom.Document): void
                                        public static checkForRelativeNamespace(arg0: org.w3c.dom.Element): void
                                        public static class: java.lang.Class<any>
                                    }
                                }
                                namespace implementations {
                                    class Canonicalizer11_OmitComments extends com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer11 {
                                        public constructor()
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    class Canonicalizer11_WithComments extends com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer11 {
                                        public constructor()
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class Canonicalizer20010315 extends com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase {
                                        public constructor(arg0: boolean)
                                        public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                        protected handleAttributesSubtree(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
                                        protected handleAttributes(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
                                        protected circumventBugIfNeeded(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): void
                                        protected handleParent(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class Canonicalizer20010315Excl extends com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase {
                                        public constructor(arg0: boolean)
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node): byte[]
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: org.w3c.dom.Node): byte[]
                                        public engineCanonicalize(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.lang.String | string): byte[]
                                        public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                        protected handleAttributesSubtree(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
                                        protected handleAttributes(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
                                        protected circumventBugIfNeeded(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): void
                                        public static class: java.lang.Class<any>
                                    }
                                    class Canonicalizer20010315ExclOmitComments extends com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315Excl {
                                        public constructor()
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    class Canonicalizer20010315ExclWithComments extends com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315Excl {
                                        public constructor()
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    class Canonicalizer20010315OmitComments extends com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315 {
                                        public constructor()
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    class Canonicalizer20010315WithComments extends com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315 {
                                        public constructor()
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class CanonicalizerBase extends com.sun.org.apache.xml.internal.security.c14n.CanonicalizerSpi {
                                        public static XML: string
                                        public static XMLNS: string
                                        protected static COMPARE: com.sun.org.apache.xml.internal.security.c14n.helper.AttrCompare
                                        protected static NODE_BEFORE_DOCUMENT_ELEMENT: int
                                        protected static NODE_NOT_BEFORE_OR_AFTER_DOCUMENT_ELEMENT: int
                                        protected static NODE_AFTER_DOCUMENT_ELEMENT: int
                                        public constructor(arg0: boolean)
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node): byte[]
                                        public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>): byte[]
                                        public engineCanonicalize(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): byte[]
                                        public setWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                        protected engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): byte[]
                                        protected canonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable, arg2: org.w3c.dom.Node, arg3: int): void
                                        protected canonicalizeXPathNodeSet(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                                        protected isVisibleDO(arg0: org.w3c.dom.Node, arg1: int): int
                                        protected isVisibleInt(arg0: org.w3c.dom.Node): int
                                        protected isVisible(arg0: org.w3c.dom.Node): boolean
                                        protected handleParent(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
                                        protected getParentNameSpaces(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
                                        protected static outputAttrToWriter(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: java.util.Map<java.lang.String, byte[]>): void
                                        protected outputPItoWriter(arg0: org.w3c.dom.ProcessingInstruction, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                        protected outputCommentToWriter(arg0: org.w3c.dom.Comment, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                        protected static outputTextToWriter(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                        protected getNullNode(arg0: org.w3c.dom.Document): org.w3c.dom.Attr
                                        public static class: java.lang.Class<any>
                                    }
                                    class CanonicalizerPhysical extends com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase {
                                        public constructor()
                                        public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                        protected handleAttributesSubtree(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
                                        protected handleAttributes(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
                                        protected circumventBugIfNeeded(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): void
                                        protected handleParent(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
                                        public engineGetURI(): string
                                        public engineGetIncludeComments(): boolean
                                        protected outputPItoWriter(arg0: org.w3c.dom.ProcessingInstruction, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                        protected outputCommentToWriter(arg0: org.w3c.dom.Comment, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                        public static class: java.lang.Class<any>
                                    }
                                    class NameSpaceSymbTable {
                                        public constructor()
                                        public getUnrenderedNodes(arg0: java.util.Collection<org.w3c.dom.Attr>): void
                                        public outputNodePush(): void
                                        public outputNodePop(): void
                                        public push(): void
                                        public pop(): void
                                        public getMapping(arg0: java.lang.String | string): org.w3c.dom.Attr
                                        public getMappingWithoutRendered(arg0: java.lang.String | string): org.w3c.dom.Attr
                                        public addMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.w3c.dom.Attr): boolean
                                        public addMappingAndRender(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.w3c.dom.Attr): org.w3c.dom.Node
                                        public getLevel(): int
                                        public removeMapping(arg0: java.lang.String | string): void
                                        public removeMappingIfNotRender(arg0: java.lang.String | string): void
                                        public removeMappingIfRender(arg0: java.lang.String | string): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    class UtfHelpper {
                                        public constructor()
                                        public static getStringInUtf8(arg0: java.lang.String | string): byte[]
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                            namespace exceptions {
                                class AlgorithmAlreadyRegisteredException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class Base64DecodingException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class XMLSecurityException extends java.lang.Exception {
                                    protected msgID: string
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public getMsgID(): string
                                    public toString(): string
                                    public printStackTrace(): void
                                    public printStackTrace(arg0: java.io.PrintWriter): void
                                    public printStackTrace(arg0: java.io.PrintStream): void
                                    public getOriginalException(): java.lang.Exception
                                    public static class: java.lang.Class<any>
                                }
                                class XMLSecurityRuntimeException extends java.lang.RuntimeException {
                                    protected msgID: string
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public getMsgID(): string
                                    public toString(): string
                                    public printStackTrace(): void
                                    public printStackTrace(arg0: java.io.PrintWriter): void
                                    public printStackTrace(arg0: java.io.PrintStream): void
                                    public getOriginalException(): java.lang.Exception
                                    public static class: java.lang.Class<any>
                                }
                            }
                            namespace keys {
                                class ContentHandlerAlreadyRegisteredException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class KeyInfo extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public setSecureValidation(arg0: boolean): void
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public addKeyName(arg0: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.KeyName): void
                                    public addKeyValue(arg0: java.security.PublicKey): void
                                    public addKeyValue(arg0: org.w3c.dom.Element): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.keyvalues.DSAKeyValue | com.sun.org.apache.xml.internal.security.keys.content.keyvalues.DSAKeyValue$$Lambda): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.keyvalues.RSAKeyValue | com.sun.org.apache.xml.internal.security.keys.content.keyvalues.RSAKeyValue$$Lambda): void
                                    public add(arg0: java.security.PublicKey): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.KeyValue): void
                                    public addMgmtData(arg0: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.MgmtData): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.PGPData): void
                                    public addRetrievalMethod(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg2: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.RetrievalMethod): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.SPKIData): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.X509Data): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptedKey): void
                                    public addDEREncodedKeyValue(arg0: java.security.PublicKey): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.DEREncodedKeyValue): void
                                    public addKeyInfoReference(arg0: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.KeyInfoReference): void
                                    public addUnknownElement(arg0: org.w3c.dom.Element): void
                                    public lengthKeyName(): int
                                    public lengthKeyValue(): int
                                    public lengthMgmtData(): int
                                    public lengthPGPData(): int
                                    public lengthRetrievalMethod(): int
                                    public lengthSPKIData(): int
                                    public lengthX509Data(): int
                                    public lengthDEREncodedKeyValue(): int
                                    public lengthKeyInfoReference(): int
                                    public lengthUnknownElement(): int
                                    public itemKeyName(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.KeyName
                                    public itemKeyValue(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.KeyValue
                                    public itemMgmtData(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.MgmtData
                                    public itemPGPData(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.PGPData
                                    public itemRetrievalMethod(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.RetrievalMethod
                                    public itemSPKIData(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.SPKIData
                                    public itemX509Data(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.X509Data
                                    public itemEncryptedKey(arg0: int): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
                                    public itemDEREncodedKeyValue(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.DEREncodedKeyValue
                                    public itemKeyInfoReference(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.KeyInfoReference
                                    public itemUnknownElement(arg0: int): org.w3c.dom.Element
                                    public isEmpty(): boolean
                                    public containsKeyName(): boolean
                                    public containsKeyValue(): boolean
                                    public containsMgmtData(): boolean
                                    public containsPGPData(): boolean
                                    public containsRetrievalMethod(): boolean
                                    public containsSPKIData(): boolean
                                    public containsUnknownElement(): boolean
                                    public containsX509Data(): boolean
                                    public containsDEREncodedKeyValue(): boolean
                                    public containsKeyInfoReference(): boolean
                                    public getPublicKey(): java.security.PublicKey
                                    public getX509Certificate(): java.security.cert.X509Certificate
                                    public getSecretKey(): javax.crypto.SecretKey
                                    public getPrivateKey(): java.security.PrivateKey
                                    public registerInternalKeyResolver(arg0: com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi): void
                                    public addStorageResolver(arg0: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): void
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class KeyUtils {
                                    public static prinoutKeyInfo(arg0: com.sun.org.apache.xml.internal.security.keys.KeyInfo, arg1: java.io.PrintStream): void
                                    public static class: java.lang.Class<any>
                                }
                                namespace content {
                                    class DEREncodedKeyValue extends com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.security.PublicKey)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: byte[])
                                        public setId(arg0: java.lang.String | string): void
                                        public getId(): string
                                        public getBaseLocalName(): string
                                        public getPublicKey(): java.security.PublicKey
                                        protected getEncodedDER(arg0: java.security.PublicKey): byte[]
                                        public static class: java.lang.Class<any>
                                    }
                                    interface KeyInfoContent {
                                    }
                                    class KeyInfoReference extends com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                        public getURIAttr(): org.w3c.dom.Attr
                                        public getURI(): string
                                        public setId(arg0: java.lang.String | string): void
                                        public getId(): string
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class KeyName extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                        public getKeyName(): string
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class KeyValue extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.keys.content.keyvalues.DSAKeyValue | com.sun.org.apache.xml.internal.security.keys.content.keyvalues.DSAKeyValue$$Lambda)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.keys.content.keyvalues.RSAKeyValue | com.sun.org.apache.xml.internal.security.keys.content.keyvalues.RSAKeyValue$$Lambda)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.security.PublicKey)
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public getPublicKey(): java.security.PublicKey
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class MgmtData extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                        public getMgmtData(): string
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class PGPData extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class RetrievalMethod extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public static TYPE_DSA: string
                                        public static TYPE_RSA: string
                                        public static TYPE_PGP: string
                                        public static TYPE_SPKI: string
                                        public static TYPE_MGMT: string
                                        public static TYPE_X509: string
                                        public static TYPE_RAWX509: string
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg3: java.lang.String | string)
                                        public getURIAttr(): org.w3c.dom.Attr
                                        public getURI(): string
                                        public getType(): string
                                        public getTransforms(): com.sun.org.apache.xml.internal.security.transforms.Transforms
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class SPKIData extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
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
                                    namespace keyvalues {
                                        class DSAKeyValue extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger, arg4: java.math.BigInteger)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.Key)
                                            public getPublicKey(): java.security.PublicKey
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        class DSAKeyValue$$Lambda extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        }
                                        interface KeyValueContent {
                                            getPublicKey(): java.security.PublicKey
                                        }
                                        interface KeyValueContent$$Lambda {
                                            (): java.security.PublicKey
                                        }
                                        class RSAKeyValue extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.Key)
                                            public getPublicKey(): java.security.PublicKey
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        class RSAKeyValue$$Lambda extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        }
                                    }
                                    namespace x509 {
                                        class XMLX509CRL extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: byte[])
                                            public getCRLBytes(): byte[]
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        class XMLX509Certificate extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public static JCA_CERT_ID: string
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: byte[])
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate)
                                            public getCertificateBytes(): byte[]
                                            public getX509Certificate(): java.security.cert.X509Certificate
                                            public getPublicKey(): java.security.PublicKey
                                            public equals(arg0: java.lang.Object): boolean
                                            public hashCode(): int
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        interface XMLX509DataContent {
                                        }
                                        class XMLX509Digest extends com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: byte[], arg2: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate, arg2: java.lang.String | string)
                                            public getAlgorithmAttr(): org.w3c.dom.Attr
                                            public getAlgorithm(): string
                                            public getDigestBytes(): byte[]
                                            public static getDigestBytesFromCert(arg0: java.security.cert.X509Certificate, arg1: java.lang.String | string): byte[]
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        class XMLX509IssuerSerial extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.math.BigInteger)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: int)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate)
                                            public getSerialNumber(): java.math.BigInteger
                                            public getSerialNumberInteger(): int
                                            public getIssuerName(): string
                                            public equals(arg0: java.lang.Object): boolean
                                            public hashCode(): int
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        class XMLX509SKI extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public static SKI_OID: string
                                            public constructor(arg0: org.w3c.dom.Document, arg1: byte[])
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate)
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public getSKIBytes(): byte[]
                                            public static getSKIBytesFromCert(arg0: java.security.cert.X509Certificate): byte[]
                                            public equals(arg0: java.lang.Object): boolean
                                            public hashCode(): int
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                        class XMLX509SubjectName extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent {
                                            public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                            public constructor(arg0: org.w3c.dom.Document, arg1: java.security.cert.X509Certificate)
                                            public getSubjectName(): string
                                            public equals(arg0: java.lang.Object): boolean
                                            public hashCode(): int
                                            public getBaseLocalName(): string
                                            public static class: java.lang.Class<any>
                                        }
                                    }
                                }
                                namespace keyresolver {
                                    class InvalidKeyResolverException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                        public constructor()
                                        public constructor(arg0: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                        public static class: java.lang.Class<any>
                                    }
                                    class KeyResolver {
                                        public static length(): int
                                        public static getX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                        public static getPublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                        public static register(arg0: java.lang.String | string, arg1: boolean): void
                                        public static registerAtStart(arg0: java.lang.String | string, arg1: boolean): void
                                        public static register(arg0: com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi, arg1: boolean): void
                                        public static registerClassNames(arg0: java.util.List<java.lang.String>): void
                                        public static registerDefaultResolvers(): void
                                        public resolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                        public resolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                        public resolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public getProperty(arg0: java.lang.String | string): string
                                        public understandsProperty(arg0: java.lang.String | string): boolean
                                        public resolverClassName(): string
                                        public static iterator(): java.util.Iterator<com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi>
                                        public static class: java.lang.Class<any>
                                    }
                                    class KeyResolverException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                        public constructor()
                                        public constructor(arg0: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class KeyResolverSpi {
                                        protected properties: java.util.Map<java.lang.String, java.lang.String>
                                        protected globalResolver: boolean
                                        protected secureValidation: boolean
                                        public constructor()
                                        public setSecureValidation(arg0: boolean): void
                                        public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                        public engineResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                        public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                        public engineResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                        public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                        public engineResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                        public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                        public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
                                        public engineSetProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public engineGetProperty(arg0: java.lang.String | string): string
                                        public understandsProperty(arg0: java.lang.String | string): boolean
                                        public setGlobalResolver(arg0: boolean): void
                                        public static class: java.lang.Class<any>
                                    }
                                    namespace implementations {
                                        class DEREncodedKeyValueResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class DSAKeyValueResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class KeyInfoReferenceResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class PrivateKeyResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor(arg0: java.security.KeyStore, arg1: char[])
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class RSAKeyValueResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class RetrievalMethodResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class SecretKeyResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor(arg0: java.security.KeyStore, arg1: char[])
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class SingleKeyResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor(arg0: java.lang.String | string, arg1: java.security.PublicKey)
                                            public constructor(arg0: java.lang.String | string, arg1: java.security.PrivateKey)
                                            public constructor(arg0: java.lang.String | string, arg1: javax.crypto.SecretKey)
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public engineLookupAndResolvePrivateKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PrivateKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class X509CertificateResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class X509DigestResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineCanResolve(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): boolean
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class X509IssuerSerialResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class X509SKIResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                        class X509SubjectNameResolver extends com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi {
                                            public constructor()
                                            public engineLookupAndResolvePublicKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.PublicKey
                                            public engineLookupResolveX509Certificate(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): java.security.cert.X509Certificate
                                            public engineLookupAndResolveSecretKey(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): javax.crypto.SecretKey
                                            public static class: java.lang.Class<any>
                                        }
                                    }
                                }
                                namespace storage {
                                    class StorageResolver {
                                        public constructor()
                                        public constructor(arg0: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi)
                                        public add(arg0: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi): void
                                        public constructor(arg0: java.security.KeyStore)
                                        public add(arg0: java.security.KeyStore): void
                                        public constructor(arg0: java.security.cert.X509Certificate)
                                        public add(arg0: java.security.cert.X509Certificate): void
                                        public getIterator(): java.util.Iterator<java.security.cert.Certificate>
                                        public static class: java.lang.Class<any>
                                    }
                                    class StorageResolverException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                        public constructor()
                                        public constructor(arg0: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class StorageResolverSpi {
                                        public constructor()
                                        public getIterator(): java.util.Iterator<java.security.cert.Certificate>
                                        public static class: java.lang.Class<any>
                                    }
                                    namespace implementations {
                                        class CertsInFilesystemDirectoryResolver extends com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi {
                                            public constructor(arg0: java.lang.String | string)
                                            public getIterator(): java.util.Iterator<java.security.cert.Certificate>
                                            public static main(arg0: java.lang.String[]): void
                                            public static class: java.lang.Class<any>
                                        }
                                        class KeyStoreResolver extends com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi {
                                            public constructor(arg0: java.security.KeyStore)
                                            public getIterator(): java.util.Iterator<java.security.cert.Certificate>
                                            public static class: java.lang.Class<any>
                                        }
                                        class SingleCertificateResolver extends com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi {
                                            public constructor(arg0: java.security.cert.X509Certificate)
                                            public getIterator(): java.util.Iterator<java.security.cert.Certificate>
                                            public static class: java.lang.Class<any>
                                        }
                                    }
                                }
                            }
                            namespace signature {
                                class InvalidDigestValueException extends com.sun.org.apache.xml.internal.security.signature.XMLSignatureException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class InvalidSignatureValueException extends com.sun.org.apache.xml.internal.security.signature.XMLSignatureException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class Manifest extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public static MAXIMUM_REFERENCE_COUNT: int
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
                                    public addDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): void
                                    public generateDigestValues(): void
                                    public getLength(): int
                                    public item(arg0: int): com.sun.org.apache.xml.internal.security.signature.Reference
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public verifyReferences(): boolean
                                    public verifyReferences(arg0: boolean): boolean
                                    public getVerificationResult(arg0: int): boolean
                                    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver): void
                                    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi): void
                                    public getPerManifestResolvers(): java.util.List<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver>
                                    public getResolverProperties(): java.util.Map<java.lang.String, java.lang.String>
                                    public setResolverProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public getResolverProperty(arg0: java.lang.String | string): string
                                    public getSignedContentItem(arg0: int): byte[]
                                    public getReferencedContentBeforeTransformsItem(arg0: int): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getReferencedContentAfterTransformsItem(arg0: int): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getSignedContentLength(): int
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class MissingResourceFailureException extends com.sun.org.apache.xml.internal.security.signature.XMLSignatureException {
                                    public constructor(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.signature.Reference)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: com.sun.org.apache.xml.internal.security.signature.Reference)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: com.sun.org.apache.xml.internal.security.signature.Reference)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception, arg3: com.sun.org.apache.xml.internal.security.signature.Reference)
                                    public setReference(arg0: com.sun.org.apache.xml.internal.security.signature.Reference): void
                                    public getReference(): com.sun.org.apache.xml.internal.security.signature.Reference
                                    public static class: java.lang.Class<any>
                                }
                                interface NodeFilter {
                                    isNodeInclude(arg0: org.w3c.dom.Node): int
                                    isNodeIncludeDO(arg0: org.w3c.dom.Node, arg1: int): int
                                }
                                class ObjectContainer extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public setMimeType(arg0: java.lang.String | string): void
                                    public getMimeType(): string
                                    public setEncoding(arg0: java.lang.String | string): void
                                    public getEncoding(): string
                                    public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class Reference extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public static OBJECT_URI: string
                                    public static MANIFEST_URI: string
                                    public static MAXIMUM_TRANSFORM_COUNT: int
                                    protected constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xml.internal.security.signature.Manifest, arg4: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg5: java.lang.String | string)
                                    protected constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.signature.Manifest)
                                    protected constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.signature.Manifest, arg3: boolean)
                                    public getMessageDigestAlgorithm(): com.sun.org.apache.xml.internal.security.algorithms.MessageDigestAlgorithm
                                    public setURI(arg0: java.lang.String | string): void
                                    public getURI(): string
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public setType(arg0: java.lang.String | string): void
                                    public getType(): string
                                    public typeIsReferenceToObject(): boolean
                                    public typeIsReferenceToManifest(): boolean
                                    public generateDigestValue(): void
                                    public getContentsBeforeTransformation(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getContentsAfterTransformation(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getNodesetBeforeFirstCanonicalization(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getHTMLRepresentation(): string
                                    public getTransformsOutput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getReferenceData(): com.sun.org.apache.xml.internal.security.signature.reference.ReferenceData
                                    protected dereferenceURIandPerformTransforms(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getTransforms(): com.sun.org.apache.xml.internal.security.transforms.Transforms
                                    public getReferencedBytes(): byte[]
                                    public getDigestValue(): byte[]
                                    public verify(): boolean
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class ReferenceNotInitializedException extends com.sun.org.apache.xml.internal.security.signature.XMLSignatureException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class SignatureProperties extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public getLength(): int
                                    public item(arg0: int): com.sun.org.apache.xml.internal.security.signature.SignatureProperty
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public addSignatureProperty(arg0: com.sun.org.apache.xml.internal.security.signature.SignatureProperty): void
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class SignatureProperty extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public setTarget(arg0: java.lang.String | string): void
                                    public getTarget(): string
                                    public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class SignedInfo extends com.sun.org.apache.xml.internal.security.signature.Manifest {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element, arg2: org.w3c.dom.Element)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
                                    public verify(): boolean
                                    public verify(arg0: boolean): boolean
                                    public getCanonicalizedOctetStream(): byte[]
                                    public signInOctetStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public getCanonicalizationMethodURI(): string
                                    public getSignatureMethodURI(): string
                                    public getSignatureMethodElement(): org.w3c.dom.Element
                                    public createSecretKey(arg0: byte[]): javax.crypto.SecretKey
                                    protected getSignatureAlgorithm(): com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm
                                    public getBaseLocalName(): string
                                    public getInclusiveNamespaces(): string
                                    public static class: java.lang.Class<any>
                                }
                                class XMLSignature extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public static ALGO_ID_MAC_HMAC_SHA1: string
                                    public static ALGO_ID_SIGNATURE_DSA: string
                                    public static ALGO_ID_SIGNATURE_DSA_SHA256: string
                                    public static ALGO_ID_SIGNATURE_RSA: string
                                    public static ALGO_ID_SIGNATURE_RSA_SHA1: string
                                    public static ALGO_ID_SIGNATURE_NOT_RECOMMENDED_RSA_MD5: string
                                    public static ALGO_ID_SIGNATURE_RSA_RIPEMD160: string
                                    public static ALGO_ID_SIGNATURE_RSA_SHA256: string
                                    public static ALGO_ID_SIGNATURE_RSA_SHA384: string
                                    public static ALGO_ID_SIGNATURE_RSA_SHA512: string
                                    public static ALGO_ID_MAC_HMAC_NOT_RECOMMENDED_MD5: string
                                    public static ALGO_ID_MAC_HMAC_RIPEMD160: string
                                    public static ALGO_ID_MAC_HMAC_SHA256: string
                                    public static ALGO_ID_MAC_HMAC_SHA384: string
                                    public static ALGO_ID_MAC_HMAC_SHA512: string
                                    public static ALGO_ID_SIGNATURE_ECDSA_SHA1: string
                                    public static ALGO_ID_SIGNATURE_ECDSA_SHA256: string
                                    public static ALGO_ID_SIGNATURE_ECDSA_SHA384: string
                                    public static ALGO_ID_SIGNATURE_ECDSA_SHA512: string
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: org.w3c.dom.Element, arg3: org.w3c.dom.Element)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public getSignedInfo(): com.sun.org.apache.xml.internal.security.signature.SignedInfo
                                    public getSignatureValue(): byte[]
                                    public getKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
                                    public appendObject(arg0: com.sun.org.apache.xml.internal.security.signature.ObjectContainer): void
                                    public getObjectItem(arg0: int): com.sun.org.apache.xml.internal.security.signature.ObjectContainer
                                    public getObjectLength(): int
                                    public sign(arg0: java.security.Key): void
                                    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver): void
                                    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi): void
                                    public checkSignatureValue(arg0: java.security.cert.X509Certificate): boolean
                                    public checkSignatureValue(arg0: java.security.Key): boolean
                                    public addDocument(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                    public addDocument(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg2: java.lang.String | string): void
                                    public addDocument(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms): void
                                    public addDocument(arg0: java.lang.String | string): void
                                    public addKeyInfo(arg0: java.security.cert.X509Certificate): void
                                    public addKeyInfo(arg0: java.security.PublicKey): void
                                    public createSecretKey(arg0: byte[]): javax.crypto.SecretKey
                                    public setFollowNestedManifests(arg0: boolean): void
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                class XMLSignatureException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class XMLSignatureInput {
                                    public constructor(arg0: byte[])
                                    public constructor(arg0: java.io.InputStream)
                                    public constructor(arg0: org.w3c.dom.Node)
                                    public constructor(arg0: java.util.Set<org.w3c.dom.Node>)
                                    public isNeedsToBeExpanded(): boolean
                                    public setNeedsToBeExpanded(arg0: boolean): void
                                    public getNodeSet(): java.util.Set<org.w3c.dom.Node>
                                    public getInputNodeSet(): java.util.Set<org.w3c.dom.Node>
                                    public getNodeSet(arg0: boolean): java.util.Set<org.w3c.dom.Node>
                                    public getOctetStream(): java.io.InputStream
                                    public getOctetStreamReal(): java.io.InputStream
                                    public getBytes(): byte[]
                                    public isNodeSet(): boolean
                                    public isElement(): boolean
                                    public isOctetStream(): boolean
                                    public isOutputStreamSet(): boolean
                                    public isByteArray(): boolean
                                    public isInitialized(): boolean
                                    public getMIMEType(): string
                                    public setMIMEType(arg0: java.lang.String | string): void
                                    public getSourceURI(): string
                                    public setSourceURI(arg0: java.lang.String | string): void
                                    public toString(): string
                                    public getHTMLRepresentation(): string
                                    public getHTMLRepresentation(arg0: java.util.Set<java.lang.String>): string
                                    public getExcludeNode(): org.w3c.dom.Node
                                    public setExcludeNode(arg0: org.w3c.dom.Node): void
                                    public getSubNode(): org.w3c.dom.Node
                                    public isExcludeComments(): boolean
                                    public setExcludeComments(arg0: boolean): void
                                    public updateOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public updateOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean): void
                                    public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public addNodeFilter(arg0: com.sun.org.apache.xml.internal.security.signature.NodeFilter): void
                                    public getNodeFilters(): java.util.List<com.sun.org.apache.xml.internal.security.signature.NodeFilter>
                                    public setNodeSet(arg0: boolean): void
                                    public static class: java.lang.Class<any>
                                }
                                class XMLSignatureInputDebugger {
                                    public constructor(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput)
                                    public constructor(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.util.Set<java.lang.String>)
                                    public getHTMLRepresentation(): string
                                    public static class: java.lang.Class<any>
                                }
                                namespace reference {
                                    interface ReferenceData {
                                    }
                                    interface ReferenceNodeSetData extends com.sun.org.apache.xml.internal.security.signature.reference.ReferenceData {
                                        iterator(): java.util.Iterator<org.w3c.dom.Node>
                                    }
                                    class ReferenceOctetStreamData implements com.sun.org.apache.xml.internal.security.signature.reference.ReferenceData {
                                        public constructor(arg0: java.io.InputStream)
                                        public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                        public getOctetStream(): java.io.InputStream
                                        public getURI(): string
                                        public getMimeType(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class ReferenceSubTreeData implements com.sun.org.apache.xml.internal.security.signature.reference.ReferenceNodeSetData {
                                        public constructor(arg0: org.w3c.dom.Node, arg1: boolean)
                                        public iterator(): java.util.Iterator<org.w3c.dom.Node>
                                        public getRoot(): org.w3c.dom.Node
                                        public excludeComments(): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                            namespace transforms {
                                class ClassLoaderUtils {
                                    public static class: java.lang.Class<any>
                                }
                                class InvalidTransformException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class Transform extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: org.w3c.dom.Element)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: org.w3c.dom.NodeList)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.org.apache.xml.internal.security.transforms.TransformSpi>): void
                                    public static registerDefaultAlgorithms(): void
                                    public getURI(): string
                                    public performTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public performTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                interface TransformParam {
                                }
                                abstract class TransformSpi {
                                    public constructor()
                                    protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    protected engineGetURI(): string
                                    public static class: java.lang.Class<any>
                                }
                                class TransformationException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception)
                                    public static class: java.lang.Class<any>
                                }
                                class Transforms extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public static TRANSFORM_C14N_OMIT_COMMENTS: string
                                    public static TRANSFORM_C14N_WITH_COMMENTS: string
                                    public static TRANSFORM_C14N11_OMIT_COMMENTS: string
                                    public static TRANSFORM_C14N11_WITH_COMMENTS: string
                                    public static TRANSFORM_C14N_EXCL_OMIT_COMMENTS: string
                                    public static TRANSFORM_C14N_EXCL_WITH_COMMENTS: string
                                    public static TRANSFORM_XSLT: string
                                    public static TRANSFORM_BASE64_DECODE: string
                                    public static TRANSFORM_XPATH: string
                                    public static TRANSFORM_ENVELOPED_SIGNATURE: string
                                    public static TRANSFORM_XPOINTER: string
                                    public static TRANSFORM_XPATH2FILTER: string
                                    protected constructor()
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public setSecureValidation(arg0: boolean): void
                                    public addTransform(arg0: java.lang.String | string): void
                                    public addTransform(arg0: java.lang.String | string, arg1: org.w3c.dom.Element): void
                                    public addTransform(arg0: java.lang.String | string, arg1: org.w3c.dom.NodeList): void
                                    public performTransforms(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public performTransforms(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getLength(): int
                                    public item(arg0: int): com.sun.org.apache.xml.internal.security.transforms.Transform
                                    public getBaseLocalName(): string
                                    public static class: java.lang.Class<any>
                                }
                                namespace implementations {
                                    class FuncHere extends com.sun.org.apache.xpath.internal.functions.Function {
                                        public constructor()
                                        public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                        public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformBase64Decode extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformC14N extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformC14N11 extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformC14N11_WithComments extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformC14NExclusive extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformC14NExclusiveWithComments extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformC14NWithComments extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformEnvelopedSignature extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformXPath extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformXPath2Filter extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformXPointer extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                    class TransformXSLT extends com.sun.org.apache.xml.internal.security.transforms.TransformSpi {
                                        public static implementedTransformURI: string
                                        public constructor()
                                        protected engineGetURI(): string
                                        protected enginePerformTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.org.apache.xml.internal.security.transforms.Transform): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public static class: java.lang.Class<any>
                                    }
                                }
                                namespace params {
                                    class InclusiveNamespaces extends com.sun.org.apache.xml.internal.security.utils.ElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public static _TAG_EC_INCLUSIVENAMESPACES: string
                                        public static _ATT_EC_PREFIXLIST: string
                                        public static ExclusiveCanonicalizationNamespace: string
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                        public constructor(arg0: org.w3c.dom.Document, arg1: java.util.Set<java.lang.String>)
                                        public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                        public getInclusiveNamespaces(): string
                                        public static prefixStr2Set(arg0: java.lang.String | string): java.util.SortedSet<java.lang.String>
                                        public getBaseNamespace(): string
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class XPath2FilterContainer extends com.sun.org.apache.xml.internal.security.utils.ElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public static INTERSECT: string
                                        public static SUBTRACT: string
                                        public static UNION: string
                                        public static _TAG_XPATH2: string
                                        public static XPathFilter2NS: string
                                        public static newInstanceIntersect(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public static newInstanceSubtract(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public static newInstanceUnion(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public static newInstances(arg0: org.w3c.dom.Document, arg1: java.lang.String[][]): org.w3c.dom.NodeList
                                        public static newInstance(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public isIntersect(): boolean
                                        public isSubtract(): boolean
                                        public isUnion(): boolean
                                        public getXPathFilterStr(): string
                                        public getXPathFilterTextNode(): org.w3c.dom.Node
                                        public getBaseLocalName(): string
                                        public getBaseNamespace(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class XPath2FilterContainer04 extends com.sun.org.apache.xml.internal.security.utils.ElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public static _TAG_XPATH2: string
                                        public static XPathFilter2NS: string
                                        public static newInstanceIntersect(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer04
                                        public static newInstanceSubtract(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer04
                                        public static newInstanceUnion(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer04
                                        public static newInstance(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer04
                                        public isIntersect(): boolean
                                        public isSubtract(): boolean
                                        public isUnion(): boolean
                                        public getXPathFilterStr(): string
                                        public getXPathFilterTextNode(): org.w3c.dom.Node
                                        public getBaseLocalName(): string
                                        public getBaseNamespace(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class XPathContainer extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public constructor(arg0: org.w3c.dom.Document)
                                        public setXPath(arg0: java.lang.String | string): void
                                        public getXPath(): string
                                        public getBaseLocalName(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    class XPathFilterCHGPContainer extends com.sun.org.apache.xml.internal.security.utils.ElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public static TRANSFORM_XPATHFILTERCHGP: string
                                        public static _TAG_XPATHCHGP: string
                                        public static _ATT_INCLUDESLASH: string
                                        public static IncludeSlash: boolean
                                        public static ExcludeSlash: boolean
                                        public static getInstance(arg0: org.w3c.dom.Document, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPathFilterCHGPContainer
                                        public static getInstance(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPathFilterCHGPContainer
                                        public getIncludeButSearch(): string
                                        public getExcludeButSearch(): string
                                        public getExclude(): string
                                        public getIncludeSlashPolicy(): boolean
                                        public getHereContextNodeIncludeButSearch(): org.w3c.dom.Node
                                        public getHereContextNodeExcludeButSearch(): org.w3c.dom.Node
                                        public getHereContextNodeExclude(): org.w3c.dom.Node
                                        public getBaseLocalName(): string
                                        public getBaseNamespace(): string
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                            namespace utils {
                                class Base64 {
                                    public static BASE64DEFAULTLENGTH: int
                                    public static encode(arg0: java.math.BigInteger): string
                                    public static encode(arg0: java.math.BigInteger, arg1: int): byte[]
                                    public static decodeBigIntegerFromElement(arg0: org.w3c.dom.Element): java.math.BigInteger
                                    public static decodeBigIntegerFromText(arg0: org.w3c.dom.Text): java.math.BigInteger
                                    public static fillElementWithBigInteger(arg0: org.w3c.dom.Element, arg1: java.math.BigInteger): void
                                    public static decode(arg0: org.w3c.dom.Element): byte[]
                                    public static encodeToElement(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: byte[]): org.w3c.dom.Element
                                    public static decode(arg0: byte[]): byte[]
                                    public static encode(arg0: byte[]): string
                                    public static decode(arg0: java.io.BufferedReader): byte[]
                                    protected static isWhiteSpace(arg0: byte): boolean
                                    protected static isPad(arg0: byte): boolean
                                    public static encode(arg0: byte[], arg1: int): string
                                    public static decode(arg0: java.lang.String | string): byte[]
                                    protected static getBytesInternal(arg0: java.lang.String | string, arg1: byte[]): int
                                    protected static decodeInternal(arg0: byte[], arg1: int): byte[]
                                    public static decode(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public static decode(arg0: byte[], arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    protected static decode(arg0: byte[], arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                    public static decode(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    protected static removeWhiteSpace(arg0: byte[]): int
                                    public static class: java.lang.Class<any>
                                }
                                class ClassLoaderUtils {
                                    public static class: java.lang.Class<any>
                                }
                                class Constants {
                                    public static configurationFile: string
                                    public static configurationFileNew: string
                                    public static exceptionMessagesResourceBundleDir: string
                                    public static exceptionMessagesResourceBundleBase: string
                                    public static SIGNATURESPECIFICATION_URL: string
                                    public static SignatureSpecNS: string
                                    public static SignatureSpec11NS: string
                                    public static MoreAlgorithmsSpecNS: string
                                    public static XML_LANG_SPACE_SpecNS: string
                                    public static NamespaceSpecNS: string
                                    public static _ATT_ALGORITHM: string
                                    public static _ATT_URI: string
                                    public static _ATT_TYPE: string
                                    public static _ATT_ID: string
                                    public static _ATT_MIMETYPE: string
                                    public static _ATT_ENCODING: string
                                    public static _ATT_TARGET: string
                                    public static _TAG_CANONICALIZATIONMETHOD: string
                                    public static _TAG_DIGESTMETHOD: string
                                    public static _TAG_DIGESTVALUE: string
                                    public static _TAG_MANIFEST: string
                                    public static _TAG_METHODS: string
                                    public static _TAG_OBJECT: string
                                    public static _TAG_REFERENCE: string
                                    public static _TAG_SIGNATURE: string
                                    public static _TAG_SIGNATUREMETHOD: string
                                    public static _TAG_HMACOUTPUTLENGTH: string
                                    public static _TAG_SIGNATUREPROPERTIES: string
                                    public static _TAG_SIGNATUREPROPERTY: string
                                    public static _TAG_SIGNATUREVALUE: string
                                    public static _TAG_SIGNEDINFO: string
                                    public static _TAG_TRANSFORM: string
                                    public static _TAG_TRANSFORMS: string
                                    public static _TAG_XPATH: string
                                    public static _TAG_KEYINFO: string
                                    public static _TAG_KEYNAME: string
                                    public static _TAG_KEYVALUE: string
                                    public static _TAG_RETRIEVALMETHOD: string
                                    public static _TAG_X509DATA: string
                                    public static _TAG_PGPDATA: string
                                    public static _TAG_SPKIDATA: string
                                    public static _TAG_MGMTDATA: string
                                    public static _TAG_RSAKEYVALUE: string
                                    public static _TAG_EXPONENT: string
                                    public static _TAG_MODULUS: string
                                    public static _TAG_DSAKEYVALUE: string
                                    public static _TAG_P: string
                                    public static _TAG_Q: string
                                    public static _TAG_G: string
                                    public static _TAG_Y: string
                                    public static _TAG_J: string
                                    public static _TAG_SEED: string
                                    public static _TAG_PGENCOUNTER: string
                                    public static _TAG_RAWX509CERTIFICATE: string
                                    public static _TAG_X509ISSUERSERIAL: string
                                    public static _TAG_X509SKI: string
                                    public static _TAG_X509SUBJECTNAME: string
                                    public static _TAG_X509CERTIFICATE: string
                                    public static _TAG_X509CRL: string
                                    public static _TAG_X509ISSUERNAME: string
                                    public static _TAG_X509SERIALNUMBER: string
                                    public static _TAG_PGPKEYID: string
                                    public static _TAG_PGPKEYPACKET: string
                                    public static _TAG_DERENCODEDKEYVALUE: string
                                    public static _TAG_KEYINFOREFERENCE: string
                                    public static _TAG_X509DIGEST: string
                                    public static _TAG_SPKISEXP: string
                                    public static ALGO_ID_DIGEST_SHA1: string
                                    public static ALGO_ID_SIGNATURE_ECDSA_CERTICOM: string
                                    public static class: java.lang.Class<any>
                                }
                                class DOMNamespaceContext implements javax.xml.namespace.NamespaceContext {
                                    public constructor(arg0: org.w3c.dom.Node)
                                    public getNamespaceURI(arg0: java.lang.String | string): string
                                    public getPrefix(arg0: java.lang.String | string): string
                                    public getPrefixes(arg0: java.lang.String | string): java.util.Iterator<java.lang.String>
                                    public static class: java.lang.Class<any>
                                }
                                class DigesterOutputStream extends java.io.ByteArrayOutputStream {
                                    public constructor(arg0: com.sun.org.apache.xml.internal.security.algorithms.MessageDigestAlgorithm)
                                    public write(arg0: byte[]): void
                                    public write(arg0: int): void
                                    public write(arg0: byte[], arg1: int, arg2: int): void
                                    public getDigestValue(): byte[]
                                    public static class: java.lang.Class<any>
                                }
                                abstract class ElementProxy {
                                    protected static log: java.util.logging.Logger
                                    protected constructionElement: org.w3c.dom.Element
                                    protected baseURI: string
                                    protected doc: org.w3c.dom.Document
                                    public constructor()
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public getBaseNamespace(): string
                                    public getBaseLocalName(): string
                                    protected createElementForFamilyLocal(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementForFamily(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                    public setElement(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): void
                                    public getElement(): org.w3c.dom.Element
                                    public getElementPlusReturns(): org.w3c.dom.NodeList
                                    public getDocument(): org.w3c.dom.Document
                                    public getBaseURI(): string
                                    public addBigIntegerElement(arg0: java.math.BigInteger, arg1: java.lang.String | string): void
                                    public addBase64Element(arg0: byte[], arg1: java.lang.String | string): void
                                    public addTextElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public addBase64Text(arg0: byte[]): void
                                    public addText(arg0: java.lang.String | string): void
                                    public getBigIntegerFromChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): java.math.BigInteger
                                    public getBytesFromChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): byte[]
                                    public getTextFromChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                    public getBytesFromTextChild(): byte[]
                                    public getTextFromTextChild(): string
                                    public length(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                                    public setXPathNamespaceContext(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static setDefaultPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static registerDefaultPrefixes(): void
                                    public static getDefaultPrefix(arg0: java.lang.String | string): string
                                    public static class: java.lang.Class<any>
                                }
                                class EncryptionConstants {
                                    public static _ATT_ALGORITHM: string
                                    public static _ATT_ID: string
                                    public static _ATT_TARGET: string
                                    public static _ATT_TYPE: string
                                    public static _ATT_URI: string
                                    public static _ATT_ENCODING: string
                                    public static _ATT_RECIPIENT: string
                                    public static _ATT_MIMETYPE: string
                                    public static _TAG_CARRIEDKEYNAME: string
                                    public static _TAG_CIPHERDATA: string
                                    public static _TAG_CIPHERREFERENCE: string
                                    public static _TAG_CIPHERVALUE: string
                                    public static _TAG_DATAREFERENCE: string
                                    public static _TAG_ENCRYPTEDDATA: string
                                    public static _TAG_ENCRYPTEDKEY: string
                                    public static _TAG_ENCRYPTIONMETHOD: string
                                    public static _TAG_ENCRYPTIONPROPERTIES: string
                                    public static _TAG_ENCRYPTIONPROPERTY: string
                                    public static _TAG_KEYREFERENCE: string
                                    public static _TAG_KEYSIZE: string
                                    public static _TAG_OAEPPARAMS: string
                                    public static _TAG_MGF: string
                                    public static _TAG_REFERENCELIST: string
                                    public static _TAG_TRANSFORMS: string
                                    public static _TAG_AGREEMENTMETHOD: string
                                    public static _TAG_KA_NONCE: string
                                    public static _TAG_ORIGINATORKEYINFO: string
                                    public static _TAG_RECIPIENTKEYINFO: string
                                    public static ENCRYPTIONSPECIFICATION_URL: string
                                    public static EncryptionSpecNS: string
                                    public static EncryptionSpec11NS: string
                                    public static TYPE_CONTENT: string
                                    public static TYPE_ELEMENT: string
                                    public static TYPE_MEDIATYPE: string
                                    public static ALGO_ID_BLOCKCIPHER_TRIPLEDES: string
                                    public static ALGO_ID_BLOCKCIPHER_AES128: string
                                    public static ALGO_ID_BLOCKCIPHER_AES256: string
                                    public static ALGO_ID_BLOCKCIPHER_AES192: string
                                    public static ALGO_ID_BLOCKCIPHER_AES128_GCM: string
                                    public static ALGO_ID_BLOCKCIPHER_AES192_GCM: string
                                    public static ALGO_ID_BLOCKCIPHER_AES256_GCM: string
                                    public static ALGO_ID_KEYTRANSPORT_RSA15: string
                                    public static ALGO_ID_KEYTRANSPORT_RSAOAEP: string
                                    public static ALGO_ID_KEYTRANSPORT_RSAOAEP_11: string
                                    public static ALGO_ID_KEYAGREEMENT_DH: string
                                    public static ALGO_ID_KEYWRAP_TRIPLEDES: string
                                    public static ALGO_ID_KEYWRAP_AES128: string
                                    public static ALGO_ID_KEYWRAP_AES256: string
                                    public static ALGO_ID_KEYWRAP_AES192: string
                                    public static ALGO_ID_AUTHENTICATION_XMLSIGNATURE: string
                                    public static ALGO_ID_C14N_WITHCOMMENTS: string
                                    public static ALGO_ID_C14N_OMITCOMMENTS: string
                                    public static ALGO_ID_ENCODING_BASE64: string
                                    public static MGF1_SHA1: string
                                    public static MGF1_SHA224: string
                                    public static MGF1_SHA256: string
                                    public static MGF1_SHA384: string
                                    public static MGF1_SHA512: string
                                    public static class: java.lang.Class<any>
                                }
                                class HelperNodeList implements org.w3c.dom.NodeList {
                                    public constructor()
                                    public constructor(arg0: boolean)
                                    public item(arg0: int): org.w3c.dom.Node
                                    public getLength(): int
                                    public appendChild(arg0: org.w3c.dom.Node): void
                                    public getOwnerDocument(): org.w3c.dom.Document
                                    public static class: java.lang.Class<any>
                                }
                                class I18n {
                                    public static NOT_INITIALIZED_MSG: string
                                    public static translate(arg0: java.lang.String | string, arg1: java.lang.Object[]): string
                                    public static translate(arg0: java.lang.String | string): string
                                    public static getExceptionMessage(arg0: java.lang.String | string): string
                                    public static getExceptionMessage(arg0: java.lang.String | string, arg1: java.lang.Exception): string
                                    public static getExceptionMessage(arg0: java.lang.String | string, arg1: java.lang.Object[]): string
                                    public static init(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static class: java.lang.Class<any>
                                }
                                class IdResolver {
                                    public static registerElementById(arg0: org.w3c.dom.Element, arg1: org.w3c.dom.Attr): void
                                    public static getElementById(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static class: java.lang.Class<any>
                                }
                                class IgnoreAllErrorHandler implements org.xml.sax.ErrorHandler {
                                    public constructor()
                                    public warning(arg0: org.xml.sax.SAXParseException): void
                                    public error(arg0: org.xml.sax.SAXParseException): void
                                    public fatalError(arg0: org.xml.sax.SAXParseException): void
                                    public static class: java.lang.Class<any>
                                }
                                class JDKXPathAPI implements com.sun.org.apache.xml.internal.security.utils.XPathAPI {
                                    public constructor()
                                    public selectNodeList(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): org.w3c.dom.NodeList
                                    public evaluate(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): boolean
                                    public clear(): void
                                    public static class: java.lang.Class<any>
                                }
                                class JDKXPathFactory extends com.sun.org.apache.xml.internal.security.utils.XPathFactory {
                                    public constructor()
                                    public newXPathAPI(): com.sun.org.apache.xml.internal.security.utils.XPathAPI
                                    public static class: java.lang.Class<any>
                                }
                                class JavaUtils {
                                    public static getBytesFromFile(arg0: java.lang.String | string): byte[]
                                    public static writeBytesToFilename(arg0: java.lang.String | string, arg1: byte[]): void
                                    public static getBytesFromStream(arg0: java.io.InputStream): byte[]
                                    public static convertDsaASN1toXMLDSIG(arg0: byte[], arg1: int): byte[]
                                    public static convertDsaXMLDSIGtoASN1(arg0: byte[], arg1: int): byte[]
                                    public static checkRegisterPermission(): void
                                    public static class: java.lang.Class<any>
                                }
                                class RFC2253Parser {
                                    public constructor()
                                    public static rfc2253toXMLdsig(arg0: java.lang.String | string): string
                                    public static xmldsigtoRFC2253(arg0: java.lang.String | string): string
                                    public static normalize(arg0: java.lang.String | string): string
                                    public static normalize(arg0: java.lang.String | string, arg1: boolean): string
                                    public static class: java.lang.Class<any>
                                }
                                abstract class Signature11ElementProxy extends com.sun.org.apache.xml.internal.security.utils.ElementProxy {
                                    protected constructor()
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public getBaseNamespace(): string
                                    public static class: java.lang.Class<any>
                                }
                                abstract class SignatureElementProxy extends com.sun.org.apache.xml.internal.security.utils.ElementProxy {
                                    protected constructor()
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public getBaseNamespace(): string
                                    public static class: java.lang.Class<any>
                                }
                                class SignerOutputStream extends java.io.ByteArrayOutputStream {
                                    public constructor(arg0: com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm)
                                    public write(arg0: byte[]): void
                                    public write(arg0: int): void
                                    public write(arg0: byte[], arg1: int, arg2: int): void
                                    public static class: java.lang.Class<any>
                                }
                                class UnsyncBufferedOutputStream extends java.io.OutputStream {
                                    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                                    public write(arg0: byte[]): void
                                    public write(arg0: byte[], arg1: int, arg2: int): void
                                    public write(arg0: int): void
                                    public flush(): void
                                    public close(): void
                                    public static class: java.lang.Class<any>
                                }
                                class UnsyncByteArrayOutputStream extends java.io.OutputStream {
                                    public constructor()
                                    public write(arg0: byte[]): void
                                    public write(arg0: byte[], arg1: int, arg2: int): void
                                    public write(arg0: int): void
                                    public toByteArray(): byte[]
                                    public reset(): void
                                    public static class: java.lang.Class<any>
                                }
                                class XMLUtils {
                                    public static setDsPrefix(arg0: java.lang.String | string): void
                                    public static setDs11Prefix(arg0: java.lang.String | string): void
                                    public static setXencPrefix(arg0: java.lang.String | string): void
                                    public static setXenc11Prefix(arg0: java.lang.String | string): void
                                    public static getNextElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                    public static getSet(arg0: org.w3c.dom.Node, arg1: java.util.Set<org.w3c.dom.Node>, arg2: org.w3c.dom.Node, arg3: boolean): void
                                    public static outputDOM(arg0: org.w3c.dom.Node, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public static outputDOM(arg0: org.w3c.dom.Node, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: boolean): void
                                    public static outputDOMc14nWithComments(arg0: org.w3c.dom.Node, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public static getFullTextChildrenFromElement(arg0: org.w3c.dom.Element): string
                                    public static createElementInSignatureSpace(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementInSignature11Space(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementInEncryptionSpace(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementInEncryption11Space(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static elementIsInSignatureSpace(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static elementIsInSignature11Space(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static elementIsInEncryptionSpace(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static elementIsInEncryption11Space(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static getOwnerDocument(arg0: org.w3c.dom.Node): org.w3c.dom.Document
                                    public static getOwnerDocument(arg0: java.util.Set<org.w3c.dom.Node>): org.w3c.dom.Document
                                    public static createDSctx(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                    public static addReturnToElement(arg0: org.w3c.dom.Element): void
                                    public static addReturnToElement(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.utils.HelperNodeList): void
                                    public static addReturnBeforeChild(arg0: org.w3c.dom.Element, arg1: org.w3c.dom.Node): void
                                    public static convertNodelistToSet(arg0: org.w3c.dom.NodeList): java.util.Set<org.w3c.dom.Node>
                                    public static circumventBug2650(arg0: org.w3c.dom.Document): void
                                    public static selectDsNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Element
                                    public static selectDs11Node(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Element
                                    public static selectXencNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Element
                                    public static selectDsNodeText(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Text
                                    public static selectDs11NodeText(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Text
                                    public static selectNodeText(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): org.w3c.dom.Text
                                    public static selectNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): org.w3c.dom.Element
                                    public static selectDsNodes(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element[]
                                    public static selectDs11Nodes(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element[]
                                    public static selectNodes(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element[]
                                    public static excludeNodeFromSet(arg0: org.w3c.dom.Node, arg1: java.util.Set<org.w3c.dom.Node>): java.util.Set<org.w3c.dom.Node>
                                    public static getStrFromNode(arg0: org.w3c.dom.Node): string
                                    public static isDescendantOrSelf(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): boolean
                                    public static ignoreLineBreaks(): boolean
                                    public static getAttributeValue(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): string
                                    public static protectAgainstWrappingAttack(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): boolean
                                    public static protectAgainstWrappingAttack(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Element, arg2: java.lang.String | string): boolean
                                    public static class: java.lang.Class<any>
                                }
                                interface XPathAPI {
                                    selectNodeList(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): org.w3c.dom.NodeList
                                    evaluate(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): boolean
                                    clear(): void
                                }
                                abstract class XPathFactory {
                                    public constructor()
                                    protected static isXalanInstalled(): boolean
                                    public static newInstance(): com.sun.org.apache.xml.internal.security.utils.XPathFactory
                                    public newXPathAPI(): com.sun.org.apache.xml.internal.security.utils.XPathAPI
                                    public static class: java.lang.Class<any>
                                }
                                class XalanXPathAPI implements com.sun.org.apache.xml.internal.security.utils.XPathAPI {
                                    public constructor()
                                    public selectNodeList(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): org.w3c.dom.NodeList
                                    public evaluate(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: org.w3c.dom.Node): boolean
                                    public clear(): void
                                    public static isInstalled(): boolean
                                    public static class: java.lang.Class<any>
                                }
                                class XalanXPathFactory extends com.sun.org.apache.xml.internal.security.utils.XPathFactory {
                                    public constructor()
                                    public newXPathAPI(): com.sun.org.apache.xml.internal.security.utils.XPathAPI
                                    public static class: java.lang.Class<any>
                                }
                                namespace resolver {
                                    class ResourceResolver {
                                        public constructor(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi)
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: boolean): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: java.util.List<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver>): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: java.util.List<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver>, arg3: boolean): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static register(arg0: java.lang.String | string): void
                                        public static registerAtStart(arg0: java.lang.String | string): void
                                        public static register(arg0: java.lang.Class<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi>, arg1: boolean): void
                                        public static register(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi, arg1: boolean): void
                                        public static registerDefaultResolvers(): void
                                        public resolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public resolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: boolean): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public getProperty(arg0: java.lang.String | string): string
                                        public addProperties(arg0: java.util.Map<java.lang.String, java.lang.String>): void
                                        public getPropertyKeys(): java.lang.String[]
                                        public understandsProperty(arg0: java.lang.String | string): boolean
                                        public static class: java.lang.Class<any>
                                    }
                                    class ResourceResolverContext {
                                        public uriToResolve: string
                                        public secureValidation: boolean
                                        public baseUri: string
                                        public attr: org.w3c.dom.Attr
                                        public constructor(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: boolean)
                                        public static class: java.lang.Class<any>
                                    }
                                    class ResourceResolverException extends com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException {
                                        public constructor(arg0: java.lang.String | string, arg1: org.w3c.dom.Attr, arg2: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: org.w3c.dom.Attr, arg3: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: org.w3c.dom.Attr, arg3: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.Exception, arg3: org.w3c.dom.Attr, arg4: java.lang.String | string)
                                        public setURI(arg0: org.w3c.dom.Attr): void
                                        public getURI(): org.w3c.dom.Attr
                                        public setbaseURI(arg0: java.lang.String | string): void
                                        public getbaseURI(): string
                                        public static class: java.lang.Class<any>
                                    }
                                    abstract class ResourceResolverSpi {
                                        protected properties: java.util.Map<java.lang.String, java.lang.String>
                                        protected secureValidation: boolean
                                        public constructor()
                                        public engineResolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public engineSetProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public engineGetProperty(arg0: java.lang.String | string): string
                                        public engineAddProperies(arg0: java.util.Map<java.lang.String, java.lang.String>): void
                                        public engineIsThreadSafe(): boolean
                                        public engineCanResolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): boolean
                                        public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
                                        public engineGetPropertyKeys(): java.lang.String[]
                                        public understandsProperty(arg0: java.lang.String | string): boolean
                                        public static fixURI(arg0: java.lang.String | string): string
                                        public static class: java.lang.Class<any>
                                    }
                                    namespace implementations {
                                        class ResolverAnonymous extends com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi {
                                            public engineIsThreadSafe(): boolean
                                            public constructor(arg0: java.lang.String | string)
                                            public constructor(arg0: java.io.InputStream)
                                            public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                            public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
                                            public engineGetPropertyKeys(): java.lang.String[]
                                            public static class: java.lang.Class<any>
                                        }
                                        class ResolverDirectHTTP extends com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi {
                                            public constructor()
                                            public engineIsThreadSafe(): boolean
                                            public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                            public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
                                            public engineGetPropertyKeys(): java.lang.String[]
                                            public static class: java.lang.Class<any>
                                        }
                                        class ResolverFragment extends com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi {
                                            public constructor()
                                            public engineIsThreadSafe(): boolean
                                            public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                            public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
                                            public static class: java.lang.Class<any>
                                        }
                                        class ResolverLocalFilesystem extends com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi {
                                            public constructor()
                                            public engineIsThreadSafe(): boolean
                                            public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                            public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
                                            public static class: java.lang.Class<any>
                                        }
                                        class ResolverXPointer extends com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi {
                                            public constructor()
                                            public engineIsThreadSafe(): boolean
                                            public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                            public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
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
}
declare namespace javax {
    namespace xml {
        namespace crypto {
            interface AlgorithmMethod {
                getAlgorithm(): string
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec
            }
            interface Data {
            }
            abstract class KeySelector {
                protected constructor()
                public select(arg0: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg1: javax.xml.crypto.KeySelector$Purpose, arg2: javax.xml.crypto.AlgorithmMethod, arg3: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.KeySelectorResult
                public static singletonKeySelector(arg0: java.security.Key): javax.xml.crypto.KeySelector
                public static class: java.lang.Class<any>
            }
            class KeySelectorException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public constructor(arg0: java.lang.Throwable)
                public getCause(): java.lang.Throwable
                public printStackTrace(): void
                public printStackTrace(arg0: java.io.PrintStream): void
                public printStackTrace(arg0: java.io.PrintWriter): void
                public static class: java.lang.Class<any>
            }
            interface KeySelectorResult {
                getKey(): java.security.Key
            }
            interface KeySelectorResult$$Lambda {
                (): java.security.Key
            }
            class MarshalException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public constructor(arg0: java.lang.Throwable)
                public getCause(): java.lang.Throwable
                public printStackTrace(): void
                public printStackTrace(arg0: java.io.PrintStream): void
                public printStackTrace(arg0: java.io.PrintWriter): void
                public static class: java.lang.Class<any>
            }
            class NoSuchMechanismException extends java.lang.RuntimeException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public constructor(arg0: java.lang.Throwable)
                public getCause(): java.lang.Throwable
                public printStackTrace(): void
                public printStackTrace(arg0: java.io.PrintStream): void
                public printStackTrace(arg0: java.io.PrintWriter): void
                public static class: java.lang.Class<any>
            }
            interface NodeSetData extends javax.xml.crypto.Data {
                iterator(): java.util.Iterator
            }
            class OctetStreamData implements javax.xml.crypto.Data {
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public getOctetStream(): java.io.InputStream
                public getURI(): string
                public getMimeType(): string
                public static class: java.lang.Class<any>
            }
            interface URIDereferencer {
                dereference(arg0: javax.xml.crypto.URIReference, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
            }
            interface URIDereferencer$$Lambda {
                (arg0: javax.xml.crypto.URIReference, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
            }
            interface URIReference {
                getURI(): string
                getType(): string
            }
            class URIReferenceException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: javax.xml.crypto.URIReference)
                public constructor(arg0: java.lang.Throwable)
                public getURIReference(): javax.xml.crypto.URIReference
                public getCause(): java.lang.Throwable
                public printStackTrace(): void
                public printStackTrace(arg0: java.io.PrintStream): void
                public printStackTrace(arg0: java.io.PrintWriter): void
                public static class: java.lang.Class<any>
            }
            interface XMLCryptoContext {
                getBaseURI(): string
                setBaseURI(arg0: java.lang.String | string): void
                getKeySelector(): javax.xml.crypto.KeySelector
                setKeySelector(arg0: javax.xml.crypto.KeySelector): void
                getURIDereferencer(): javax.xml.crypto.URIDereferencer
                setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer | javax.xml.crypto.URIDereferencer$$Lambda): void
                getNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                putNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                getDefaultNamespacePrefix(): string
                setDefaultNamespacePrefix(arg0: java.lang.String | string): void
                setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                getProperty(arg0: java.lang.String | string): java.lang.Object
                get(arg0: java.lang.Object): java.lang.Object
                put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            }
            interface XMLStructure {
                isFeatureSupported(arg0: java.lang.String | string): boolean
            }
            interface XMLStructure$$Lambda {
                (arg0: java.lang.String | string): boolean
            }
            namespace dom {
                class DOMCryptoContext implements javax.xml.crypto.XMLCryptoContext {
                    protected constructor()
                    public getNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                    public putNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                    public getDefaultNamespacePrefix(): string
                    public setDefaultNamespacePrefix(arg0: java.lang.String | string): void
                    public getBaseURI(): string
                    public setBaseURI(arg0: java.lang.String | string): void
                    public getURIDereferencer(): javax.xml.crypto.URIDereferencer
                    public setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer | javax.xml.crypto.URIDereferencer$$Lambda): void
                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    public getKeySelector(): javax.xml.crypto.KeySelector
                    public setKeySelector(arg0: javax.xml.crypto.KeySelector): void
                    public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
                    public setIdAttributeNS(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public iterator(): java.util.Iterator
                    public get(arg0: java.lang.Object): java.lang.Object
                    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class DOMStructure implements javax.xml.crypto.XMLStructure {
                    public constructor(arg0: org.w3c.dom.Node)
                    public getNode(): org.w3c.dom.Node
                    public isFeatureSupported(arg0: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
                class DOMStructure$$Lambda implements javax.xml.crypto.XMLStructure {
                    public constructor(arg0: org.w3c.dom.Node)
                }
                interface DOMURIReference extends javax.xml.crypto.URIReference {
                    getHere(): org.w3c.dom.Node
                }
            }
            namespace dsig {
                interface CanonicalizationMethod extends javax.xml.crypto.dsig.Transform {
                    INCLUSIVE: string
                    INCLUSIVE_WITH_COMMENTS: string
                    EXCLUSIVE: string
                    EXCLUSIVE_WITH_COMMENTS: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
                interface DigestMethod extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
                    SHA1: string
                    SHA256: string
                    SHA512: string
                    RIPEMD160: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
                interface Manifest extends javax.xml.crypto.XMLStructure {
                    TYPE: string
                    getId(): string
                    getReferences(): java.util.List
                }
                interface Reference extends javax.xml.crypto.URIReference , javax.xml.crypto.XMLStructure {
                    getTransforms(): java.util.List
                    getDigestMethod(): javax.xml.crypto.dsig.DigestMethod
                    getId(): string
                    getDigestValue(): byte[]
                    getCalculatedDigestValue(): byte[]
                    validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
                    getDereferencedData(): javax.xml.crypto.Data
                    getDigestInputStream(): java.io.InputStream
                }
                interface SignatureMethod extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
                    DSA_SHA1: string
                    RSA_SHA1: string
                    HMAC_SHA1: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
                interface SignatureProperties extends javax.xml.crypto.XMLStructure {
                    TYPE: string
                    getId(): string
                    getProperties(): java.util.List
                }
                interface SignatureProperty extends javax.xml.crypto.XMLStructure {
                    getTarget(): string
                    getId(): string
                    getContent(): java.util.List
                }
                interface SignedInfo extends javax.xml.crypto.XMLStructure {
                    getCanonicalizationMethod(): javax.xml.crypto.dsig.CanonicalizationMethod
                    getSignatureMethod(): javax.xml.crypto.dsig.SignatureMethod
                    getReferences(): java.util.List
                    getId(): string
                    getCanonicalizedData(): java.io.InputStream
                }
                interface Transform extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
                    BASE64: string
                    ENVELOPED: string
                    XPATH: string
                    XPATH2: string
                    XSLT: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                    transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                    transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                }
                class TransformException extends java.lang.Exception {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                    public constructor(arg0: java.lang.Throwable)
                    public getCause(): java.lang.Throwable
                    public printStackTrace(): void
                    public printStackTrace(arg0: java.io.PrintStream): void
                    public printStackTrace(arg0: java.io.PrintWriter): void
                    public static class: java.lang.Class<any>
                }
                abstract class TransformService implements javax.xml.crypto.dsig.Transform {
                    protected constructor()
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.crypto.dsig.TransformService
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.Provider): javax.xml.crypto.dsig.TransformService
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.crypto.dsig.TransformService
                    public getMechanismType(): string
                    public getAlgorithm(): string
                    public getProvider(): java.security.Provider
                    public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                    public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                    public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                    public static class: java.lang.Class<any>
                }
                interface XMLObject extends javax.xml.crypto.XMLStructure {
                    TYPE: string
                    getContent(): java.util.List
                    getId(): string
                    getMimeType(): string
                    getEncoding(): string
                }
                interface XMLSignContext extends javax.xml.crypto.XMLCryptoContext {
                }
                interface XMLSignature extends javax.xml.crypto.XMLStructure {
                    XMLNS: string
                    validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
                    getKeyInfo(): javax.xml.crypto.dsig.keyinfo.KeyInfo
                    getSignedInfo(): javax.xml.crypto.dsig.SignedInfo
                    getObjects(): java.util.List
                    getId(): string
                    getSignatureValue(): javax.xml.crypto.dsig.XMLSignature$SignatureValue
                    sign(arg0: javax.xml.crypto.dsig.XMLSignContext): void
                    getKeySelectorResult(): javax.xml.crypto.KeySelectorResult
                }
                class XMLSignatureException extends java.lang.Exception {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                    public constructor(arg0: java.lang.Throwable)
                    public getCause(): java.lang.Throwable
                    public printStackTrace(): void
                    public printStackTrace(arg0: java.io.PrintStream): void
                    public printStackTrace(arg0: java.io.PrintWriter): void
                    public static class: java.lang.Class<any>
                }
                abstract class XMLSignatureFactory {
                    protected constructor()
                    public static getInstance(arg0: java.lang.String | string): javax.xml.crypto.dsig.XMLSignatureFactory
                    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.xml.crypto.dsig.XMLSignatureFactory
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.crypto.dsig.XMLSignatureFactory
                    public static getInstance(): javax.xml.crypto.dsig.XMLSignatureFactory
                    public getMechanismType(): string
                    public getProvider(): java.security.Provider
                    public newXMLSignature(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo): javax.xml.crypto.dsig.XMLSignature
                    public newXMLSignature(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg2: java.util.List, arg3: java.lang.String | string, arg4: java.lang.String | string): javax.xml.crypto.dsig.XMLSignature
                    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod): javax.xml.crypto.dsig.Reference
                    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List, arg3: java.lang.String | string, arg4: java.lang.String | string): javax.xml.crypto.dsig.Reference
                    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: byte[]): javax.xml.crypto.dsig.Reference
                    public newReference(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.DigestMethod, arg2: java.util.List, arg3: javax.xml.crypto.Data, arg4: java.util.List, arg5: java.lang.String | string, arg6: java.lang.String | string): javax.xml.crypto.dsig.Reference
                    public newSignedInfo(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List): javax.xml.crypto.dsig.SignedInfo
                    public newSignedInfo(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List, arg3: java.lang.String | string): javax.xml.crypto.dsig.SignedInfo
                    public newXMLObject(arg0: java.util.List, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.crypto.dsig.XMLObject
                    public newManifest(arg0: java.util.List): javax.xml.crypto.dsig.Manifest
                    public newManifest(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.Manifest
                    public newSignatureProperty(arg0: java.util.List, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.crypto.dsig.SignatureProperty
                    public newSignatureProperties(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.SignatureProperties
                    public newDigestMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.DigestMethodParameterSpec): javax.xml.crypto.dsig.DigestMethod
                    public newSignatureMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): javax.xml.crypto.dsig.SignatureMethod
                    public newTransform(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.TransformParameterSpec): javax.xml.crypto.dsig.Transform
                    public newTransform(arg0: java.lang.String | string, arg1: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.Transform
                    public newCanonicalizationMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec): javax.xml.crypto.dsig.CanonicalizationMethod
                    public newCanonicalizationMethod(arg0: java.lang.String | string, arg1: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.CanonicalizationMethod
                    public getKeyInfoFactory(): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                    public unmarshalXMLSignature(arg0: javax.xml.crypto.dsig.XMLValidateContext): javax.xml.crypto.dsig.XMLSignature
                    public unmarshalXMLSignature(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.XMLSignature
                    public isFeatureSupported(arg0: java.lang.String | string): boolean
                    public getURIDereferencer(): javax.xml.crypto.URIDereferencer
                    public static class: java.lang.Class<any>
                }
                interface XMLValidateContext extends javax.xml.crypto.XMLCryptoContext {
                }
                namespace dom {
                    class DOMSignContext extends javax.xml.crypto.dom.DOMCryptoContext implements javax.xml.crypto.dsig.XMLSignContext {
                        public constructor(arg0: java.security.Key, arg1: org.w3c.dom.Node)
                        public constructor(arg0: java.security.Key, arg1: org.w3c.dom.Node, arg2: org.w3c.dom.Node)
                        public constructor(arg0: javax.xml.crypto.KeySelector, arg1: org.w3c.dom.Node)
                        public constructor(arg0: javax.xml.crypto.KeySelector, arg1: org.w3c.dom.Node, arg2: org.w3c.dom.Node)
                        public setParent(arg0: org.w3c.dom.Node): void
                        public setNextSibling(arg0: org.w3c.dom.Node): void
                        public getParent(): org.w3c.dom.Node
                        public getNextSibling(): org.w3c.dom.Node
                        public static class: java.lang.Class<any>
                    }
                    class DOMValidateContext extends javax.xml.crypto.dom.DOMCryptoContext implements javax.xml.crypto.dsig.XMLValidateContext {
                        public constructor(arg0: javax.xml.crypto.KeySelector, arg1: org.w3c.dom.Node)
                        public constructor(arg0: java.security.Key, arg1: org.w3c.dom.Node)
                        public setNode(arg0: org.w3c.dom.Node): void
                        public getNode(): org.w3c.dom.Node
                        public static class: java.lang.Class<any>
                    }
                }
                namespace keyinfo {
                    interface KeyInfo extends javax.xml.crypto.XMLStructure {
                        getContent(): java.util.List
                        getId(): string
                        marshal(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                    }
                    abstract class KeyInfoFactory {
                        protected constructor()
                        public static getInstance(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public static getInstance(): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public getMechanismType(): string
                        public getProvider(): java.security.Provider
                        public newKeyInfo(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        public newKeyInfo(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        public newKeyName(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyName
                        public newKeyValue(arg0: java.security.PublicKey): javax.xml.crypto.dsig.keyinfo.KeyValue
                        public newPGPData(arg0: byte[]): javax.xml.crypto.dsig.keyinfo.PGPData
                        public newPGPData(arg0: byte[], arg1: byte[], arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
                        public newPGPData(arg0: byte[], arg1: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
                        public newRetrievalMethod(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                        public newRetrievalMethod(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                        public newX509Data(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.X509Data
                        public newX509IssuerSerial(arg0: java.lang.String | string, arg1: java.math.BigInteger): javax.xml.crypto.dsig.keyinfo.X509IssuerSerial
                        public isFeatureSupported(arg0: java.lang.String | string): boolean
                        public getURIDereferencer(): javax.xml.crypto.URIDereferencer
                        public unmarshalKeyInfo(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        public static class: java.lang.Class<any>
                    }
                    interface KeyName extends javax.xml.crypto.XMLStructure {
                        getName(): string
                    }
                    interface KeyValue extends javax.xml.crypto.XMLStructure {
                        DSA_TYPE: string
                        RSA_TYPE: string
                        getPublicKey(): java.security.PublicKey
                    }
                    interface PGPData extends javax.xml.crypto.XMLStructure {
                        TYPE: string
                        getKeyId(): byte[]
                        getKeyPacket(): byte[]
                        getExternalElements(): java.util.List
                    }
                    interface RetrievalMethod extends javax.xml.crypto.URIReference , javax.xml.crypto.XMLStructure {
                        getTransforms(): java.util.List
                        getURI(): string
                        dereference(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                    }
                    interface X509Data extends javax.xml.crypto.XMLStructure {
                        TYPE: string
                        RAW_X509_CERTIFICATE_TYPE: string
                        getContent(): java.util.List
                    }
                    interface X509IssuerSerial extends javax.xml.crypto.XMLStructure {
                        getIssuerName(): string
                        getSerialNumber(): java.math.BigInteger
                    }
                }
                namespace spec {
                    interface C14NMethodParameterSpec extends javax.xml.crypto.dsig.spec.TransformParameterSpec {
                    }
                    interface DigestMethodParameterSpec extends java.security.spec.AlgorithmParameterSpec {
                    }
                    class ExcC14NParameterSpec implements javax.xml.crypto.dsig.spec.C14NMethodParameterSpec {
                        public static DEFAULT: string
                        public constructor()
                        public constructor(arg0: java.util.List)
                        public getPrefixList(): java.util.List
                        public static class: java.lang.Class<any>
                    }
                    class HMACParameterSpec implements javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec {
                        public constructor(arg0: int)
                        public getOutputLength(): int
                        public static class: java.lang.Class<any>
                    }
                    interface SignatureMethodParameterSpec extends java.security.spec.AlgorithmParameterSpec {
                    }
                    interface TransformParameterSpec extends java.security.spec.AlgorithmParameterSpec {
                    }
                    class XPathFilter2ParameterSpec implements javax.xml.crypto.dsig.spec.TransformParameterSpec {
                        public constructor(arg0: java.util.List)
                        public getXPathList(): java.util.List
                        public static class: java.lang.Class<any>
                    }
                    class XPathFilterParameterSpec implements javax.xml.crypto.dsig.spec.TransformParameterSpec {
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: java.lang.String | string, arg1: java.util.Map)
                        public getXPath(): string
                        public getNamespaceMap(): java.util.Map
                        public static class: java.lang.Class<any>
                    }
                    class XPathType {
                        public constructor(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.XPathType$Filter)
                        public constructor(arg0: java.lang.String | string, arg1: javax.xml.crypto.dsig.spec.XPathType$Filter, arg2: java.util.Map)
                        public getExpression(): string
                        public getFilter(): javax.xml.crypto.dsig.spec.XPathType$Filter
                        public getNamespaceMap(): java.util.Map
                        public static class: java.lang.Class<any>
                    }
                    class XSLTTransformParameterSpec implements javax.xml.crypto.dsig.spec.TransformParameterSpec {
                        public constructor(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda)
                        public getStylesheet(): javax.xml.crypto.XMLStructure
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    class DigesterOutputStream extends java.io.OutputStream {
                        public constructor(arg0: java.security.MessageDigest)
                        public constructor(arg0: java.security.MessageDigest, arg1: boolean)
                        public write(arg0: int): void
                        public write(arg0: byte[], arg1: int, arg2: int): void
                        public getDigestValue(): byte[]
                        public getInputStream(): java.io.InputStream
                        public close(): void
                        public static class: java.lang.Class<any>
                    }
                    class MacOutputStream extends java.io.ByteArrayOutputStream {
                        public constructor(arg0: javax.crypto.Mac)
                        public write(arg0: int): void
                        public write(arg0: byte[], arg1: int, arg2: int): void
                        public static class: java.lang.Class<any>
                    }
                    class SignerOutputStream extends java.io.ByteArrayOutputStream {
                        public constructor(arg0: java.security.Signature)
                        public write(arg0: int): void
                        public write(arg0: byte[], arg1: int, arg2: int): void
                        public static class: java.lang.Class<any>
                    }
                    namespace dom {
                        abstract class AbstractDOMSignatureMethod extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.SignatureMethod {
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class ApacheCanonicalizer extends javax.xml.crypto.dsig.TransformService {
                            protected apacheCanonicalizer: com.sun.org.apache.xml.internal.security.c14n.Canonicalizer
                            protected inclusiveNamespaces: string
                            protected params: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec
                            protected ownerDoc: org.w3c.dom.Document
                            protected transformElem: org.w3c.dom.Element
                            public constructor()
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public isFeatureSupported(arg0: java.lang.String | string): boolean
                            public static class: java.lang.Class<any>
                        }
                        interface ApacheData extends javax.xml.crypto.Data {
                            getXMLSignatureInput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                        }
                        class ApacheNodeSetData implements org.jcp.xml.dsig.internal.dom.ApacheData , javax.xml.crypto.NodeSetData {
                            public constructor(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput)
                            public iterator(): java.util.Iterator
                            public getXMLSignatureInput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                            public static class: java.lang.Class<any>
                        }
                        class ApacheOctetStreamData extends javax.xml.crypto.OctetStreamData implements org.jcp.xml.dsig.internal.dom.ApacheData {
                            public constructor(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput)
                            public getXMLSignatureInput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                            public static class: java.lang.Class<any>
                        }
                        abstract class ApacheTransform extends javax.xml.crypto.dsig.TransformService {
                            protected ownerDoc: org.w3c.dom.Document
                            protected transformElem: org.w3c.dom.Element
                            protected params: javax.xml.crypto.dsig.spec.TransformParameterSpec
                            public constructor()
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public isFeatureSupported(arg0: java.lang.String | string): boolean
                            public static class: java.lang.Class<any>
                        }
                        class DOMBase64Transform extends org.jcp.xml.dsig.internal.dom.ApacheTransform {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public static class: java.lang.Class<any>
                        }
                        class DOMCanonicalXMLC14N11Method extends org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer {
                            public static C14N_11: string
                            public static C14N_11_WITH_COMMENTS: string
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public static class: java.lang.Class<any>
                        }
                        class DOMCanonicalXMLC14NMethod extends org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public static class: java.lang.Class<any>
                        }
                        class DOMCanonicalizationMethod extends org.jcp.xml.dsig.internal.dom.DOMTransform implements javax.xml.crypto.dsig.CanonicalizationMethod {
                            public constructor(arg0: javax.xml.crypto.dsig.TransformService)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class DOMDigestMethod extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.DigestMethod {
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMEnvelopedTransform extends org.jcp.xml.dsig.internal.dom.ApacheTransform {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public static class: java.lang.Class<any>
                        }
                        class DOMExcC14NMethod extends org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public getParamsNSURI(): string
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public static class: java.lang.Class<any>
                        }
                        abstract class DOMHMACSignatureMethod extends org.jcp.xml.dsig.internal.dom.AbstractDOMSignatureMethod {
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public hashCode(): int
                            public equals(arg0: java.lang.Object): boolean
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                        class DOMKeyInfo extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.KeyInfo {
                            public constructor(arg0: java.util.List<javax.xml.crypto.XMLStructure>, arg1: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getId(): string
                            public getContent(): java.util.List
                            public marshal(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public marshal(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMKeyInfoFactory extends javax.xml.crypto.dsig.keyinfo.KeyInfoFactory {
                            public constructor()
                            public newKeyInfo(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.KeyInfo
                            public newKeyInfo(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfo
                            public newKeyName(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyName
                            public newKeyValue(arg0: java.security.PublicKey): javax.xml.crypto.dsig.keyinfo.KeyValue
                            public newPGPData(arg0: byte[]): javax.xml.crypto.dsig.keyinfo.PGPData
                            public newPGPData(arg0: byte[], arg1: byte[], arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
                            public newPGPData(arg0: byte[], arg1: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
                            public newRetrievalMethod(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                            public newRetrievalMethod(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                            public newX509Data(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.X509Data
                            public newX509IssuerSerial(arg0: java.lang.String | string, arg1: java.math.BigInteger): javax.xml.crypto.dsig.keyinfo.X509IssuerSerial
                            public isFeatureSupported(arg0: java.lang.String | string): boolean
                            public getURIDereferencer(): javax.xml.crypto.URIDereferencer
                            public unmarshalKeyInfo(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.keyinfo.KeyInfo
                            public static class: java.lang.Class<any>
                        }
                        class DOMKeyName extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.KeyName {
                            public constructor(arg0: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element)
                            public getName(): string
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class DOMKeyValue extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.KeyValue {
                            public constructor(arg0: java.security.PublicKey)
                            public constructor(arg0: org.w3c.dom.Element)
                            public getPublicKey(): java.security.PublicKey
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMManifest extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.Manifest {
                            public constructor(arg0: java.util.List<javax.xml.crypto.dsig.Reference>, arg1: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getId(): string
                            public getReferences(): java.util.List
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMPGPData extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.PGPData {
                            public constructor(arg0: byte[], arg1: java.util.List<javax.xml.crypto.XMLStructure>)
                            public constructor(arg0: byte[], arg1: byte[], arg2: java.util.List<javax.xml.crypto.XMLStructure>)
                            public constructor(arg0: org.w3c.dom.Element)
                            public getKeyId(): byte[]
                            public getKeyPacket(): byte[]
                            public getExternalElements(): java.util.List
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
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
                        class DOMRetrievalMethod extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.RetrievalMethod , javax.xml.crypto.dom.DOMURIReference {
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.List<javax.xml.crypto.dsig.Transform>)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getURI(): string
                            public getType(): string
                            public getTransforms(): java.util.List
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public getHere(): org.w3c.dom.Node
                            public dereference(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public dereferenceAsXMLStructure(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.XMLStructure
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class DOMSignatureMethod extends org.jcp.xml.dsig.internal.dom.AbstractDOMSignatureMethod {
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public hashCode(): int
                            public equals(arg0: java.lang.Object): boolean
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                        class DOMSignatureProperties extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.SignatureProperties {
                            public constructor(arg0: java.util.List<javax.xml.crypto.dsig.SignatureProperty>, arg1: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext)
                            public getProperties(): java.util.List
                            public getId(): string
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMSignatureProperty extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.SignatureProperty {
                            public constructor(arg0: java.util.List<javax.xml.crypto.XMLStructure>, arg1: java.lang.String | string, arg2: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext)
                            public getContent(): java.util.List
                            public getId(): string
                            public getTarget(): string
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMSignedInfo extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.SignedInfo {
                            public constructor(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List<javax.xml.crypto.dsig.Reference>)
                            public constructor(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List<javax.xml.crypto.dsig.Reference>, arg3: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getCanonicalizationMethod(): javax.xml.crypto.dsig.CanonicalizationMethod
                            public getSignatureMethod(): javax.xml.crypto.dsig.SignatureMethod
                            public getId(): string
                            public getReferences(): java.util.List
                            public getCanonicalizedData(): java.io.InputStream
                            public canonicalize(arg0: javax.xml.crypto.XMLCryptoContext, arg1: java.io.ByteArrayOutputStream): void
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class DOMStructure implements javax.xml.crypto.XMLStructure {
                            public constructor()
                            public isFeatureSupported(arg0: java.lang.String | string): boolean
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                        abstract class DOMStructure$$Lambda implements javax.xml.crypto.XMLStructure {
                            public constructor()
                        }
                        class DOMSubTreeData implements javax.xml.crypto.NodeSetData {
                            public constructor(arg0: org.w3c.dom.Node, arg1: boolean)
                            public iterator(): java.util.Iterator
                            public getRoot(): org.w3c.dom.Node
                            public excludeComments(): boolean
                            public static class: java.lang.Class<any>
                        }
                        class DOMTransform extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.Transform {
                            protected spi: javax.xml.crypto.dsig.TransformService
                            public constructor(arg0: javax.xml.crypto.dsig.TransformService)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public getAlgorithm(): string
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMURIDereferencer implements javax.xml.crypto.URIDereferencer {
                            public dereference(arg0: javax.xml.crypto.URIReference, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public static class: java.lang.Class<any>
                        }
                        class DOMURIDereferencer$$Lambda implements javax.xml.crypto.URIDereferencer {
                            public (arg0: javax.xml.crypto.URIReference, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                        }
                        class DOMUtils {
                            public static getOwnerDocument(arg0: org.w3c.dom.Node): org.w3c.dom.Document
                            public static createElement(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.w3c.dom.Element
                            public static setAttribute(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public static setAttributeID(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public static getFirstChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getFirstChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                            public static getLastChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getNextSiblingElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getNextSiblingElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                            public static getAttributeValue(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): string
                            public static nodeSet(arg0: org.w3c.dom.NodeList): java.util.Set<org.w3c.dom.Node>
                            public static getNSPrefix(arg0: javax.xml.crypto.XMLCryptoContext, arg1: java.lang.String | string): string
                            public static getSignaturePrefix(arg0: javax.xml.crypto.XMLCryptoContext): string
                            public static removeAllChildren(arg0: org.w3c.dom.Node): void
                            public static nodesEqual(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): boolean
                            public static appendChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                            public static paramsEqual(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.spec.AlgorithmParameterSpec): boolean
                            public static class: java.lang.Class<any>
                        }
                        class DOMX509Data extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.X509Data {
                            public constructor(arg0: java.util.List<any>)
                            public constructor(arg0: org.w3c.dom.Element)
                            public getContent(): java.util.List
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMX509IssuerSerial extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.X509IssuerSerial {
                            public constructor(arg0: java.lang.String | string, arg1: java.math.BigInteger)
                            public constructor(arg0: org.w3c.dom.Element)
                            public getIssuerName(): string
                            public getSerialNumber(): java.math.BigInteger
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMXMLObject extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.XMLObject {
                            public constructor(arg0: java.util.List<javax.xml.crypto.XMLStructure>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getContent(): java.util.List
                            public getId(): string
                            public getMimeType(): string
                            public getEncoding(): string
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                        class DOMXMLSignature extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.XMLSignature {
                            public constructor(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg2: java.util.List<javax.xml.crypto.dsig.XMLObject>, arg3: java.lang.String | string, arg4: java.lang.String | string)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getId(): string
                            public getKeyInfo(): javax.xml.crypto.dsig.keyinfo.KeyInfo
                            public getSignedInfo(): javax.xml.crypto.dsig.SignedInfo
                            public getObjects(): java.util.List
                            public getSignatureValue(): javax.xml.crypto.dsig.XMLSignature$SignatureValue
                            public getKeySelectorResult(): javax.xml.crypto.KeySelectorResult
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public marshal(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: javax.xml.crypto.dom.DOMCryptoContext): void
                            public validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
                            public sign(arg0: javax.xml.crypto.dsig.XMLSignContext): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
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
                        class DOMXPathFilter2Transform extends org.jcp.xml.dsig.internal.dom.ApacheTransform {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                        class DOMXPathTransform extends org.jcp.xml.dsig.internal.dom.ApacheTransform {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                        class DOMXSLTTransform extends org.jcp.xml.dsig.internal.dom.ApacheTransform {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                        class Policy {
                            public static restrictAlg(arg0: java.lang.String | string): boolean
                            public static restrictNumTransforms(arg0: int): boolean
                            public static restrictNumReferences(arg0: int): boolean
                            public static restrictReferenceUriScheme(arg0: java.lang.String | string): boolean
                            public static restrictKey(arg0: java.lang.String | string, arg1: int): boolean
                            public static restrictDuplicateIds(): boolean
                            public static restrictRetrievalMethodLoops(): boolean
                            public static disabledAlgs(): java.util.Set<java.net.URI>
                            public static maxTransforms(): int
                            public static maxReferences(): int
                            public static disabledReferenceUriSchemes(): java.util.Set<java.lang.String>
                            public static minKeySize(arg0: java.lang.String | string): int
                            public static class: java.lang.Class<any>
                        }
                        class Utils {
                            public static readBytesFromStream(arg0: java.io.InputStream): byte[]
                            public static parseIdFromSameDocumentURI(arg0: java.lang.String | string): string
                            public static sameDocumentURI(arg0: java.lang.String | string): boolean
                            public static class: java.lang.Class<any>
                        }
                        class XMLDSigRI extends java.security.Provider {
                            public constructor()
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
