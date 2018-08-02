declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace visitor {
                class Reifier implements sun.reflect.generics.visitor.TypeTreeVisitor<java.lang.reflect.Type> {
                    public static make(arg0: sun.reflect.generics.factory.GenericsFactory): sun.reflect.generics.visitor.Reifier
                    public getResult(): java.lang.reflect.Type
                    public visitFormalTypeParameter(arg0: sun.reflect.generics.tree.FormalTypeParameter): void
                    public visitClassTypeSignature(arg0: sun.reflect.generics.tree.ClassTypeSignature): void
                    public visitArrayTypeSignature(arg0: sun.reflect.generics.tree.ArrayTypeSignature): void
                    public visitTypeVariableSignature(arg0: sun.reflect.generics.tree.TypeVariableSignature): void
                    public visitWildcard(arg0: sun.reflect.generics.tree.Wildcard): void
                    public visitSimpleClassTypeSignature(arg0: sun.reflect.generics.tree.SimpleClassTypeSignature): void
                    public visitBottomSignature(arg0: sun.reflect.generics.tree.BottomSignature): void
                    public visitByteSignature(arg0: sun.reflect.generics.tree.ByteSignature): void
                    public visitBooleanSignature(arg0: sun.reflect.generics.tree.BooleanSignature): void
                    public visitShortSignature(arg0: sun.reflect.generics.tree.ShortSignature): void
                    public visitCharSignature(arg0: sun.reflect.generics.tree.CharSignature): void
                    public visitIntSignature(arg0: sun.reflect.generics.tree.IntSignature): void
                    public visitLongSignature(arg0: sun.reflect.generics.tree.LongSignature): void
                    public visitFloatSignature(arg0: sun.reflect.generics.tree.FloatSignature): void
                    public visitDoubleSignature(arg0: sun.reflect.generics.tree.DoubleSignature): void
                    public visitVoidDescriptor(arg0: sun.reflect.generics.tree.VoidDescriptor): void
                    public getResult(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}