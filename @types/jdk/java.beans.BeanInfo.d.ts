declare namespace java {
  namespace beans {

    interface BeanInfo {
      public static readonly ICON_COLOR_16x16: int
      public static readonly ICON_COLOR_32x32: int
      public static readonly ICON_MONO_16x16: int
      public static readonly ICON_MONO_32x32: int
      getBeanDescriptor(): java.beans.BeanDescriptor
      getEventSetDescriptors(): java.beans.EventSetDescriptor[]
      getDefaultEventIndex(): int
      getPropertyDescriptors(): java.beans.PropertyDescriptor[]
      getDefaultPropertyIndex(): int
      getMethodDescriptors(): java.beans.MethodDescriptor[]
      getAdditionalBeanInfo(): java.beans.BeanInfo[]
      getIcon(arg0: int): java.awt.Image
    }

  }
}
