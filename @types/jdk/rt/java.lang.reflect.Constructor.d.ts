declare namespace java {
    namespace lang {
        namespace reflect {
            class Constructor<T> extends java.lang.reflect.Executable {
                public getDeclaringClass(): java.lang.Class<T>
                public getName(): string
                public getModifiers(): int
                public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.reflect.Constructor<T>>[]
                public getParameterTypes(): java.lang.Class<any>[]
                public getParameterCount(): int
                public getGenericParameterTypes(): java.lang.reflect.Type[]
                public getExceptionTypes(): java.lang.Class<any>[]
                public getGenericExceptionTypes(): java.lang.reflect.Type[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public toGenericString(): string
                public newInstance(...arg0: java.lang.Object[]): T
                public isVarArgs(): boolean
                public isSynthetic(): boolean
                public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                public getParameterAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[][]
                public getAnnotatedReturnType<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
                public getAnnotatedReceiverType<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
                public static class: java.lang.Class<any>
            }
        }
    }
}