declare namespace java {
    namespace util {
        namespace prefs {
            interface PreferenceChangeListener extends java.util.EventListener {
                preferenceChange(arg0: java.util.prefs.PreferenceChangeEvent): void
            }
            interface PreferenceChangeListener$$Lambda extends java.util.EventListener {
                (arg0: java.util.prefs.PreferenceChangeEvent): void
            }
        }
    }
}