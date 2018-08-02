declare namespace sun {
    namespace util {
        class CoreResourceBundleControl extends java.util.ResourceBundle$Control {
            protected constructor()
            public static getRBControlInstance(): sun.util.CoreResourceBundleControl
            public static getRBControlInstance(arg0: java.lang.String | string): sun.util.CoreResourceBundleControl
            public getCandidateLocales(arg0: java.lang.String | string, arg1: java.util.Locale): java.util.List<java.util.Locale>
            public getTimeToLive(arg0: java.lang.String | string, arg1: java.util.Locale): long
            public static class: java.lang.Class<any>
        }
    }
}