declare namespace java {
  namespace beans {

    class SimpleBeanInfo implements java.beans.BeanInfo {
      public constructor()
      public getBeanDescriptor(): java.beans.BeanDescriptor
      public getPropertyDescriptors(): java.beans.PropertyDescriptor[]
      public getDefaultPropertyIndex(): number
      public getEventSetDescriptors(): java.beans.EventSetDescriptor[]
      public getDefaultEventIndex(): number
      public getMethodDescriptors(): java.beans.MethodDescriptor[]
      public getAdditionalBeanInfo(): java.beans.BeanInfo[]
      public getIcon(arg0: number | java.lang.Integer): java.awt.Image
      public loadImage(arg0: java.lang.String | string): java.awt.Image
    }

  }
}
