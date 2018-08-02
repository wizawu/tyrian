declare namespace java {
    namespace lang {
        namespace reflect {
            class Field extends java.lang.reflect.AccessibleObject implements java.lang.reflect.Member {
                public getDeclaringClass(): java.lang.Class<any>
                public getName(): string
                public getModifiers(): int
                public isEnumConstant(): boolean
                public isSynthetic(): boolean
                public getType(): java.lang.Class<any>
                public getGenericType(): java.lang.reflect.Type
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public toGenericString(): string
                public get(arg0: java.lang.Object): java.lang.Object
                public getBoolean(arg0: java.lang.Object): boolean
                public getByte(arg0: java.lang.Object): byte
                public getChar(arg0: java.lang.Object): char
                public getShort(arg0: java.lang.Object): short
                public getInt(arg0: java.lang.Object): int
                public getLong(arg0: java.lang.Object): long
                public getFloat(arg0: java.lang.Object): float
                public getDouble(arg0: java.lang.Object): double
                public set(arg0: java.lang.Object, arg1: java.lang.Object): void
                public setBoolean(arg0: java.lang.Object, arg1: boolean): void
                public setByte(arg0: java.lang.Object, arg1: byte): void
                public setChar(arg0: java.lang.Object, arg1: char): void
                public setShort(arg0: java.lang.Object, arg1: short): void
                public setInt(arg0: java.lang.Object, arg1: int): void
                public setLong(arg0: java.lang.Object, arg1: long): void
                public setFloat(arg0: java.lang.Object, arg1: float): void
                public setDouble(arg0: java.lang.Object, arg1: double): void
                public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
                public getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                public getAnnotatedType<T extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
                public static class: java.lang.Class<any>
            }
        }
    }
}