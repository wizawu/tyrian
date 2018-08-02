declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace visitor {
                interface Visitor<T> extends sun.reflect.generics.visitor.TypeTreeVisitor<T> {
                    visitClassSignature(arg0: sun.reflect.generics.tree.ClassSignature): void
                    visitMethodTypeSignature(arg0: sun.reflect.generics.tree.MethodTypeSignature): void
                }
            }
        }
    }
}