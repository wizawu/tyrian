declare namespace java {
    namespace time {
        namespace zone {
            abstract class ZoneRulesProvider {
                public static getAvailableZoneIds(): java.util.Set<java.lang.String>
                public static getRules(arg0: java.lang.String | string, arg1: boolean): java.time.zone.ZoneRules
                public static getVersions(arg0: java.lang.String | string): java.util.NavigableMap<java.lang.String, java.time.zone.ZoneRules>
                public static registerProvider(arg0: java.time.zone.ZoneRulesProvider): void
                public static refresh(): boolean
                protected constructor()
                protected provideZoneIds(): java.util.Set<java.lang.String>
                protected provideRules(arg0: java.lang.String | string, arg1: boolean): java.time.zone.ZoneRules
                protected provideVersions(arg0: java.lang.String | string): java.util.NavigableMap<java.lang.String, java.time.zone.ZoneRules>
                protected provideRefresh(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}