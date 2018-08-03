declare namespace javax {
    namespace xml {
        namespace ws {
            abstract class WebServiceFeature {
                protected enabled: boolean
                public abstract getID(): string
                protected constructor()
                public isEnabled(): boolean
                public static class: java.lang.Class<any>
            }
            interface WebServiceFeature$$Lambda {
                (): string
            }
        }
    }
}