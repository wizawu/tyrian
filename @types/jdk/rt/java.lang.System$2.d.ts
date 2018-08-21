declare namespace java {
    namespace lang {
        class System$2 implements sun.misc.JavaLangAccess {
            public getConstantPool(arg0: java.lang.Class<any>): sun.reflect.ConstantPool
            public casAnnotationType(arg0: java.lang.Class<any>, arg1: sun.reflect.annotation.AnnotationType, arg2: sun.reflect.annotation.AnnotationType): boolean
            public getAnnotationType(arg0: java.lang.Class<any>): sun.reflect.annotation.AnnotationType
            public getDeclaredAnnotationMap(arg0: java.lang.Class<any>): java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>
            public getRawClassAnnotations(arg0: java.lang.Class<any>): byte[]
            public getRawClassTypeAnnotations(arg0: java.lang.Class<any>): byte[]
            public getRawExecutableTypeAnnotations(arg0: java.lang.reflect.Executable): byte[]
            public getEnumConstantsShared<E extends java.lang.Enum<E>>(arg0: java.lang.Class<E>): E[]
            public blockedOn<E extends java.lang.Enum<E>>(arg0: java.lang.Thread, arg1: sun.nio.ch.Interruptible | sun.nio.ch.Interruptible$$Lambda): void
            public registerShutdownHook<E extends java.lang.Enum<E>>(arg0: int, arg1: boolean, arg2: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public getStackTraceDepth<E extends java.lang.Enum<E>>(arg0: java.lang.Throwable): int
            public getStackTraceElement<E extends java.lang.Enum<E>>(arg0: java.lang.Throwable, arg1: int): java.lang.StackTraceElement
            public newStringUnsafe<E extends java.lang.Enum<E>>(arg0: char[]): string
            public newThreadWithAcc<E extends java.lang.Enum<E>>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.security.AccessControlContext): java.lang.Thread
            public invokeFinalize<E extends java.lang.Enum<E>>(arg0: java.lang.Object): void
            public static class: java.lang.Class<any>
        }
    }
}