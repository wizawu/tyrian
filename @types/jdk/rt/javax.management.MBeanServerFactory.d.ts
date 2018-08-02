declare namespace javax {
    namespace management {
        class MBeanServerFactory {
            public static releaseMBeanServer(arg0: javax.management.MBeanServer): void
            public static createMBeanServer(): javax.management.MBeanServer
            public static createMBeanServer(arg0: java.lang.String | string): javax.management.MBeanServer
            public static newMBeanServer(): javax.management.MBeanServer
            public static newMBeanServer(arg0: java.lang.String | string): javax.management.MBeanServer
            public static findMBeanServer(arg0: java.lang.String | string): java.util.ArrayList<javax.management.MBeanServer>
            public static getClassLoaderRepository(arg0: javax.management.MBeanServer): javax.management.loading.ClassLoaderRepository
            public static class: java.lang.Class<any>
        }
    }
}