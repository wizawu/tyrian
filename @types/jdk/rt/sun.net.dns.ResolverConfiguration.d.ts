declare namespace sun {
    namespace net {
        namespace dns {
            abstract class ResolverConfiguration {
                protected constructor()
                public static open(): sun.net.dns.ResolverConfiguration
                public abstract searchlist(): java.util.List<java.lang.String>
                public abstract nameservers(): java.util.List<java.lang.String>
                public abstract options(): sun.net.dns.ResolverConfiguration$Options
                public static class: java.lang.Class<any>
            }
        }
    }
}