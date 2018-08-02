declare namespace sun {
    namespace applet {
        class AppletSecurity extends sun.awt.AWTSecurityManager {
            public constructor()
            public reset(): void
            protected inThreadGroup(arg0: java.lang.ThreadGroup | java.lang.ThreadGroup$$Lambda): boolean
            protected inThreadGroup(arg0: java.lang.Thread | java.lang.Thread$$Lambda): boolean
            public checkAccess(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
            public checkAccess(arg0: java.lang.ThreadGroup | java.lang.ThreadGroup$$Lambda): void
            public checkPackageAccess(arg0: java.lang.String | string): void
            public checkAwtEventQueueAccess(): void
            public getThreadGroup(): java.lang.ThreadGroup
            public getAppContext(): sun.awt.AppContext
            public static class: java.lang.Class<any>
        }
    }
}