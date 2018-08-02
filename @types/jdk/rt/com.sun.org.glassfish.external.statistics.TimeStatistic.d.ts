declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
interface TimeStatistic extends com.sun.org.glassfish.external.statistics.Statistic {
    getCount(): long
    getMaxTime(): long
    getMinTime(): long
    getTotalTime(): long
}

                    }
                }
            }
        }
    }
}