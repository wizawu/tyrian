declare namespace java {
  namespace util {
    namespace prefs {

      class PreferenceChangeEvent extends java.util.EventObject {
        public constructor(arg0: java.util.prefs.Preferences, arg1: java.lang.String, arg2: java.lang.String)
        public getNode(): java.util.prefs.Preferences
        public getKey(): java.lang.String
        public getNewValue(): java.lang.String
      }

    }
  }
}
