declare namespace java {
  namespace beans {

    class PropertyDescriptor extends java.beans.FeatureDescriptor {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, arg2: java.lang.String | string, arg3: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method, arg2: java.lang.reflect.Method)
      constructor(arg0: java.util.Map$Entry<java.lang.String,com.sun.beans.introspect.PropertyInfo>, arg1: boolean | java.lang.Boolean)
      public getPropertyType(): java.lang.Class<unknown>
      public getReadMethod(): java.lang.reflect.Method
      public setReadMethod(arg0: java.lang.reflect.Method): void
      public getWriteMethod(): java.lang.reflect.Method
      public setWriteMethod(arg0: java.lang.reflect.Method): void
      setClass0(arg0: java.lang.Class<unknown>): void
      public isBound(): boolean
      public setBound(arg0: boolean | java.lang.Boolean): void
      public isConstrained(): boolean
      public setConstrained(arg0: boolean | java.lang.Boolean): void
      public setPropertyEditorClass(arg0: java.lang.Class<unknown>): void
      public getPropertyEditorClass(): java.lang.Class<unknown>
      public createPropertyEditor(arg0: java.lang.Object | any): java.beans.PropertyEditor
      public equals(arg0: java.lang.Object | any): boolean
      compareMethods(arg0: java.lang.reflect.Method, arg1: java.lang.reflect.Method): boolean
      constructor(arg0: java.beans.PropertyDescriptor, arg1: java.beans.PropertyDescriptor)
      constructor(arg0: java.beans.PropertyDescriptor)
      updateGenericsFor(arg0: java.lang.Class<unknown>): void
      public hashCode(): number
      getBaseName(): java.lang.String
      appendTo(arg0: java.lang.StringBuilder): void
      isAssignable(arg0: java.lang.reflect.Method, arg1: java.lang.reflect.Method): boolean
    }

  }
}
