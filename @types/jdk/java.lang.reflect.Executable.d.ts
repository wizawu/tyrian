declare namespace java {
  namespace lang {
    namespace reflect {
      abstract class Executable
        extends java.lang.reflect.AccessibleObject
        implements java.lang.reflect.Member, java.lang.reflect.GenericDeclaration
      {
        constructor()
        abstract getAnnotationBytes(): number[]
        abstract hasGenericInformation(): boolean
        abstract getGenericInfo(): sun.reflect.generics.repository.ConstructorRepository
        equalParamTypes(arg0: java.lang.Class<unknown>[], arg1: java.lang.Class<unknown>[]): boolean
        parseParameterAnnotations(arg0: number[] | java.lang.Byte[]): java.lang.annotation.Annotation[][]
        printModifiersIfNonzero(
          arg0: java.lang.StringBuilder,
          arg1: number | java.lang.Integer,
          arg2: boolean | java.lang.Boolean
        ): void
        sharedToString(
          arg0: number | java.lang.Integer,
          arg1: boolean | java.lang.Boolean,
          arg2: java.lang.Class<unknown>[],
          arg3: java.lang.Class<unknown>[]
        ): java.lang.String
        abstract specificToStringHeader(arg0: java.lang.StringBuilder): void
        sharedToGenericString(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): java.lang.String
        abstract specificToGenericStringHeader(arg0: java.lang.StringBuilder): void
        public abstract getDeclaringClass(): java.lang.Class<unknown>
        public abstract getName(): java.lang.String
        public abstract getModifiers(): number
        public abstract getTypeParameters(): java.lang.reflect.TypeVariable<unknown>[]
        abstract getSharedParameterTypes(): java.lang.Class<unknown>[]
        abstract getSharedExceptionTypes(): java.lang.Class<unknown>[]
        public abstract getParameterTypes(): java.lang.Class<unknown>[]
        public getParameterCount(): number
        public getGenericParameterTypes(): java.lang.reflect.Type[]
        getAllGenericParameterTypes(): java.lang.reflect.Type[]
        public getParameters(): java.lang.reflect.Parameter[]
        hasRealParameterData(): boolean
        getTypeAnnotationBytes0(): number[]
        getTypeAnnotationBytes(): number[]
        public abstract getExceptionTypes(): java.lang.Class<unknown>[]
        public getGenericExceptionTypes(): java.lang.reflect.Type[]
        public abstract toGenericString(): java.lang.String
        public isVarArgs(): boolean
        public isSynthetic(): boolean
        public abstract getParameterAnnotations(): java.lang.annotation.Annotation[][]
        sharedGetParameterAnnotations(
          arg0: java.lang.Class<unknown>[],
          arg1: number[] | java.lang.Byte[]
        ): java.lang.annotation.Annotation[][]
        abstract handleParameterNumberMismatch(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): boolean
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        public abstract getAnnotatedReturnType(): java.lang.reflect.AnnotatedType
        getAnnotatedReturnType0(
          arg0: java.lang.reflect.Type | java.lang.reflect.Type$$lambda
        ): java.lang.reflect.AnnotatedType
        public getAnnotatedReceiverType(): java.lang.reflect.AnnotatedType
        public getAnnotatedParameterTypes(): java.lang.reflect.AnnotatedType[]
        public getAnnotatedExceptionTypes(): java.lang.reflect.AnnotatedType[]
      }
    }
  }
}
