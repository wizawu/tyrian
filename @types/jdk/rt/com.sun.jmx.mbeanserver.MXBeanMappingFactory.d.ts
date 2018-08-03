declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                abstract class MXBeanMappingFactory {
                    public static readonly DEFAULT: com.sun.jmx.mbeanserver.MXBeanMappingFactory
                    protected constructor()
                    public abstract mappingForType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: com.sun.jmx.mbeanserver.MXBeanMappingFactory | com.sun.jmx.mbeanserver.MXBeanMappingFactory$$Lambda): com.sun.jmx.mbeanserver.MXBeanMapping
                    public static class: java.lang.Class<any>
                }
                interface MXBeanMappingFactory$$Lambda {
                    (arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: com.sun.jmx.mbeanserver.MXBeanMappingFactory | com.sun.jmx.mbeanserver.MXBeanMappingFactory$$Lambda): com.sun.jmx.mbeanserver.MXBeanMapping
                }
            }
        }
    }
}