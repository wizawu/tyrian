declare namespace sun {
    namespace util {
        namespace locale {
            class LocaleMatcher {
                public static filter(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>, arg2: java.util.Locale$FilteringMode): java.util.List<java.util.Locale>
                public static filterTags(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>, arg2: java.util.Locale$FilteringMode): java.util.List<java.lang.String>
                public static lookup(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>): java.util.Locale
                public static lookupTag(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>): string
                public static parse(arg0: java.lang.String | string): java.util.List<java.util.Locale$LanguageRange>
                public static mapEquivalents(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): java.util.List<java.util.Locale$LanguageRange>
                public static class: java.lang.Class<any>
            }
        }
    }
}