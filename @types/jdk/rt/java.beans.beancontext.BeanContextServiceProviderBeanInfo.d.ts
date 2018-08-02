declare namespace java {
    namespace beans {
        namespace beancontext {
            interface BeanContextServiceProviderBeanInfo extends java.beans.BeanInfo {
                getServicesBeanInfo(): java.beans.BeanInfo[]
            }
        }
    }
}