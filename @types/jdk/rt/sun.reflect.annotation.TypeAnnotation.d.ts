declare namespace sun {
    namespace reflect {
        namespace annotation {
            class TypeAnnotation {
                public constructor(arg0: sun.reflect.annotation.TypeAnnotation$TypeAnnotationTargetInfo, arg1: sun.reflect.annotation.TypeAnnotation$LocationInfo, arg2: java.lang.annotation.Annotation, arg3: java.lang.reflect.AnnotatedElement)
                public getTargetInfo(): sun.reflect.annotation.TypeAnnotation$TypeAnnotationTargetInfo
                public getAnnotation(): java.lang.annotation.Annotation
                public getBaseDeclaration(): java.lang.reflect.AnnotatedElement
                public getLocationInfo(): sun.reflect.annotation.TypeAnnotation$LocationInfo
                public static filter(arg0: sun.reflect.annotation.TypeAnnotation[], arg1: sun.reflect.annotation.TypeAnnotation$TypeAnnotationTarget): java.util.List<sun.reflect.annotation.TypeAnnotation>
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}