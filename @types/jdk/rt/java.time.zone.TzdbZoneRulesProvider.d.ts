declare namespace java {
    namespace time {
        namespace zone {
class TzdbZoneRulesProvider extends java.time.zone.ZoneRulesProvider {
    public constructor()
    protected provideZoneIds(): java.util.Set<java.lang.String>
    protected provideRules(arg0: java.lang.String | string, arg1: boolean): java.time.zone.ZoneRules
    protected provideVersions(arg0: java.lang.String | string): java.util.NavigableMap<java.lang.String, java.time.zone.ZoneRules>
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}