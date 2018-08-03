declare namespace java {
    namespace lang {
        namespace reflect {
            abstract class Executable extends java.lang.reflect.AccessibleObject implements java.lang.reflect.Member , java.lang.reflect.GenericDeclaration {
                public abstract getDeclaringClass(): java.lang.Class<any>
                public abstract getName(): string
                public abstract getModifiers(): int
                public abstract getTypeParameters(): java.lang.reflect.TypeVariable<any>[]
                public abstract getParameterTypes(): java.lang.Class<any>[]
                public getParameterCount(): int
                public getGenericParameterTypes(): java.lang.reflect.Type[]
                public getParameters(): java.lang.reflect.Parameter[]
                public abstract getExceptionTypes(): java.lang.Class<any>[]
                public getGenericExceptionTypes(): java.lang.reflect.Type[]
                public abstract toGenericString(): string
                public isVarArgs(): boolean
                public isSynthetic(): boolean
                public abstract getParameterAnnotations(): java.lang.annotation.Annotation[][]
                public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
                public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                public abstract getAnnotatedReturnType<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
                public getAnnotatedReceiverType<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
                public getAnnotatedParameterTypes<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType[]
                public getAnnotatedExceptionTypes<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType[]
                public static class: java.lang.Class<any>
            }
        }
    }
}