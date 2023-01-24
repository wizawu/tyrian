declare namespace java {
  namespace beans {
    class IndexedPropertyDescriptor extends java.beans.PropertyDescriptor {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.Class<unknown>,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string,
        arg5: java.lang.String | string
      )
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.reflect.Method,
        arg2: java.lang.reflect.Method,
        arg3: java.lang.reflect.Method,
        arg4: java.lang.reflect.Method
      )
      constructor(
        arg0: java.util.Map$Entry<java.lang.String, com.sun.beans.introspect.PropertyInfo>,
        arg1: boolean | java.lang.Boolean
      )
      public getIndexedReadMethod(): java.lang.reflect.Method
      public setIndexedReadMethod(arg0: java.lang.reflect.Method): void
      public getIndexedWriteMethod(): java.lang.reflect.Method
      public setIndexedWriteMethod(arg0: java.lang.reflect.Method): void
      public getIndexedPropertyType(): java.lang.Class<unknown>
      public equals(arg0: java.lang.Object | any): boolean
      constructor(arg0: java.beans.PropertyDescriptor, arg1: java.beans.PropertyDescriptor)
      constructor(arg0: java.beans.IndexedPropertyDescriptor)
      updateGenericsFor(arg0: java.lang.Class<unknown>): void
      public hashCode(): number
      appendTo(arg0: java.lang.StringBuilder): void
    }
  }
}
