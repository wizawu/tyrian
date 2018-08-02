declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace visitor {
                interface TypeTreeVisitor<T> {
                    getResult(): T
                    visitFormalTypeParameter(arg0: sun.reflect.generics.tree.FormalTypeParameter): void
                    visitClassTypeSignature(arg0: sun.reflect.generics.tree.ClassTypeSignature): void
                    visitArrayTypeSignature(arg0: sun.reflect.generics.tree.ArrayTypeSignature): void
                    visitTypeVariableSignature(arg0: sun.reflect.generics.tree.TypeVariableSignature): void
                    visitWildcard(arg0: sun.reflect.generics.tree.Wildcard): void
                    visitSimpleClassTypeSignature(arg0: sun.reflect.generics.tree.SimpleClassTypeSignature): void
                    visitBottomSignature(arg0: sun.reflect.generics.tree.BottomSignature): void
                    visitByteSignature(arg0: sun.reflect.generics.tree.ByteSignature): void
                    visitBooleanSignature(arg0: sun.reflect.generics.tree.BooleanSignature): void
                    visitShortSignature(arg0: sun.reflect.generics.tree.ShortSignature): void
                    visitCharSignature(arg0: sun.reflect.generics.tree.CharSignature): void
                    visitIntSignature(arg0: sun.reflect.generics.tree.IntSignature): void
                    visitLongSignature(arg0: sun.reflect.generics.tree.LongSignature): void
                    visitFloatSignature(arg0: sun.reflect.generics.tree.FloatSignature): void
                    visitDoubleSignature(arg0: sun.reflect.generics.tree.DoubleSignature): void
                    visitVoidDescriptor(arg0: sun.reflect.generics.tree.VoidDescriptor): void
                }
            }
        }
    }
}