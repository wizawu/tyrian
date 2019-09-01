declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkWrapper {
                public static isToplevel(arg0: java.lang.Object): boolean
                public static registerPropertyChangeListener(arg0: javax.accessibility.AccessibleContext): void
                public static initNativeLibrary(): boolean
                public static loadAtkBridge(): void
                public static GC(): void
                public static focusNotify(arg0: javax.accessibility.AccessibleContext): void
                public static windowOpen(arg0: javax.accessibility.AccessibleContext, arg1: boolean): void
                public static windowClose(arg0: javax.accessibility.AccessibleContext, arg1: boolean): void
                public static windowMinimize(arg0: javax.accessibility.AccessibleContext): void
                public static windowMaximize(arg0: javax.accessibility.AccessibleContext): void
                public static windowRestore(arg0: javax.accessibility.AccessibleContext): void
                public static windowActivate(arg0: javax.accessibility.AccessibleContext): void
                public static windowDeactivate(arg0: javax.accessibility.AccessibleContext): void
                public static windowStateChange(arg0: javax.accessibility.AccessibleContext): void
                public static emitSignal(arg0: javax.accessibility.AccessibleContext, arg1: int, arg2: java.lang.Object[]): void
                public static objectStateChange(arg0: javax.accessibility.AccessibleContext, arg1: java.lang.Object, arg2: boolean): void
                public static componentAdded(arg0: javax.accessibility.AccessibleContext): void
                public static componentRemoved(arg0: javax.accessibility.AccessibleContext): void
                public static boundsChanged(arg0: javax.accessibility.AccessibleContext): void
                public static dispatchKeyEvent(arg0: org.GNOME.Accessibility.AtkKeyEvent): boolean
                public static printLog(arg0: java.lang.String | string): void
                public constructor()
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}