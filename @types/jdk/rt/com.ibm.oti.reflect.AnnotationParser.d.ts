declare namespace com {
    namespace ibm {
        namespace oti {
            namespace reflect {
                class AnnotationParser {
                    public constructor()
                    public static parseAnnotations(arg0: java.lang.reflect.Field): java.lang.annotation.Annotation[]
                    public static parseAnnotations(arg0: java.lang.reflect.Constructor): java.lang.annotation.Annotation[]
                    public static parseAnnotations(arg0: java.lang.reflect.Method): java.lang.annotation.Annotation[]
                    public static parseParameterAnnotations(arg0: java.lang.reflect.Constructor): java.lang.annotation.Annotation[][]
                    public static parseParameterAnnotations(arg0: java.lang.reflect.Method): java.lang.annotation.Annotation[][]
                    public static getAnnotationsData(arg0: java.lang.Class): byte[]
                    public static parseDefaultValue(arg0: java.lang.reflect.Method): java.lang.Object
                    public static parseAnnotations(arg0: byte[], arg1: java.lang.Class): java.lang.annotation.Annotation[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}