declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace scope {
                abstract class AbstractScope<D extends java.lang.reflect.GenericDeclaration> implements sun.reflect.generics.scope.Scope {
                    protected constructor(arg0: D)
                    protected getRecvr(): D
                    protected computeEnclosingScope(): sun.reflect.generics.scope.Scope
                    protected getEnclosingScope(): sun.reflect.generics.scope.Scope
                    public lookup(arg0: java.lang.String | string): java.lang.reflect.TypeVariable<any>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}