declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        abstract class AbstractWrapperBeanGenerator<T, C, M, A extends java.lang.Comparable> {
                            protected constructor(arg0: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, any, M>, arg1: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, any, M>, arg2: com.sun.xml.internal.ws.model.AbstractWrapperBeanGenerator$BeanMemberFactory<T, A> | com.sun.xml.internal.ws.model.AbstractWrapperBeanGenerator$BeanMemberFactory$$Lambda<T, A>)
                            protected getSafeType(arg0: T): T
                            protected getHolderValueType(arg0: T): T
                            protected isVoidType(arg0: T): boolean
                            public collectRequestBeanMembers(arg0: M): java.util.List<A>
                            public collectResponseBeanMembers(arg0: M): java.util.List<A>
                            public collectExceptionBeanMembers(arg0: C): java.util.Collection<A>
                            public collectExceptionBeanMembers(arg0: C, arg1: boolean): java.util.Collection<A>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}