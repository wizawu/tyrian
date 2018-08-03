declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                namespace xs {
                                    abstract class TypeValidator {
                                        public static readonly LESS_THAN: short
                                        public static readonly EQUAL: short
                                        public static readonly GREATER_THAN: short
                                        public static readonly INDETERMINATE: short
                                        public constructor()
                                        public abstract getAllowedFacets(): short
                                        public abstract getActualValue(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext): java.lang.Object
                                        public checkExtraRules(arg0: java.lang.Object, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext): void
                                        public isIdentical(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                                        public getDataLength(arg0: java.lang.Object): int
                                        public getTotalDigits(arg0: java.lang.Object): int
                                        public getFractionDigits(arg0: java.lang.Object): int
                                        public static isDigit(arg0: char): boolean
                                        public static getDigit(arg0: char): int
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