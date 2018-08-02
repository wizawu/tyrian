declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace tree {
                class FormalTypeParameter implements sun.reflect.generics.tree.TypeTree {
                    public static make(arg0: java.lang.String | string, arg1: sun.reflect.generics.tree.FieldTypeSignature[]): sun.reflect.generics.tree.FormalTypeParameter
                    public getBounds(): sun.reflect.generics.tree.FieldTypeSignature[]
                    public getName(): string
                    public accept(arg0: sun.reflect.generics.visitor.TypeTreeVisitor<any>): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}