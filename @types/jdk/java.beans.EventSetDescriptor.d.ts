declare namespace java {
  namespace beans {

    class EventSetDescriptor extends java.beans.FeatureDescriptor {
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, arg3: java.lang.String | string)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, arg3: java.lang.String[] | string[], arg4: java.lang.String | string, arg5: java.lang.String | string)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, arg3: java.lang.String[] | string[], arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, arg2: java.lang.reflect.Method[], arg3: java.lang.reflect.Method, arg4: java.lang.reflect.Method)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, arg2: java.lang.reflect.Method[], arg3: java.lang.reflect.Method, arg4: java.lang.reflect.Method, arg5: java.lang.reflect.Method)
      constructor(arg0: java.lang.String | string, arg1: com.sun.beans.introspect.EventSetInfo, ...vargs: (java.lang.reflect.Method)[])
      public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, arg2: java.beans.MethodDescriptor[], arg3: java.lang.reflect.Method, arg4: java.lang.reflect.Method)
      public getListenerType(): java.lang.Class<unknown>
      public getListenerMethods(): java.lang.reflect.Method[]
      public getListenerMethodDescriptors(): java.beans.MethodDescriptor[]
      public getAddListenerMethod(): java.lang.reflect.Method
      public getRemoveListenerMethod(): java.lang.reflect.Method
      public getGetListenerMethod(): java.lang.reflect.Method
      public setUnicast(arg0: boolean | java.lang.Boolean): void
      public isUnicast(): boolean
      public setInDefaultEventSet(arg0: boolean | java.lang.Boolean): void
      public isInDefaultEventSet(): boolean
      constructor(arg0: java.beans.EventSetDescriptor, arg1: java.beans.EventSetDescriptor)
      constructor(arg0: java.beans.EventSetDescriptor)
      appendTo(arg0: java.lang.StringBuilder): void
    }

  }
}
