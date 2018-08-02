declare namespace sun {
    namespace awt {
        namespace im {
            abstract class InputMethodManager {
                public constructor()
                public static getInstance(): sun.awt.im.InputMethodManager
                public getTriggerMenuString(): string
                public notifyChangeRequest(arg0: java.awt.Component): void
                public notifyChangeRequestByHotKey(arg0: java.awt.Component): void
                public static class: java.lang.Class<any>
            }
        }
    }
}