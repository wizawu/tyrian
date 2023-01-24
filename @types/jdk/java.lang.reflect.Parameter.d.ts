declare namespace java {
  namespace lang {
    namespace reflect {
      class Parameter implements java.lang.reflect.AnnotatedElement {
        constructor(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: java.lang.reflect.Executable,
          arg3: number | java.lang.Integer
        )
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public isNamePresent(): boolean
        public toString(): java.lang.String
        public getDeclaringExecutable(): java.lang.reflect.Executable
        public getModifiers(): number
        public getName(): java.lang.String
        getRealName(): java.lang.String
        public getParameterizedType(): java.lang.reflect.Type
        public getType(): java.lang.Class<unknown>
        public getAnnotatedType(): java.lang.reflect.AnnotatedType
        public isImplicit(): boolean
        public isSynthetic(): boolean
        public isVarArgs(): boolean
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        public getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
        public getAnnotations(): java.lang.annotation.Annotation[]
      }
    }
  }
}
