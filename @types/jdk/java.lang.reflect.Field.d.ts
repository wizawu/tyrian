declare namespace java {
  namespace lang {
    namespace reflect {
      class Field extends java.lang.reflect.AccessibleObject implements java.lang.reflect.Member {
        constructor(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: java.lang.String | string,
          arg6: number[] | java.lang.Byte[]
        )
        copy(): java.lang.reflect.Field
        public setAccessible(arg0: boolean | java.lang.Boolean): void
        checkCanSetAccessible(arg0: java.lang.Class<unknown>): void
        public getDeclaringClass(): java.lang.Class<unknown>
        public getName(): java.lang.String
        public getModifiers(): number
        public isEnumConstant(): boolean
        public isSynthetic(): boolean
        public getType(): java.lang.Class<unknown>
        public getGenericType(): java.lang.reflect.Type
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        toShortString(): java.lang.String
        public toGenericString(): java.lang.String
        public get(arg0: java.lang.Object | any): java.lang.Object
        public getBoolean(arg0: java.lang.Object | any): boolean
        public getByte(arg0: java.lang.Object | any): number
        public getChar(arg0: java.lang.Object | any): string
        public getShort(arg0: java.lang.Object | any): number
        public getInt(arg0: java.lang.Object | any): number
        public getLong(arg0: java.lang.Object | any): number
        public getFloat(arg0: java.lang.Object | any): number
        public getDouble(arg0: java.lang.Object | any): number
        public set(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
        public setBoolean(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean): void
        public setByte(arg0: java.lang.Object | any, arg1: number | java.lang.Byte): void
        public setChar(arg0: java.lang.Object | any, arg1: string | java.lang.Character): void
        public setShort(arg0: java.lang.Object | any, arg1: number | java.lang.Short): void
        public setInt(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): void
        public setLong(arg0: java.lang.Object | any, arg1: number | java.lang.Long): void
        public setFloat(arg0: java.lang.Object | any, arg1: number | java.lang.Float): void
        public setDouble(arg0: java.lang.Object | any, arg1: number | java.lang.Double): void
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
