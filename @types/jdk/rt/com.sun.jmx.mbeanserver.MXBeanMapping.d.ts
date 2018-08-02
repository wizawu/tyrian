declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                abstract class MXBeanMapping {
                    protected constructor(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: javax.management.openmbean.OpenType<any>)
                    public getJavaType(): java.lang.reflect.Type
                    public getOpenType(): javax.management.openmbean.OpenType<any>
                    public getOpenClass(): java.lang.Class<any>
                    public fromOpenValue(arg0: java.lang.Object): java.lang.Object
                    public toOpenValue(arg0: java.lang.Object): java.lang.Object
                    public checkReconstructible(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}