declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace security {
                    class MBeanServerFileAccessController extends com.sun.jmx.remote.security.MBeanServerAccessController {
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: java.lang.String | string, arg1: javax.management.MBeanServer)
                        public constructor(arg0: java.util.Properties)
                        public constructor(arg0: java.util.Properties, arg1: javax.management.MBeanServer)
                        public checkRead(): void
                        public checkWrite(): void
                        public checkCreate(arg0: java.lang.String | string): void
                        public checkUnregister(arg0: javax.management.ObjectName): void
                        public refresh(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}