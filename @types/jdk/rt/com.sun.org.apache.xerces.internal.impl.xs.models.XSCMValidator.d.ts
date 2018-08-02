declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace models {
                                    interface XSCMValidator {
                                        FIRST_ERROR: short
                                        SUBSEQUENT_ERROR: short
                                        startContentModel(): int[]
                                        oneTransition(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int[], arg2: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): java.lang.Object
                                        endContentModel(arg0: int[]): boolean
                                        checkUniqueParticleAttribution(arg0: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): boolean
                                        whatCanGoHere(arg0: int[]): java.util.Vector
                                        checkMinMaxBounds(): java.util.ArrayList
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