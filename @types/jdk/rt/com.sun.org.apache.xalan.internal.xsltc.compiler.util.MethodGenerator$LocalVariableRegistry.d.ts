declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
                                    class MethodGenerator$LocalVariableRegistry {
                                        protected _variables: java.util.ArrayList
                                        protected _nameToLVGMap: java.util.HashMap
                                        protected constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator)
                                        protected registerLocalVariable(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableGen): void
                                        protected lookupRegisteredLocalVariable(arg0: int, arg1: int): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                        protected registerByName(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableGen): void
                                        protected removeByNameTracking(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableGen): void
                                        protected lookUpByName(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                        protected getLocals(arg0: boolean): com.sun.org.apache.bcel.internal.generic.LocalVariableGen[]
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