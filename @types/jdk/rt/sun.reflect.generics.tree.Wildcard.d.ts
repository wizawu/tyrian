declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace tree {
                class Wildcard implements sun.reflect.generics.tree.TypeArgument {
                    public static make(arg0: sun.reflect.generics.tree.FieldTypeSignature[], arg1: sun.reflect.generics.tree.FieldTypeSignature[]): sun.reflect.generics.tree.Wildcard
                    public getUpperBounds(): sun.reflect.generics.tree.FieldTypeSignature[]
                    public getLowerBounds(): sun.reflect.generics.tree.FieldTypeSignature[]
                    public accept(arg0: sun.reflect.generics.visitor.TypeTreeVisitor<any>): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}