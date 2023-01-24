declare namespace java {
  namespace beans {
    interface BeanInfo {
      readonly ICON_COLOR_16x16: int
      readonly ICON_COLOR_32x32: int
      readonly ICON_MONO_16x16: int
      readonly ICON_MONO_32x32: int
      getBeanDescriptor(): java.beans.BeanDescriptor
      getEventSetDescriptors(): java.beans.EventSetDescriptor[]
      getDefaultEventIndex(): number
      getPropertyDescriptors(): java.beans.PropertyDescriptor[]
      getDefaultPropertyIndex(): number
      getMethodDescriptors(): java.beans.MethodDescriptor[]
      getAdditionalBeanInfo(): java.beans.BeanInfo[]
      getIcon(arg0: number | java.lang.Integer): java.awt.Image
    }
  }
}
