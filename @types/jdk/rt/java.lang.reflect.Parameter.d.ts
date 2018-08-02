declare namespace java {
    namespace lang {
        namespace reflect {
class Parameter implements java.lang.reflect.AnnotatedElement {
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public isNamePresent(): boolean
    public toString(): string
    public getDeclaringExecutable(): java.lang.reflect.Executable
    public getModifiers(): int
    public getName(): string
    public getParameterizedType(): java.lang.reflect.Type
    public getType(): java.lang.Class<any>
    public getAnnotatedType(): java.lang.reflect.AnnotatedType
    public isImplicit(): boolean
    public isSynthetic(): boolean
    public isVarArgs(): boolean
    public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
    public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
    public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
    public getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
    public getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
    public getAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
    public static class: java.lang.Class<any>
}

        }
    }
}