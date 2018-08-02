declare namespace sun {
    namespace reflect {
        namespace annotation {
            class AnnotationType {
                public static getInstance(arg0: java.lang.Class<java.lang.annotation.Annotation>): sun.reflect.annotation.AnnotationType
                public static invocationHandlerReturnType(arg0: java.lang.Class<any>): java.lang.Class<any>
                public memberTypes(): java.util.Map<java.lang.String, java.lang.Class<any>>
                public members(): java.util.Map<java.lang.String, java.lang.reflect.Method>
                public memberDefaults(): java.util.Map<java.lang.String, java.lang.Object>
                public retention(): java.lang.annotation.RetentionPolicy
                public isInherited(): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}