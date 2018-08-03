declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace tree {
                interface TypeTree extends sun.reflect.generics.tree.Tree {
                    accept(arg0: sun.reflect.generics.visitor.TypeTreeVisitor<any>): void
                }
                interface TypeTree$$Lambda extends sun.reflect.generics.tree.Tree {
                    (arg0: sun.reflect.generics.visitor.TypeTreeVisitor<any>): void
                }
            }
        }
    }
}