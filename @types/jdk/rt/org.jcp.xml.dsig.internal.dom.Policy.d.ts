declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
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

                    }
                }
            }
        }
    }
}