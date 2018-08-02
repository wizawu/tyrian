declare namespace sun {
    namespace awt {
        interface AWTAccessor$AWTEventAccessor {
            setPosted(arg0: java.awt.AWTEvent): void
            setSystemGenerated(arg0: java.awt.AWTEvent): void
            isSystemGenerated(arg0: java.awt.AWTEvent): boolean
            getAccessControlContext(arg0: java.awt.AWTEvent): java.security.AccessControlContext
            getBData(arg0: java.awt.AWTEvent): byte[]
            setBData(arg0: java.awt.AWTEvent, arg1: byte[]): void
        }
    }
}