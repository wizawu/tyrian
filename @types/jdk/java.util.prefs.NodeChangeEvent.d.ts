declare namespace java {
  namespace util {
    namespace prefs {
      class NodeChangeEvent extends java.util.EventObject {
        public constructor(arg0: java.util.prefs.Preferences, arg1: java.util.prefs.Preferences)
        public getParent(): java.util.prefs.Preferences
        public getChild(): java.util.prefs.Preferences
      }
    }
  }
}
