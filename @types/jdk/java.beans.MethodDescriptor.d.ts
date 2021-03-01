declare namespace java {
  namespace beans {

    class MethodDescriptor extends java.beans.FeatureDescriptor {

      public constructor(arg0: java.lang.reflect.Method)
      public constructor(arg0: java.lang.reflect.Method, arg1: java.beans.ParameterDescriptor[])
      public getMethod(): java.lang.reflect.Method
      getParamNames(): java.lang.String[]
      public getParameterDescriptors(): java.beans.ParameterDescriptor[]
      constructor(arg0: java.beans.MethodDescriptor, arg1: java.beans.MethodDescriptor)
      constructor(arg0: java.beans.MethodDescriptor)
      appendTo(arg0: java.lang.StringBuilder): void
    }

  }
}
