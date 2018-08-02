declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace tree {
                class MethodTypeSignature implements sun.reflect.generics.tree.Signature {
                    public static make(arg0: sun.reflect.generics.tree.FormalTypeParameter[], arg1: sun.reflect.generics.tree.TypeSignature[], arg2: sun.reflect.generics.tree.ReturnType, arg3: sun.reflect.generics.tree.FieldTypeSignature[]): sun.reflect.generics.tree.MethodTypeSignature
                    public getFormalTypeParameters(): sun.reflect.generics.tree.FormalTypeParameter[]
                    public getParameterTypes(): sun.reflect.generics.tree.TypeSignature[]
                    public getReturnType(): sun.reflect.generics.tree.ReturnType
                    public getExceptionTypes(): sun.reflect.generics.tree.FieldTypeSignature[]
                    public accept(arg0: sun.reflect.generics.visitor.Visitor<any>): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}