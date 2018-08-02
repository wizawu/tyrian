declare namespace sun {
    namespace reflect {
        namespace annotation {
            class AnnotationSupport {
                public constructor()
                public static getDirectlyAndIndirectlyPresent<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>, arg1: java.lang.Class<A>): A[]
                public static getAssociatedAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>, arg1: java.lang.Class<any>, arg2: java.lang.Class<A>): A[]
                public static class: java.lang.Class<any>
            }
        }
    }
}