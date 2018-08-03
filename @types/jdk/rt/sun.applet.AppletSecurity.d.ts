declare namespace sun {
    namespace applet {
        class AppletSecurity extends sun.awt.AWTSecurityManager {
            public constructor()
            public reset(): void
            protected inThreadGroup(arg0: java.lang.ThreadGroup): boolean
            protected inThreadGroup(arg0: java.lang.Thread): boolean
            public checkAccess(arg0: java.lang.Thread): void
            public checkAccess(arg0: java.lang.ThreadGroup): void
            public checkPackageAccess(arg0: java.lang.String | string): void
            public checkAwtEventQueueAccess(): void
            public getThreadGroup(): java.lang.ThreadGroup
            public getAppContext(): sun.awt.AppContext
            public static class: java.lang.Class<any>
        }
    }
}