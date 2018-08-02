declare namespace java {
    namespace lang {
class Access implements sun.misc.JavaLangAccess {
    public blockedOn(arg0: java.lang.Thread | java.lang.Thread$$Lambda, arg1: sun.nio.ch.Interruptible | sun.nio.ch.Interruptible$$Lambda): void
    public getAnnotationType(arg0: java.lang.Class<any>): sun.reflect.annotation.AnnotationType
    public getConstantPool(arg0: java.lang.Class<any>): sun.reflect.ConstantPool
    public static getConstantPool(arg0: java.lang.Object): sun.reflect.ConstantPool
    public getEnumConstantsShared<E extends java.lang.Enum<E>>(arg0: java.lang.Class<E>): E[]
    public registerShutdownHook<E extends java.lang.Enum<E>>(arg0: int, arg1: boolean, arg2: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public setAnnotationType<E extends java.lang.Enum<E>>(arg0: java.lang.Class<any>, arg1: sun.reflect.annotation.AnnotationType): void
    public casAnnotationType<E extends java.lang.Enum<E>>(arg0: java.lang.Class<any>, arg1: sun.reflect.annotation.AnnotationType, arg2: sun.reflect.annotation.AnnotationType): boolean
    public getRawClassAnnotations<E extends java.lang.Enum<E>>(arg0: java.lang.Class<any>): byte[]
    public getStackTraceDepth<E extends java.lang.Enum<E>>(arg0: java.lang.Throwable): int
    public getStackTraceElement<E extends java.lang.Enum<E>>(arg0: java.lang.Throwable, arg1: int): java.lang.StackTraceElement
    public newThreadWithAcc<E extends java.lang.Enum<E>>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.security.AccessControlContext): java.lang.Thread
    public getDirectDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<any>, arg1: java.lang.Class<A>): A
    public getDeclaredAnnotationMap<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<any>): java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>
    public getRawClassTypeAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<any>): byte[]
    public getRawExecutableTypeAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.reflect.Executable): byte[]
    public newStringUnsafe<A extends java.lang.annotation.Annotation>(arg0: char[]): string
    public invokeFinalize<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

    }
}