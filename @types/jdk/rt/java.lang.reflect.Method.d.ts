declare namespace java {
    namespace lang {
        namespace reflect {
            class Method extends java.lang.reflect.Executable {
                public getDeclaringClass(): java.lang.Class<any>
                public getName(): string
                public getModifiers(): int
                public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.reflect.Method>[]
                public getReturnType(): java.lang.Class<any>
                public getGenericReturnType(): java.lang.reflect.Type
                public getParameterTypes(): java.lang.Class<any>[]
                public getParameterCount(): int
                public getGenericParameterTypes(): java.lang.reflect.Type[]
                public getExceptionTypes(): java.lang.Class<any>[]
                public getGenericExceptionTypes(): java.lang.reflect.Type[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public toGenericString(): string
                public invoke(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                public isBridge(): boolean
                public isVarArgs(): boolean
                public isSynthetic(): boolean
                public isDefault(): boolean
                public getDefaultValue(): java.lang.Object
                public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                public getParameterAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[][]
                public getAnnotatedReturnType<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
                public static class: java.lang.Class<any>
            }
        }
    }
}