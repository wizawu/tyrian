declare namespace com {
  namespace sun {
    namespace java {
      namespace accessibility {
        namespace util {

          class EventQueueMonitor implements java.awt.event.AWTEventListener {
            static topLevelWindows: java.util.Vector<java.awt.Container>
            static topLevelWindowWithFocus: java.awt.Window
            static currentMousePosition: java.awt.Point
            static currentMouseComponent: java.awt.Component
            static guiInitializedListener: com.sun.java.accessibility.util.GUIInitializedListener
            static topLevelWindowListener: com.sun.java.accessibility.util.TopLevelWindowListener
            static mouseMotionListener: java.awt.event.MouseMotionListener
            static guiInitialized: boolean
            static componentEventQueue: com.sun.java.accessibility.util.EventQueueMonitorItem
            static componentEventQueueLock: java.lang.Object
            public constructor()
            static queueComponentEvent(arg0: java.awt.event.ComponentEvent): void
            public static maybeInitialize(): void
            public eventDispatched(arg0: java.awt.AWTEvent): void
            static maybeNotifyAssistiveTechnologies(): void
            static addTopLevelWindow(arg0: java.awt.Component): void
            static removeTopLevelWindow(arg0: java.awt.Window): void
            static updateCurrentMousePosition(arg0: java.awt.event.MouseEvent): void
            static processEvent(arg0: java.awt.AWTEvent): void
            static getShowingComponentAt(arg0: java.awt.Container, arg1: int, arg2: int): java.awt.Component
            static getComponentAt(arg0: java.awt.Container, arg1: java.awt.Point): java.awt.Component
            public static getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            public static isGUIInitialized(): boolean
            public static addGUIInitializedListener(arg0: com.sun.java.accessibility.util.GUIInitializedListener): void
            public static removeGUIInitializedListener(arg0: com.sun.java.accessibility.util.GUIInitializedListener): void
            public static addTopLevelWindowListener(arg0: com.sun.java.accessibility.util.TopLevelWindowListener): void
            public static removeTopLevelWindowListener(arg0: com.sun.java.accessibility.util.TopLevelWindowListener): void
            public static getCurrentMousePosition(): java.awt.Point
            public static getTopLevelWindows(): java.awt.Window[]
            public static getTopLevelWindowWithFocus(): java.awt.Window
          }

        }
      }
    }
  }
}
