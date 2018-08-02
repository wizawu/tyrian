declare namespace sun {
    namespace awt {
        namespace X11 {
            class XErrorHandlerUtil {
                public static WITH_XERROR_HANDLER(arg0: sun.awt.X11.XErrorHandler): void
                public static RESTORE_XERROR_HANDLER(): void
                public static SAVED_XERROR_HANDLER(arg0: long, arg1: sun.awt.X11.XErrorEvent): int
                public static class: java.lang.Class<any>
            }
        }
    }
}