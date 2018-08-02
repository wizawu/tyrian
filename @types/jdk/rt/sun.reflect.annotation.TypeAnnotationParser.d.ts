declare namespace sun {
    namespace reflect {
        namespace annotation {
class TypeAnnotationParser {
    public constructor()
    public static buildAnnotatedType(arg0: byte[], arg1: sun.reflect.ConstantPool, arg2: java.lang.reflect.AnnotatedElement, arg3: java.lang.Class<any>, arg4: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg5: sun.reflect.annotation.TypeAnnotation$TypeAnnotationTarget): java.lang.reflect.AnnotatedType
    public static buildAnnotatedTypes(arg0: byte[], arg1: sun.reflect.ConstantPool, arg2: java.lang.reflect.AnnotatedElement, arg3: java.lang.Class<any>, arg4: java.lang.reflect.Type[], arg5: sun.reflect.annotation.TypeAnnotation$TypeAnnotationTarget): java.lang.reflect.AnnotatedType[]
    public static buildAnnotatedSuperclass(arg0: byte[], arg1: sun.reflect.ConstantPool, arg2: java.lang.Class<any>): java.lang.reflect.AnnotatedType
    public static buildAnnotatedInterfaces(arg0: byte[], arg1: sun.reflect.ConstantPool, arg2: java.lang.Class<any>): java.lang.reflect.AnnotatedType[]
    public static parseTypeVariableAnnotations<D extends java.lang.reflect.GenericDeclaration>(arg0: D, arg1: int): java.lang.annotation.Annotation[]
    public static parseAnnotatedBounds<D extends java.lang.reflect.GenericDeclaration>(arg0: java.lang.reflect.Type[], arg1: D, arg2: int): java.lang.reflect.AnnotatedType[]
    public static class: java.lang.Class<any>
}

        }
    }
}