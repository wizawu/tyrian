declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace validation {
class ValidationManager {
    protected fVSs: java.util.Vector
    protected fGrammarFound: boolean
    protected fCachedDTD: boolean
    public constructor()
    public addValidationState(arg0: com.sun.org.apache.xerces.internal.impl.validation.ValidationState): void
    public setEntityState(arg0: com.sun.org.apache.xerces.internal.impl.validation.EntityState): void
    public setGrammarFound(arg0: boolean): void
    public isGrammarFound(): boolean
    public setCachedDTD(arg0: boolean): void
    public isCachedDTD(): boolean
    public reset(): void
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