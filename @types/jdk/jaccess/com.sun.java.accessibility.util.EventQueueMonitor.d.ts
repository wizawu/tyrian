declare namespace com {
    namespace sun {
        namespace java {
            namespace accessibility {
                namespace util {
class EventQueueMonitor implements java.awt.event.AWTEventListener {
    public constructor()
    public static maybeInitialize(): void
    public eventDispatched(arg0: java.awt.AWTEvent): void
    public static getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
    public static isGUIInitialized(): boolean
    public static addGUIInitializedListener(arg0: com.sun.java.accessibility.util.GUIInitializedListener): void
    public static removeGUIInitializedListener(arg0: com.sun.java.accessibility.util.GUIInitializedListener): void
    public static addTopLevelWindowListener(arg0: com.sun.java.accessibility.util.TopLevelWindowListener): void
    public static removeTopLevelWindowListener(arg0: com.sun.java.accessibility.util.TopLevelWindowListener): void
    public static getCurrentMousePosition(): java.awt.Point
    public static getTopLevelWindows(): java.awt.Window[]
    public static getTopLevelWindowWithFocus(): java.awt.Window
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}