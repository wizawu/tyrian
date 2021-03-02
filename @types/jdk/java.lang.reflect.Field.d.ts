declare namespace java {
  namespace lang {
    namespace reflect {

      class Field extends java.lang.reflect.AccessibleObject implements java.lang.reflect.Member {
        constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: java.lang.Class<unknown>, arg3: int, arg4: int, arg5: java.lang.String, arg6: byte[])
        copy(): java.lang.reflect.Field
        public setAccessible(arg0: boolean): void
        checkCanSetAccessible(arg0: java.lang.Class<unknown>): void
        public getDeclaringClass(): java.lang.Class<unknown>
        public getName(): java.lang.String
        public getModifiers(): int
        public isEnumConstant(): boolean
        public isSynthetic(): boolean
        public getType(): java.lang.Class<unknown>
        public getGenericType(): java.lang.reflect.Type
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        toShortString(): java.lang.String
        public toGenericString(): java.lang.String
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
        getRoot(): java.lang.reflect.Field
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        public getAnnotatedType(): java.lang.reflect.AnnotatedType
        getRoot(): java.lang.reflect.AccessibleObject
      }

    }
  }
}
