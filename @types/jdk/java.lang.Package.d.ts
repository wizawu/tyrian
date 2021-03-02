declare namespace java {
  namespace lang {

    class Package extends java.lang.NamedPackage implements java.lang.reflect.AnnotatedElement {
      public getName(): java.lang.String
      public getSpecificationTitle(): java.lang.String
      public getSpecificationVersion(): java.lang.String
      public getSpecificationVendor(): java.lang.String
      public getImplementationTitle(): java.lang.String
      public getImplementationVersion(): java.lang.String
      public getImplementationVendor(): java.lang.String
      public isSealed(): boolean
      public isSealed(arg0: java.net.URL): boolean
      public isCompatibleWith(arg0: java.lang.String | string): boolean
      public static getPackage(arg0: java.lang.String | string): java.lang.Package
      public static getPackages(): java.lang.Package[]
      public hashCode(): number
      public toString(): java.lang.String
      public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public isAnnotationPresent(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
      public getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
      public getAnnotations(): java.lang.annotation.Annotation[]
      public getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
      public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
      constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.net.URL, arg8: java.lang.ClassLoader)
      constructor(arg0: java.lang.String | string, arg1: java.lang.Module)
    }

  }
}
