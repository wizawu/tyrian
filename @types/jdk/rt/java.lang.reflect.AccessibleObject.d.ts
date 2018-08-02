declare namespace java {
    namespace lang {
        namespace reflect {
class AccessibleObject implements java.lang.reflect.AnnotatedElement {
    public static setAccessible(arg0: java.lang.reflect.AccessibleObject[], arg1: boolean): void
    public setAccessible(arg0: boolean): void
    public isAccessible(): boolean
    protected constructor()
    public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
    public isAnnotationPresent<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
    public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
    public getAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
    public getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
    public getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
    public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
    public static class: java.lang.Class<any>
}

        }
    }
}