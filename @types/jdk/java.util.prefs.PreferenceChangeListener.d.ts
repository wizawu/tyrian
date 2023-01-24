declare namespace java {
  namespace util {
    namespace prefs {
      interface PreferenceChangeListener$$lambda {
        (arg0: java.util.prefs.PreferenceChangeEvent): void
      }

      interface PreferenceChangeListener extends java.util.EventListener {
        preferenceChange(arg0: java.util.prefs.PreferenceChangeEvent): void
      }
    }
  }
}
