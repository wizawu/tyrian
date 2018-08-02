declare namespace java {
    namespace beans {
        class SimpleBeanInfo implements java.beans.BeanInfo {
            public constructor()
            public getBeanDescriptor(): java.beans.BeanDescriptor
            public getPropertyDescriptors(): java.beans.PropertyDescriptor[]
            public getDefaultPropertyIndex(): int
            public getEventSetDescriptors(): java.beans.EventSetDescriptor[]
            public getDefaultEventIndex(): int
            public getMethodDescriptors(): java.beans.MethodDescriptor[]
            public getAdditionalBeanInfo(): java.beans.BeanInfo[]
            public getIcon(arg0: int): java.awt.Image
            public loadImage(arg0: java.lang.String | string): java.awt.Image
            public static class: java.lang.Class<any>
        }
    }
}