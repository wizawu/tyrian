declare namespace java {
  namespace beans {

    class BeanDescriptor extends java.beans.FeatureDescriptor {
      public constructor(arg0: java.lang.Class<unknown>)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>)
      public getBeanClass(): java.lang.Class<unknown>
      public getCustomizerClass(): java.lang.Class<unknown>
      constructor(arg0: java.beans.BeanDescriptor)
      appendTo(arg0: java.lang.StringBuilder): void
    }

  }
}
