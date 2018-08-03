declare namespace javax {
    namespace xml {
        namespace bind {
            namespace util {
                class ValidationEventCollector implements javax.xml.bind.ValidationEventHandler {
                    public constructor()
                    public getEvents(): javax.xml.bind.ValidationEvent[]
                    public reset(): void
                    public hasEvents(): boolean
                    public handleEvent(arg0: javax.xml.bind.ValidationEvent): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}