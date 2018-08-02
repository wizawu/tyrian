declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace tree {
class ClassSignature implements sun.reflect.generics.tree.Signature {
    public static make(arg0: sun.reflect.generics.tree.FormalTypeParameter[], arg1: sun.reflect.generics.tree.ClassTypeSignature, arg2: sun.reflect.generics.tree.ClassTypeSignature[]): sun.reflect.generics.tree.ClassSignature
    public getFormalTypeParameters(): sun.reflect.generics.tree.FormalTypeParameter[]
    public getSuperclass(): sun.reflect.generics.tree.ClassTypeSignature
    public getSuperInterfaces(): sun.reflect.generics.tree.ClassTypeSignature[]
    public accept(arg0: sun.reflect.generics.visitor.Visitor<any>): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}