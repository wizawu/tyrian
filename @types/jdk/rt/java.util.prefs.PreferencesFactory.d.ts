declare namespace java {
    namespace util {
        namespace prefs {
interface PreferencesFactory {
    systemRoot(): java.util.prefs.Preferences
    userRoot(): java.util.prefs.Preferences
}

        }
    }
}