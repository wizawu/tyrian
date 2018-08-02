declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace algorithms {
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
                            }
                        }
                    }
                }
            }
        }
    }
}