declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace reflectiveObjects {
                class TypeVariableImpl<D extends java.lang.reflect.GenericDeclaration> extends sun.reflect.generics.reflectiveObjects.LazyReflectiveObjectGenerator implements java.lang.reflect.TypeVariable<D> {
                    public static make<T extends java.lang.reflect.GenericDeclaration>(arg0: T, arg1: java.lang.String | string, arg2: sun.reflect.generics.tree.FieldTypeSignature[], arg3: sun.reflect.generics.factory.GenericsFactory): sun.reflect.generics.reflectiveObjects.TypeVariableImpl<T>
                    public getBounds(): java.lang.reflect.Type[]
                    public getGenericDeclaration(): D
                    public getName(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                    public getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                    public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
                    public getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
                    public getAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                    public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                    public getAnnotatedBounds<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}