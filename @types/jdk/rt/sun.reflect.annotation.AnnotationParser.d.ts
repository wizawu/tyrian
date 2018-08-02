declare namespace sun {
    namespace reflect {
        namespace annotation {
            class AnnotationParser {
                public constructor()
                public static parseAnnotations(arg0: byte[], arg1: sun.reflect.ConstantPool, arg2: java.lang.Class<any>): java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>
                public static parseParameterAnnotations(arg0: byte[], arg1: sun.reflect.ConstantPool, arg2: java.lang.Class<any>): java.lang.annotation.Annotation[][]
                public static annotationForMap(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.util.Map<java.lang.String, java.lang.Object>): java.lang.annotation.Annotation
                public static parseMemberValue(arg0: java.lang.Class<any>, arg1: java.nio.ByteBuffer, arg2: sun.reflect.ConstantPool, arg3: java.lang.Class<any>): java.lang.Object
                public static toArray(arg0: java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>): java.lang.annotation.Annotation[]
                public static class: java.lang.Class<any>
            }
        }
    }
}